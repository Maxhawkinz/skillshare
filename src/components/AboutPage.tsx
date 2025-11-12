import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Target, 
  Heart, 
  Users, 
  Lightbulb,
  Shield,
  Recycle,
  Zap,
  Globe,
  ChevronRight,
  Star,
  Award,
  BookOpen,
  Smartphone
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building strong connections within the NMIET student community through meaningful interactions and support.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "Facilitating peer-to-peer learning where every student can both teach and learn from their fellow classmates.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Recycle,
      title: "Sustainability",
      description: "Promoting sustainable practices through our marketplace that encourages reuse and reduces waste on campus.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Maintaining a safe and trustworthy environment exclusively for verified NMIET students.",
      color: "from-red-500 to-orange-500"
    }
  ];

  const mission = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create a comprehensive platform that empowers NMIET students to learn, share, and grow together through collaborative learning and sustainable marketplace practices."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To foster a thriving ecosystem where every NMIET student can access peer support, share knowledge, and build lasting connections that extend beyond graduation."
    },
    {
      icon: Lightbulb,
      title: "Our Goal",
      description: "To become the go-to platform for all NMIET students' academic, personal, and marketplace needs while building a stronger campus community."
    }
  ];

  const features = [
    {
      title: "Exclusive Access",
      description: "Only verified NMIET students can join our platform",
      icon: Shield
    },
    {
      title: "Skill Exchange",
      description: "Learn from peers and share your expertise",
      icon: Users
    },
    {
      title: "Secure Marketplace",
      description: "Safe buying and selling within campus",
      icon: Zap
    },
    {
      title: "Community Building",
      description: "Connect through forums and events",
      icon: Globe
    }
  ];

  const futureScope = [
    {
      title: "Mobile Application",
      description: "Native iOS and Android apps for better accessibility",
      icon: Smartphone,
      status: "Coming Soon"
    },
    {
      title: "Multi-College Expansion",
      description: "Expanding to other engineering colleges",
      icon: Globe,
      status: "Planned"
    },
    {
      title: "AI-Powered Matching",
      description: "Smart recommendations for skills and items",
      icon: Lightbulb,
      status: "In Development"
    },
    {
      title: "Alumni Network",
      description: "Connect current students with NMIET alumni",
      icon: Award,
      status: "Future"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Students", color: "text-blue-500" },
    { number: "2024", label: "Founded", color: "text-green-500" },
    { number: "95%", label: "Satisfaction Rate", color: "text-purple-500" },
    { number: "24/7", label: "Platform Availability", color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
            🎓 About NMIET Connect
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
            Empowering NMIET Students
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            NMIET Connect is a revolutionary platform designed exclusively for NMIET students to foster 
            collaboration, learning, and sustainable practices within our campus community.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h3 className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission, Vision, Goal */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why We Exist
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform was born from the need to create stronger connections and 
              collaborative opportunities within the NMIET student community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mission.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 mb-4 w-fit">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every feature we build for the NMIET community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${value.color} flex-shrink-0`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Platform Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Designed specifically for NMIET students with features that matter most to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 mb-4 mx-auto w-fit">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Future Scope */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Future Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exciting developments planned to make NMIET Connect even better for our growing community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureScope.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`
                        ${item.status === 'Coming Soon' ? 'border-green-500 text-green-500' :
                          item.status === 'In Development' ? 'border-blue-500 text-blue-500' :
                          item.status === 'Planned' ? 'border-yellow-500 text-yellow-500' :
                          'border-gray-500 text-gray-500'}
                      `}>
                        {item.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the growing NMIET Connect community and experience the future of 
              student collaboration and sustainable campus living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('home')}
                className="bg-gradient-to-r from-primary to-blue-500"
              >
                Get Started Today <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-primary/30 hover:bg-primary/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}