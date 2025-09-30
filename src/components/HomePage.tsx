import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  BookOpen, 
  Users, 
  ShoppingBag, 
  Award, 
  Zap, 
  Shield, 
  MessageCircle,
  Calendar,
  ChevronRight,
  Star,
  TrendingUp,
  Globe
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onShowAuth: () => void;
  user: { email: string; name: string } | null;
}

export function HomePage({ onNavigate, onShowAuth, user }: HomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const features = [
    {
      icon: BookOpen,
      title: "Skill Sharing Hub",
      description: "Connect with peers to learn new skills and share your expertise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingBag,
      title: "Student Marketplace",
      description: "Buy and sell books, electronics, and hostel essentials safely",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Ask questions, share notes, and connect with fellow students",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Workshops & Events",
      description: "Join peer-hosted workshops and academic events",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      year: "3rd Year CSE",
      message: "Found an amazing tutor for Data Structures through NMIET Connect. The platform is incredibly secure and user-friendly!",
      rating: 5
    },
    {
      name: "Rahul Patel",
      year: "2nd Year ECE",
      message: "Sold my old textbooks within a week! The student-only verification gives me confidence in every transaction.",
      rating: 5
    },
    {
      name: "Ananya Desai",
      year: "4th Year IT",
      message: "The skill exchange feature helped me learn web development from a senior. Great community platform!",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Active Students" },
    { number: "200+", label: "Skills Shared" },
    { number: "1000+", label: "Items Traded" },
    { number: "50+", label: "Events Hosted" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen overflow-auto">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y, opacity, scale }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTE2NDExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students collaborating"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-blue-500/20" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
              🎓 Exclusively for NMIET Students
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent leading-tight"
          >
            Learn, Share, and Exchange
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A secure platform for peer-to-peer skill sharing and second-hand marketplace, 
            designed exclusively for NMIET students to connect, learn, and grow together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {user ? (
              <>
                <Button
                  size="lg"
                  onClick={() => onNavigate('skills')}
                  className="bg-gradient-to-r from-primary to-blue-500 hover:scale-105 transition-transform duration-200 px-8 py-4"
                >
                  Explore Skills <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('marketplace')}
                  className="border-primary/30 hover:bg-primary/10 px-8 py-4"
                >
                  Visit Marketplace
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="lg"
                  onClick={onShowAuth}
                  className="bg-gradient-to-r from-primary to-blue-500 hover:scale-105 transition-transform duration-200 px-8 py-4"
                >
                  Join NMIET Connect <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('features')}
                  className="border-primary/30 hover:bg-primary/10 px-8 py-4"
                >
                  Explore Features
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
              ✨ Platform Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover powerful features designed specifically for NMIET students to enhance 
              learning, collaboration, and campus life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <motion.div
                      className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium">Learn more</span>
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
              💬 Student Voices
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What NMIET Students Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.message}"
                    </p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.year}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of NMIET students who are already learning, sharing, and growing together on our platform.
            </p>
            
            {!user && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={onShowAuth}
                  className="bg-gradient-to-r from-primary to-blue-500 px-8 py-4"
                >
                  Join NMIET Connect Today <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                NMIET Connect
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering NMIET students through secure peer-to-peer learning and marketplace experiences.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => onNavigate('features')} className="block hover:text-foreground transition-colors">
                  Features
                </button>
                <button onClick={() => onNavigate('how-it-works')} className="block hover:text-foreground transition-colors">
                  How It Works
                </button>
                <button onClick={() => onNavigate('about')} className="block hover:text-foreground transition-colors">
                  About Us
                </button>
                <button onClick={() => onNavigate('contact')} className="block hover:text-foreground transition-colors">
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => onNavigate('skills')} className="block hover:text-foreground transition-colors">
                  Skills
                </button>
                <button onClick={() => onNavigate('marketplace')} className="block hover:text-foreground transition-colors">
                  Marketplace
                </button>
                <button onClick={() => onNavigate('community')} className="block hover:text-foreground transition-colors">
                  Community
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 NMIET Connect. Made with ❤️ for NMIET students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}