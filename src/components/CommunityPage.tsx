import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  MessageSquare, 
  Calendar, 
  Trophy,
  Users,
  Plus,
  ThumbsUp,
  MessageCircle,
  Share2,
  Clock,
  Tag,
  Zap,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface CommunityPageProps {
  onNavigate: (page: Page) => void;
  user: { email: string; name: string } | null;
}

export function CommunityPage({ onNavigate, user }: CommunityPageProps) {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const forumPosts = [
    {
      id: 1,
      title: "Best resources for learning React.js?",
      content: "I'm looking for comprehensive resources to learn React from scratch. Any recommendations for tutorials, courses, or books?",
      author: { name: "Arjun Sharma", year: "2nd Year CSE", avatar: "AS" },
      timePosted: "2 hours ago",
      category: "Programming",
      likes: 15,
      replies: 8,
      tags: ["React", "JavaScript", "Web Development"],
      isAnswered: false
    },
    {
      id: 2,
      title: "Study group for Digital Signal Processing",
      content: "Looking to form a study group for DSP. Planning to meet twice a week to solve problems and discuss concepts. DM if interested!",
      author: { name: "Priya Patel", year: "3rd Year ECE", avatar: "PP" },
      timePosted: "4 hours ago",
      category: "Study Groups",
      likes: 23,
      replies: 12,
      tags: ["DSP", "ECE", "Study Group"],
      isAnswered: true
    },
    {
      id: 3,
      title: "Internship experience at Google",
      content: "Just completed my summer internship at Google. Happy to share my experience and answer questions about the application process, interview prep, and work culture.",
      author: { name: "Rohit Kumar", year: "4th Year IT", avatar: "RK" },
      timePosted: "1 day ago",
      category: "Career",
      likes: 67,
      replies: 24,
      tags: ["Internship", "Google", "Career"],
      isAnswered: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "React Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      host: "Arjun Sharma",
      attendees: 24,
      maxAttendees: 30,
      category: "Workshop",
      description: "Learn React fundamentals and build your first app"
    },
    {
      id: 2,
      title: "ML Study Session",
      date: "Dec 16, 2024",
      time: "4:00 PM",
      host: "Priya Patel",
      attendees: 18,
      maxAttendees: 25,
      category: "Study Session",
      description: "Dive deep into machine learning algorithms"
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      date: "Dec 18, 2024",
      time: "10:00 AM",
      host: "Sneha Desai",
      attendees: 12,
      maxAttendees: 20,
      category: "Workshop",
      description: "Learn design thinking methodologies and practices"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Rohit Kumar", points: 2840, badge: "Expert Contributor", avatar: "RK" },
    { rank: 2, name: "Priya Patel", points: 2650, badge: "Community Helper", avatar: "PP" },
    { rank: 3, name: "Arjun Sharma", points: 2420, badge: "Knowledge Sharer", avatar: "AS" },
    { rank: 4, name: "Sneha Desai", points: 2180, badge: "Active Member", avatar: "SD" },
    { rank: 5, name: "Vikram Singh", points: 1950, badge: "Rising Star", avatar: "VS" }
  ];

  const stats = [
    { label: "Total Discussions", value: "342", icon: MessageSquare },
    { label: "Active Members", value: "156", icon: Users },
    { label: "Events This Month", value: "12", icon: Calendar },
    { label: "Questions Answered", value: "89%", icon: Trophy }
  ];

  if (!user) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-muted-foreground mb-6">
              Please sign in with your NMIET email to access the Community.
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
                Community Hub
              </h1>
              <p className="text-muted-foreground">
                Connect, learn, and grow with fellow NMIET students
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
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

        {/* Main Content */}
        <Tabs defaultValue="discussions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="discussions" className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Discussions</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Forum */}
              <div className="lg:col-span-2 space-y-6">
                {/* New Post Form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Plus className="w-5 h-5" />
                        <span>Start a Discussion</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="What would you like to discuss?"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                      />
                      <Textarea
                        placeholder="Share your thoughts, questions, or ideas..."
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        rows={3}
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Badge variant="outline" className="cursor-pointer">
                            Programming
                          </Badge>
                          <Badge variant="outline" className="cursor-pointer">
                            Study Group
                          </Badge>
                          <Badge variant="outline" className="cursor-pointer">
                            Career
                          </Badge>
                        </div>
                        <Button className="bg-gradient-to-r from-primary to-blue-500">
                          Post Discussion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Forum Posts */}
                <div className="space-y-4">
                  {forumPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-gradient-to-r from-primary to-blue-500 text-white">
                                {post.author.avatar}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-bold group-hover:text-primary transition-colors mb-1">
                                    {post.title}
                                  </h3>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <span>{post.author.name}</span>
                                    <span>•</span>
                                    <span>{post.author.year}</span>
                                    <span>•</span>
                                    <div className="flex items-center space-x-1">
                                      <Clock className="w-3 h-3" />
                                      <span>{post.timePosted}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {post.isAnswered && (
                                  <Badge className="bg-green-500 text-white">
                                    <Zap className="w-3 h-3 mr-1" />
                                    Answered
                                  </Badge>
                                )}
                              </div>
                              
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {post.content}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                                    <ThumbsUp className="w-4 h-4" />
                                    <span>{post.likes}</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{post.replies}</span>
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Share2 className="w-4 h-4" />
                                  </Button>
                                </div>
                                
                                <Badge variant="outline">
                                  {post.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Popular Topics */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5" />
                        <span>Popular Topics</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { topic: "React Development", posts: 24 },
                        { topic: "Placement Preparation", posts: 18 },
                        { topic: "Machine Learning", posts: 15 },
                        { topic: "Study Groups", posts: 12 },
                        { topic: "Project Ideas", posts: 9 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.topic}</span>
                          <Badge variant="secondary">{item.posts}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Your Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">48</div>
                        <div className="text-sm text-muted-foreground">Community Points</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold">5</div>
                          <div className="text-xs text-muted-foreground">Posts</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold">12</div>
                          <div className="text-xs text-muted-foreground">Replies</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-gradient-to-r from-primary to-blue-500 text-white">
                          {event.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {event.attendees}/{event.maxAttendees}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span>Hosted by {event.host}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-primary to-blue-500">
                        Join Event
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5" />
                    <span>Top Contributors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leaderboard.map((member, index) => (
                    <motion.div
                      key={member.rank}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                        member.rank === 1 ? 'bg-yellow-500' :
                        member.rank === 2 ? 'bg-gray-400' :
                        member.rank === 3 ? 'bg-amber-600' :
                        'bg-primary'
                      }`}>
                        {member.rank <= 3 ? (
                          <Award className="w-4 h-4" />
                        ) : (
                          member.rank
                        )}
                      </div>
                      
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-r from-primary to-blue-500 text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="font-semibold">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.badge}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-primary">{member.points.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}