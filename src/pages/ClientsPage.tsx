import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building, Users, DollarSign, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { OnboardingProcess } from '../components/OnboardingProcess';

export function ClientsPage() {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "Pro Bono Services",
      description: "High-quality digital solutions at no cost to qualified nonprofit organizations.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Expert Teams",
      description: "Work with students from the UK's best universities led by experienced consultants.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Flexible Timelines",
      description: "Project timelines designed around your organization's capacity and needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Long-term Support",
      description: "Ongoing training and support to ensure our solutions continue to deliver value.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const eligibilityCriteria = [
    "Registered UK charity or nonprofit organization",
    "Clear social impact mission aligned with our values",
    "Commitment to project collaboration and feedback",
    "Basic organizational capacity for digital adoption",
    "Willingness to provide case study and testimonial"
  ];

  const projectTypes = [
    {
      title: "Website Development",
      description: "Modern, responsive and tailored websites that tell your story and engage supporters.",
      examples: ["Donation platforms", "Membership portals", "Loyalty systems"]
    },
    {
      title: "Database Management",
      description: "Streamlined, integrated systems for seamless member, donor, and beneficiary management.",
      examples: ["CRM systems", "Member databases", "Impact tracking"]
    },
    {
      title: "Automation Solutions",
      description: "Automated workflows to streamline internal operations, reduce staff workload and increase efficiency.",
      examples: ["Mailing list automation", "Customer support chatbots", "Event board automation"]
    },
    {
      title: "Data Analytics",
      description: "Insights, reporting and feedback tools to measure and communicate your impact.",
      examples: ["Impact dashboards", "Feedback systems", "Report generation"]
    }
  ];

  const handleApplyClick = () => {
    alert('Client application coming soon! Please contact us for immediate project discussions.');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Building className="h-4 w-4 text-[#4a6cff]" />
              <span className="text-sm text-white/90">For Nonprofits & Charities</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Amplify Your Impact with</span>
              <span className="block bg-gradient-to-r from-[#4a6cff] via-[#7c4dff] to-[#4a6cff] bg-clip-text text-transparent">
                Pro Bono
              </span>
              <span className="block">Digital Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform your organization's digital capabilities with custom solutions 
              designed specifically for nonprofits, delivered at no cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={handleApplyClick}
                size="lg"
                className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              >
                Apply for Pro Bono Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={sectionRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Partner with FutureLabs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We understand the unique challenges facing nonprofits and provide 
              solutions that maximize impact while minimizing costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Can Build for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From websites to complex automation systems, we deliver solutions 
              that help you operate more efficiently and scale your positive impact to more people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Examples include:</h4>
                    <ul className="space-y-2">
                      {project.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <OnboardingProcess />

      {/* Application Process Section */}
      <section 
        className="py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Our process is designed to guide your organization to deliver meaningful results and create lasting value
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Analysis</h3>
              <p className="text-white/80">Assess needs and present tailored recommendations.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-white/80">Develop and integrate solutions and ensure seamless adoption.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-white/80">Finalize deliverables and train staff on the new system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Questions About Our Services?"
        description="We're here to help you understand how our pro bono services can benefit your organization. Let's start a conversation."
        primaryButtonText="Contact Our Team"
        secondaryButtonText="View Case Studies"
        onPrimaryClick={() => {
          alert('Contact form coming soon! Please email us at clients@futurelabs.co.uk');
        }}
        onSecondaryClick={() => {
          alert('Case studies section coming soon!');
        }}
      />
    </div>
  );
}