import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  BookOpen, 
  ShoppingBag, 
  MessageCircle, 
  Calendar,
  Award,
  Shield,
  Zap,
  Users,
  Star,
  TrendingUp,
  Search,
  Filter,
  MessageSquare,
  Bell,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface FeaturesPageProps {
  onNavigate: (page: Page) => void;
}

export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const mainFeatures = [
    {
      icon: BookOpen,
      title: "Skill Sharing Hub",
      description: "Connect with peers to learn new skills and share your expertise",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Browse student profiles with skills and ratings",
        "Request one-on-one learning sessions",
        "Rate and review mentors",
        "Track your learning progress"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Student Marketplace",
      description: "Buy and sell books, electronics, and hostel essentials safely",
      color: "from-purple-500 to-pink-500",
      features: [
        "Secure transactions between verified students",
        "Photo uploads and detailed descriptions",
        "Price filters and category sorting",
        "Direct messaging with sellers"
      ]
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Ask questions, share notes, and connect with fellow students",
      color: "from-green-500 to-emerald-500",
      features: [
        "Q&A discussions by subject and topic",
        "Share study materials and notes",
        "Upvote helpful answers",
        "Follow interesting discussions"
      ]
    },
    {
      icon: Calendar,
      title: "Workshops & Events",
      description: "Join peer-hosted workshops and academic events",
      color: "from-orange-500 to-red-500",
      features: [
        "Create and host your own events",
        "RSVP to workshops and seminars",
        "Event calendar integration",
        "Skill-based event recommendations"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Award,
      title: "Gamification System",
      description: "Earn badges and climb leaderboards for active participation",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure Verification",
      description: "NMIET email verification ensures authentic student community",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Advanced filters to find exactly what you're looking for",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Stay updated on messages, events, and marketplace activity",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/20 to-blue-500/20 border-primary/30">
            🚀 Platform Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
            Powerful Features for
            <br />
            NMIET Students
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover everything our platform offers to enhance your learning experience, 
            connect with peers, and make campus life more collaborative and efficient.
          </p>
        </motion.div>
      </section>

      {/* Main Features */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="space-y-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {feature.title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-4 mb-8">
                  {feature.features.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={() => onNavigate('how-it-works')}
                  className="bg-gradient-to-r from-primary to-blue-500"
                >
                  Learn How It Works <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                              <feature.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{feature.title}</h3>
                              <p className="text-sm text-muted-foreground">Active Now</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Live</Badge>
                        </div>
                        
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400" />
                              <div className="flex-1">
                                <div className="h-3 bg-gradient-to-r from-muted-foreground/30 to-transparent rounded mb-1" style={{ width: `${70 + i * 10}%` }} />
                                <div className="h-2 bg-gradient-to-r from-muted-foreground/20 to-transparent rounded" style={{ width: `${40 + i * 15}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-border/50">
                          <span className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 50) + 20} active users
                          </span>
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <Star className="w-4 h-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full opacity-70 blur-sm`}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Additional Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            More tools and features to make your NMIET experience even better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 mx-auto`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the NMIET Connect community and start exploring all these amazing features designed specifically for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-primary to-blue-500"
            >
              Get Started <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('how-it-works')}
              className="border-primary/30 hover:bg-primary/10"
            >
              How It Works
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}