import { useEffect, useRef, useState } from 'react';
import { FileText, Phone, CheckCircle, Users, Shield, Rocket } from 'lucide-react';

export function OnboardingProcess() {
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

  const steps = [
    {
      icon: FileText,
      title: "Get in Touch",
      description: "Submit your organization details and project requirements.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Intro Call",
      description: "We start with a conversation to understand your mission, challenges, and goals.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Project Confirmation",
      description: "Together, we define the scope, timeline, and success metrics for your project.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Team Assignment",
      description: "We match you with specialists who understand your sector and technical needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Project Kickoff",
      description: "Your dedicated team begins work, with regular updates and milestone reviews.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section 
      id="onboarding" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Onboarding Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A seamless journey from first contact to project delivery, designed to 
            minimize disruption and maximize impact for your organization.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-full transition-all duration-2000"
                style={{ 
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: '500ms'
                }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150 + 500}ms` }}
                >
                  {/* Icon Circle */}
                  <div className="relative flex justify-center mb-16">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r from-[#4a6cff] to-[#7c4dff]">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-white text-gray-900 shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex gap-6 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150 + 500}ms` }}
              >
                {/* Icon and Line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r from-[#4a6cff] to-[#7c4dff]">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gray-200 mt-4">
                      <div 
                        className="w-full h-full bg-gradient-to-b from-[#4a6cff] to-[#7c4dff] transition-all duration-1000"
                        style={{ transitionDelay: `${(index + 1) * 150 + 500}ms` }}
                      ></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}