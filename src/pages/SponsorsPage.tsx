import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CTASection } from '../components/CTASection';
import { ContactSponsor } from '../components/ContactSponsor';
import { Handshake, Target, TrendingUp, Award, Users, Globe, ArrowRight, Heart } from 'lucide-react';

export function SponsorsPage() {
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

  const partnershipBenefits = [
    {
      icon: Target,
      title: "Impact",
      description: "Empower organisations and students, and drive impact through real-world digital solutions.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Talent",
      description: "Connect with exceptional students and identify future hires through real project collaboration.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Exposure",
      description: "Engage with students driving change through innovative ideas and impactful tech solutions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Gain recognition from students and organisations for your committment to growth and innovation.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Community Partner",
      amount: "£5,000 - £15,000",
      description: "Support individual projects and gain recognition in our community",
      benefits: [
        "Logo placement on website and materials",
        "Quarterly impact reports",
        "Access to student networking events",
        "Social media recognition"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Innovation Sponsor",
      amount: "£15,000 - £50,000",
      description: "Fund multiple projects and participate in strategic initiatives",
      benefits: [
        "All Community Partner benefits",
        "Speaking opportunities at events",
        "Access to talent showcase events",
        "Collaborative project naming rights",
        "Advisory board participation"
      ],
      color: "from-purple-500 to-purple-600",
      featured: true
    },
    {
      name: "Strategic Partner",
      amount: "£50,000+",
      description: "Shape the future of student-led consulting through strategic partnership",
      benefits: [
        "All Innovation Sponsor benefits",
        "Co-branded initiatives and programs",
        "Dedicated student team partnerships",
        "Executive mentorship opportunities",
        "Priority access to graduate talent"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  const impactMetrics = [
    { value: "50+", label: "Nonprofits Supported", icon: Globe },
    { value: "£2M+", label: "Value Delivered", icon: TrendingUp },
    { value: "200+", label: "Students Trained", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Award }
  ];

  const handlePartnershipClick = () => {
    alert('Partnership application coming soon! Please contact us to discuss sponsorship opportunities.');
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
              <Handshake className="h-4 w-4 text-[#4a6cff]" />
              <span className="text-sm text-white/90">For Partners</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Partner with</span>
              <span className="block bg-gradient-to-r from-[#4a6cff] via-[#7c4dff] to-[#4a6cff] bg-clip-text text-transparent">
                FutureLabs
              </span>
              <span className="block">to Drive Impact</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join us in empowering the next generation of tech leaders while driving 
              meaningful change in organisations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={handlePartnershipClick}
                size="lg"
                className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
              >
                Read About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact So Far
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See the measurable difference your partnership can make in the nonprofit 
              sector and student development.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partnership Benefits Section */}
      <section ref={sectionRef} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your partnership creates supports organisations, develops student talent, and advances your objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
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

      <CTASection
        title="Ready to Shape the Future Together?"
        description="Let's explore how we can create opportunities and drive impact side by side."
        primaryButtonText="Start Partnership Discussion"
        secondaryButtonText="Read About Us"
        onPrimaryClick={() => {
          alert('Partnership discussion coming soon! Please email us at partnerships@futurelabs.co.uk');
        }}
        onSecondaryClick={() => {
          alert('Impact report download coming soon!');
        }}
      />

      {/* Society Partnership Section */}
      <section 
        className="py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Are you a University Society?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Let's create a partnership that 
            perfectly aligns with your goals and values.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Alignment</h3>
              <p className="text-white/80">Align on a shared mission and drive meaningful innovation together.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Boost Memberships</h3>
              <p className="text-white/80">Connect with our member base to expand your reach and impact.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Student Growth</h3>
              <p className="text-white/80">Create opportunities by linking your students to real-world projects.</p>
            </div>
          </div>

          <Button
            onClick={handlePartnershipClick}
            size="lg"
            className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
          >
            <Heart className="mr-2 h-5 w-5" />
            Discuss Custom Partnership
          </Button>
        </div>
      </section>

      <ContactSponsor />
    </div>
  );
}