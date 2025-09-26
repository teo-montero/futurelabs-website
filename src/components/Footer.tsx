import { Mail, Linkedin, Twitter, Github, Instagram, MapPin, Phone } from "lucide-react";

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
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
  };

  const navigationLinks = [
    { name: 'Home', id: 'home', type: 'page' },
    { name: 'For Students', id: 'students', type: 'page' },
    { name: 'For Clients', id: 'clients', type: 'page' },
    { name: 'For Sponsors', id: 'sponsors', type: 'page' },
  ];

  const quickLinks = [
    { name: 'About Us', id: 'who-we-are' },
    { name: 'Our Services', id: 'services' },
    { name: 'Client Process', id: 'onboarding' },
    { name: 'Why Choose Us', id: 'why-work-with-us' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/futurelabs-advisory' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/futurelabs.uk' },
    { name: 'Email', icon: Mail, url: 'mailto:hello@futurelabs.co.uk' },
  ];

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4a6cff] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7c4dff] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                FutureLabs
              </h3>
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                The UK's first student-run pro bono digital consultancy, empowering organisations 
                with innovative technology solutions while developing the next generation of tech leaders.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-5 w-5 text-[#4a6cff]" />
                <span>hello@futurelabs.co.uk</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-[#4a6cff]" />
                <span>United Kingdom</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-[#4a6cff] hover:to-[#7c4dff] transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-medium text-white mb-6">Main Pages</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handlePageChange(link.id)}
                    className="text-white/80 hover:text-white hover:text-[#4a6cff] transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white hover:text-[#4a6cff] transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © 2025 FutureLabs. All rights reserved.
              </p>
            </div>

            {/* Powered By */}
            <div className="text-center">
              <p className="text-white/60 text-sm">
                Powered by{' '}
                <span className="text-white font-medium">Teo Montero</span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <button className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button 
                onClick={() => handlePageChange('students')}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                Student Applications
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info 
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-center">
              <h5 className="text-white font-medium mb-2">Ready to Get Started?</h5>
              <p className="text-white/80 text-sm mb-4">
                Whether you're a student looking to gain experience, a nonprofit seeking digital solutions, 
                or a company wanting to support social impact, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => handlePageChange('students')}
                  className="border border-white/30 text-white hover:bg-white/10 px-6 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </footer>
  );
}