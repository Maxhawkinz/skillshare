import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  Send,
  MessageSquare,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  CheckCircle,
  HelpCircle,
  Bug,
  Lightbulb
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or technical issues",
      details: "ajaythakare500@gmail.com",
      action: "Send Email",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Campus Location",
      description: "Visit us at NMIET campus",
      details: "Narsee Monjee Institute of Engineering & Technology, Mumbai",
      action: "View Location",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Support Hours",
      description: "When our team is available to help",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      action: "Current Hours",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      description: "Connect with us professionally",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      description: "Check out our open source projects",
      url: "#",
      color: "hover:text-gray-600"
    },
    {
      icon: Globe,
      name: "College Portal",
      description: "Visit the official NMIET website",
      url: "#",
      color: "hover:text-green-600"
    }
  ];

  const categories = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'technical', label: 'Technical Support', icon: Bug },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb },
    { value: 'help', label: 'Help & Support', icon: HelpCircle }
  ];

  const faqs = [
    {
      question: "How do I verify my NMIET email?",
      answer: "After signing up, you'll receive a verification email at your @nmiet.edu.in address. Click the verification link to activate your account."
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes! NMIET Connect is completely free for all verified NMIET students. There are no hidden fees or charges."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "You can report any inappropriate content by clicking the report button or contacting our support team directly."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account anytime by contacting our support team. All your data will be permanently removed."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', category: '', message: '' });
    }, 2000);
  };

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
            💬 Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent">
            Contact Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need support? We're here to help you make the most 
            of your NMIET Connect experience.
          </p>
        </motion.section>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {info.description}
                    </p>
                    <p className="font-medium mb-6">
                      {info.details}
                    </p>
                    <Button variant="outline" className="group-hover:border-primary/50">
                      {info.action}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">NMIET Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.name@nmiet.edu.in"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category.value} value={category.value}>
                              <div className="flex items-center space-x-2">
                                <category.icon className="w-4 h-4" />
                                <span>{category.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry or feedback..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-blue-500"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.section>

          {/* FAQ & Social Links */}
          <div className="space-y-8">
            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5" />
                    <span>Frequently Asked Questions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                      {index < faqs.length - 1 && <hr className="mt-4 border-border/50" />}
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.section>

            {/* Social Links */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 ${link.color} group`}
                    >
                      <link.icon className="w-6 h-6" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>

        {/* Additional Support */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="border-border/50 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Need Immediate Help?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                For urgent technical issues or account problems, you can also reach out to us directly 
                through your NMIET student portal or visit our campus support desk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </Button>
                <Button onClick={() => onNavigate('community')} className="bg-gradient-to-r from-primary to-blue-500">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Visit Community Forum
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}