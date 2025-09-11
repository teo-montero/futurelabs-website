import { useEffect, useRef, useState } from 'react';
import { DollarSign, TrendingUp, Zap, Users } from 'lucide-react';

export function WhyWorkWithUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: DollarSign,
      title: "Affordable Excellence",
      description: "Premium digital solutions at nonprofit-friendly prices, with flexible payment options and grant application support.",
      gradient: "from-[#4a6cff] to-[#5a7cff]"
    },
    {
      icon: TrendingUp,
      title: "Long-Term Value Creation",
      description: "Solutions designed to grow with your organization, with ongoing support and strategic guidance for sustained impact.",
      gradient: "from-[#7c4dff] to-[#8c5dff]"
    },
    {
      icon: Zap,
      title: "Strategy + Execution",
      description: "We don't just build solutions – we partner with you to develop comprehensive digital strategies that align with your mission.",
      gradient: "from-[#4a6cff] to-[#7c4dff]"
    },
    {
      icon: Users,
      title: "Dynamic Talent Access",
      description: "Tap into our network of specialists across tech, design, and nonprofit sectors, scaling your team as needed.",
      gradient: "from-[#6a4cff] to-[#7c4dff]"
    }
  ];

  return (
    <section 
      id="why-work-with-us" 
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a6cff] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#7c4dff] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Work With FutureLabs?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're more than a service provider – we're your strategic partner in 
            digital transformation, committed to amplifying your impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full">
                {/* Card Content */}
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}