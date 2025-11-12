import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  MessageCircle, 
  Plus,
  BookOpen,
  Laptop,
  Home,
  Shirt,
  Clock,
  MapPin,
  Star,
  Heart,
  Share2
} from 'lucide-react';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

interface MarketplacePageProps {
  onNavigate: (page: Page) => void;
  user: { email: string; name: string } | null;
}

const categoryIcons = {
  'Books': BookOpen,
  'Electronics': Laptop,
  'Hostel': Home,
  'Clothing': Shirt,
  'Other': ShoppingBag
};

export function MarketplacePage({ onNavigate, user }: MarketplacePageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const mockItems = [
    {
      id: 1,
      title: "Data Structures & Algorithms (Cormen)",
      price: 1200,
      originalPrice: 2500,
      category: "Books",
      condition: "Good",
      seller: { name: "Rahul Patel", year: "3rd Year CSE", avatar: "RP", rating: 4.8 },
      image: "https://images.unsplash.com/photo-1751199199822-c61b8bb7101b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTkxNjUwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Excellent condition textbook. Used for one semester only. All chapters intact with minimal highlighting.",
      timePosted: "2 hours ago",
      location: "Main Campus",
      likes: 12
    },
    {
      id: 2,
      title: "Gaming Laptop - ASUS ROG",
      price: 45000,
      originalPrice: 75000,
      category: "Electronics",
      condition: "Excellent",
      seller: { name: "Priya Sharma", year: "4th Year IT", avatar: "PS", rating: 4.9 },
      image: "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkxMzE3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "High-performance gaming laptop. GTX 1660Ti, 16GB RAM, 512GB SSD. Perfect for gaming and development.",
      timePosted: "1 day ago",
      location: "Hostel Block A",
      likes: 28
    },
    {
      id: 3,
      title: "Study Table with Chair",
      price: 2500,
      originalPrice: 4000,
      category: "Hostel",
      condition: "Good",
      seller: { name: "Amit Kumar", year: "2nd Year Mech", avatar: "AK", rating: 4.7 },
      image: "https://images.unsplash.com/photo-1751199199822-c61b8bb7101b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTkxNjUwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comfortable study setup. Table with built-in drawer and ergonomic chair. Moving out sale.",
      timePosted: "3 hours ago",
      location: "Hostel Block C",
      likes: 8
    },
    {
      id: 4,
      title: "Engineering Mathematics Textbooks Set",
      price: 800,
      originalPrice: 1800,
      category: "Books",
      condition: "Fair",
      seller: { name: "Sneha Reddy", year: "3rd Year ECE", avatar: "SR", rating: 4.6 },
      image: "https://images.unsplash.com/photo-1751199199822-c61b8bb7101b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTkxNjUwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete set of Maths textbooks for first two years. Some wear but all content is clear and readable.",
      timePosted: "5 hours ago",
      location: "Library Area",
      likes: 15
    },
    {
      id: 5,
      title: "Wireless Earbuds - JBL",
      price: 3500,
      originalPrice: 6000,
      category: "Electronics",
      condition: "Excellent",
      seller: { name: "Vikram Singh", year: "4th Year CSE", avatar: "VS", rating: 4.8 },
      image: "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkxMzE3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Premium quality earbuds with noise cancellation. Barely used, still under warranty.",
      timePosted: "1 day ago",
      location: "Main Campus",
      likes: 22
    },
    {
      id: 6,
      title: "Formal Shirts Bundle (5 pieces)",
      price: 1500,
      originalPrice: 3000,
      category: "Clothing",
      condition: "Good",
      seller: { name: "Anuj Agarwal", year: "4th Year IT", avatar: "AA", rating: 4.5 },
      image: "https://images.unsplash.com/photo-1751199199822-c61b8bb7101b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTkxNjUwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Professional formal shirts, size M. Perfect for internships and placements. Well maintained.",
      timePosted: "6 hours ago",
      location: "Hostel Block B",
      likes: 7
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: ShoppingBag },
    { value: 'Books', label: 'Books', icon: BookOpen },
    { value: 'Electronics', label: 'Electronics', icon: Laptop },
    { value: 'Hostel', label: 'Hostel Items', icon: Home },
    { value: 'Clothing', label: 'Clothing', icon: Shirt }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under ₹500' },
    { value: '500-2000', label: '₹500 - ₹2,000' },
    { value: '2000-10000', label: '₹2,000 - ₹10,000' },
    { value: '10000+', label: 'Above ₹10,000' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.includes('+') ? [10000, Infinity] : priceRange.split('-').map(Number);
      matchesPrice = item.price >= min && (max ? item.price <= max : true);
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const stats = [
    { label: "Active Listings", value: "247", change: "+12%" },
    { label: "This Week's Sales", value: "38", change: "+8%" },
    { label: "Happy Buyers", value: "156", change: "+15%" },
    { label: "Average Rating", value: "4.8", change: "+0.2" }
  ];

  if (!user) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-muted-foreground mb-6">
              Please sign in with your NMIET email to access the Marketplace.
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
                Student Marketplace
              </h1>
              <p className="text-muted-foreground">
                Buy and sell safely within the NMIET community
              </p>
            </div>
            
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-blue-500">
              <Plus className="w-4 h-4 mr-2" />
              Post Item
            </Button>
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
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <Badge variant="secondary" className="text-xs mt-1 text-green-600">
                      {stat.change}
                    </Badge>
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
                      placeholder="Search items..."
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
                            <div className="flex items-center space-x-2">
                              <category.icon className="w-4 h-4" />
                              <span>{category.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {priceRanges.map(range => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Categories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quick Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-primary/20 text-primary'
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.label}</span>
                    </button>
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
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => {
                const IconComponent = categoryIcons[item.category as keyof typeof categoryIcons] || ShoppingBag;
                const discountPercent = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-green-500 text-white">
                            {discountPercent}% OFF
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3 flex space-x-2">
                          <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2 flex-1">
                            {item.title}
                          </h3>
                          <IconComponent className="w-5 h-5 text-primary ml-2 flex-shrink-0" />
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-2xl font-bold text-primary">₹{item.price.toLocaleString()}</span>
                          <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice.toLocaleString()}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.timePosted}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gradient-to-r from-primary to-blue-500 text-white text-xs">
                                {item.seller.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{item.seller.name}</div>
                              <div className="text-xs text-muted-foreground">{item.seller.year}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{item.seller.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Heart className="w-4 h-4" />
                            <span>{item.likes}</span>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-primary to-blue-500">
                              Buy Now
                            </Button>
                          </div>
                        </div>
                        
                        <Badge variant="secondary" className="mt-3">
                          {item.condition} Condition
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No items found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search filters or browse all categories.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}