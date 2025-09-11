import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, MessageCircle, Heart, BarChart3 } from 'lucide-react';

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Mail,
      title: "Automated Email Handling",
      description: "Streamline donor communications, volunteer coordination, and beneficiary outreach with intelligent email automation systems.",
      lightTheme: true
    },
    {
      icon: MessageCircle,
      title: "AI Customer Support Chatbots",
      description: "24/7 support for your community with AI-powered chatbots that understand your mission and provide personalized assistance.",
      lightTheme: false
    },
    {
      icon: Heart,
      title: "Client Loyalty Platforms",
      description: "Build stronger relationships with donors, volunteers, and beneficiaries through engaging loyalty and recognition programs.",
      lightTheme: true
    },
    {
      icon: BarChart3,
      title: "Automated Feedback Systems",
      description: "Continuous improvement through automated feedback collection, analysis, and actionable insights for your programs.",
      lightTheme: false
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed specifically for nonprofits, 
            helping you focus on what matters most – your mission.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {service.lightTheme ? (
                // Light Theme Card
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:bg-gray-50 group">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                // Dark Theme Card
                <Card 
                  className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  style={{
                    background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
                  }}
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}