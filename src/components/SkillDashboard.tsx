import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  MessageCircle, 
  Calendar,
  Code,
  Palette,
  Music,
  Calculator,
  Globe,
  Camera,
  BookOpen,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface SkillDashboardProps {
  onNavigate: (page: Page) => void;
  user: { email: string; name: string } | null;
}

const skillIcons = {
  'Programming': Code,
  'Design': Palette,
  'Music': Music,
  'Mathematics': Calculator,
  'Languages': Globe,
  'Photography': Camera,
  'Academic': BookOpen,
  'Other': Zap
};

export function SkillDashboard({ onNavigate, user }: SkillDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const mockStudents = [
    {
      id: 1,
      name: "Arjun Sharma",
      year: "3rd Year CSE",
      skills: ["React", "Node.js", "Python"],
      category: "Programming",
      rating: 4.8,
      sessions: 15,
      avatar: "AS",
      description: "Full-stack developer with 2 years of experience. Love teaching React and modern web development."
    },
    {
      id: 2,
      name: "Priya Patel",
      year: "2nd Year ECE",
      skills: ["UI/UX Design", "Figma", "Illustrator"],
      category: "Design",
      rating: 4.9,
      sessions: 22,
      avatar: "PP",
      description: "Passionate about creating beautiful and functional user interfaces. Available for design mentoring."
    },
    {
      id: 3,
      name: "Rohit Kumar",
      year: "4th Year IT",
      skills: ["Machine Learning", "Data Science", "Python"],
      category: "Programming",
      rating: 4.7,
      sessions: 18,
      avatar: "RK",
      description: "ML enthusiast working on innovative projects. Happy to help with AI/ML concepts and implementation."
    },
    {
      id: 4,
      name: "Sneha Desai",
      year: "3rd Year CSE",
      skills: ["Digital Marketing", "Content Writing", "SEO"],
      category: "Other",
      rating: 4.6,
      sessions: 12,
      avatar: "SD",
      description: "Digital marketing expert with proven results. Can help with social media strategy and content creation."
    },
    {
      id: 5,
      name: "Vikram Singh",
      year: "2nd Year Mech",
      skills: ["Guitar", "Music Production", "Composition"],
      category: "Music",
      rating: 4.8,
      sessions: 25,
      avatar: "VS",
      description: "Musician and composer. Teaching guitar and music production for 3+ years. All skill levels welcome."
    },
    {
      id: 6,
      name: "Anjali Reddy",
      year: "4th Year IT",
      skills: ["Photography", "Video Editing", "Adobe Suite"],
      category: "Photography",
      rating: 4.9,
      sessions: 20,
      avatar: "AR",
      description: "Professional photographer and videographer. Specializing in portrait and event photography."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Programming', label: 'Programming' },
    { value: 'Design', label: 'Design' },
    { value: 'Music', label: 'Music' },
    { value: 'Photography', label: 'Photography' },
    { value: 'Other', label: 'Other' }
  ];

  const years = [
    { value: 'all', label: 'All Years' },
    { value: '1st', label: '1st Year' },
    { value: '2nd', label: '2nd Year' },
    { value: '3rd', label: '3rd Year' },
    { value: '4th', label: '4th Year' }
  ];

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || student.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || student.year.includes(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const topSkills = [
    { skill: "React", count: 24, trend: "+15%" },
    { skill: "Python", count: 32, trend: "+22%" },
    { skill: "UI/UX Design", count: 18, trend: "+8%" },
    { skill: "Machine Learning", count: 15, trend: "+35%" },
    { skill: "Photography", count: 12, trend: "+12%" }
  ];

  if (!user) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-muted-foreground mb-6">
              Please sign in with your NMIET email to access the Skills Dashboard.
            </p>
            <Button onClick={() => onNavigate('home')} className="w-full">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
                Skills Dashboard
              </h1>
              <p className="text-muted-foreground">
                Connect with NMIET students and learn from your peers
              </p>
            </div>
            
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-blue-500">
              Share Your Skills
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Available Mentors", value: "89", icon: Users },
              { label: "Active Skills", value: "156", icon: Zap },
              { label: "This Week's Sessions", value: "24", icon: Calendar },
              { label: "Success Rate", value: "96%", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="w-5 h-5" />
                    <span>Filters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search skills or names..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Year</label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map(year => (
                          <SelectItem key={year.value} value={year.value}>
                            {year.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trending Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Trending Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topSkills.map((item, index) => (
                    <div key={item.skill} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.skill}</div>
                        <div className="text-sm text-muted-foreground">{item.count} mentors</div>
                      </div>
                      <Badge variant="secondary" className="text-green-600">
                        {item.trend}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredStudents.map((student, index) => {
                const IconComponent = skillIcons[student.category as keyof typeof skillIcons] || Zap;
                
                return (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-primary to-blue-500 text-white">
                              {student.avatar}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <h3 className="font-bold group-hover:text-primary transition-colors">
                              {student.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{student.year}</p>
                            
                            <div className="flex items-center space-x-2 mt-2">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{student.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                ({student.sessions} sessions)
                              </span>
                            </div>
                          </div>
                          
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {student.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {student.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-blue-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Session
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {filteredStudents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search filters or browse all available skills.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}