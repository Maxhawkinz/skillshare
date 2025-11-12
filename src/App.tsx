import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { SkillDashboard } from './components/SkillDashboard';
import { MarketplacePage } from './components/MarketplacePage';
import { CommunityPage } from './components/CommunityPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';
import { MouseFollower } from './components/MouseFollower';
import { AuthModal } from './components/AuthModal';
import { supabase } from './lib/supabase';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string; id: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // Set dark theme by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    return () => {
      document.body.style.scrollBehavior = 'auto';
    };
  }, []);

  // Check for existing session on mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // Fetch user profile
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (!error && profile) {
            setUser({
              id: session.user.id,
              email: session.user.email || profile.email,
              name: profile.full_name || session.user.email?.split('@')[0] || 'User',
            });
          } else if (session.user) {
            // Fallback if profile doesn't exist
            setUser({
              id: session.user.id,
              email: session.user.email || '',
              name: session.user.email?.split('@')[0] || 'User',
            });
          }
        }
      } catch (error) {
        console.error('Error checking user session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Fetch user profile
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (!error && profile) {
          setUser({
            id: session.user.id,
            email: session.user.email || profile.email,
            name: profile.full_name || session.user.email?.split('@')[0] || 'User',
          });
        } else if (session.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.email?.split('@')[0] || 'User',
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const renderPage = () => {
    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onShowAuth={() => setShowAuthModal(true)} user={user} />;
      case 'features':
        return <FeaturesPage onNavigate={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={setCurrentPage} />;
      case 'skills':
        return <SkillDashboard onNavigate={setCurrentPage} user={user} />;
      case 'marketplace':
        return <MarketplacePage onNavigate={setCurrentPage} user={user} />;
      case 'community':
        return <CommunityPage onNavigate={setCurrentPage} user={user} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onShowAuth={() => setShowAuthModal(true)} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MouseFollower />
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        user={user}
        onShowAuth={() => setShowAuthModal(true)}
        onLogout={handleLogout}
      />
      
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-20"
      >
        {renderPage()}
      </motion.main>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={(userData) => {
          setUser(userData);
          setShowAuthModal(false);
        }}
      />
    </div>
  );
}