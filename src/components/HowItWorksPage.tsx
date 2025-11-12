import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  UserPlus, 
  Search, 
  MessageCircle, 
  CheckCircle,
  Mail,
  Shield,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface HowItWorksPageProps {
  onNavigate: (page: Page) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: "01",
      icon: Mail,
      title: "Sign Up with NMIET Email",
      description: "Create your account using your @nmiet.edu.in email address to join our exclusive student community.",
      details: [
        "Enter your NMIET email address",
        "Create a secure password",
        "Verify your email",
        "Set up your student profile"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: UserPlus,
      title: "Share Skills or Post Items",
      description: "Add your skills to help other students learn, or list items you want to sell on the marketplace.",
      details: [
        "Create your skill profile with expertise areas",
        "Upload photos and descriptions for marketplace items",
        "Set your availability and pricing",
        "Add relevant tags and categories"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Connect, Learn, or Exchange",
      description: "Start meaningful connections with fellow NMIET students through learning sessions or marketplace transactions.",
      details: [
        "Browse and request learning sessions",
        "Message sellers about marketplace items",
        "Join community discussions",
        "Attend workshops and events"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "Only NMIET students with verified email addresses can join"
    },
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Advanced search and filtering to find exactly what you need"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Rating and review system ensures quality interactions"
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
            📚 Simple Process
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
            How NMIET Connect Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started is simple! Follow these three easy steps to join the NMIET student community 
            and start learning, sharing, and connecting with your peers.
          </p>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${step.color}`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Step {step.number}
                  </Badge>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {step.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-primary pt-4"
                  >
                    <span className="text-sm font-medium">Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                )}
              </div>

              {/* Visual Card */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color}`}>
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{step.title}</h3>
                              <p className="text-sm text-muted-foreground">Step {step.number}</p>
                            </div>
                          </div>
                          <Badge className={`bg-gradient-to-r ${step.color} text-white border-0`}>
                            Active
                          </Badge>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{Math.round(((index + 1) / steps.length) * 100)}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${((index + 1) / steps.length) * 100}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                              className={`h-2 rounded-full bg-gradient-to-r ${step.color}`}
                            />
                          </div>
                        </div>

                        {/* Mock Interface */}
                        <div className="space-y-3">
                          {step.details.slice(0, 3).map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.2 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                            >
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color}`} />
                              <span className="text-sm flex-1">{detail}</span>
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Floating Number */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {step.number}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Why Choose NMIET Connect?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built specifically for NMIET students with features that matter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-blue-500/20 mb-6"
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of NMIET students who are already learning, sharing, and growing together. 
            Your journey starts with just one click!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-primary to-blue-500"
            >
              Start Your Journey <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('features')}
              className="border-primary/30 hover:bg-primary/10"
            >
              Explore Features
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}