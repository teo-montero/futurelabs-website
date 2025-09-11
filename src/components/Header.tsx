import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    // If not on home page, go to home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for page to load then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', id: 'home', type: 'page' },
    { name: 'For Students', id: 'students', type: 'page' },
    { name: 'For Clients', id: 'clients', type: 'page' },
    { name: 'For Sponsors', id: 'sponsors', type: 'page' },
  ];

  const quickLinks = [
    { name: 'About', id: 'who-we-are' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm' 
          : currentPage === 'home' 
            ? 'bg-transparent' 
            : 'bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handlePageChange('home')}
              className={`text-2xl font-bold transition-colors duration-300 ${
                (isScrolled || currentPage !== 'home')
                  ? 'text-gray-900' 
                  : 'text-white'
              }`}
            >
              FutureLabs
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`transition-colors duration-300 hover:opacity-80 ${
                  currentPage === item.id
                    ? (isScrolled || currentPage !== 'home')
                      ? 'text-[#4a6cff] font-medium'
                      : 'text-white font-medium'
                    : (isScrolled || currentPage !== 'home')
                      ? 'text-gray-700 hover:text-gray-900' 
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Quick Links Dropdown */}
            <div className="relative group">
              <button
                className={`transition-colors duration-300 hover:opacity-80 ${
                  (isScrolled || currentPage !== 'home')
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Quick Links ↓
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {quickLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={(isScrolled || currentPage !== 'home') ? 'text-gray-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-[#4a6cff] bg-[#4a6cff]/10 font-medium'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="px-3 py-1 text-sm font-medium text-gray-500">Quick Links</div>
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="px-3 py-2 border-t border-gray-200 mt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}