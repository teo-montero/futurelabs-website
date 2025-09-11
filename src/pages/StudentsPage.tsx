import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GraduationCap, Users, Trophy, Briefcase, Code, Heart, ArrowRight } from 'lucide-react';

export function StudentsPage() {
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
      icon: Code,
      title: "Real-World Experience",
      description: "Work on actual client projects and build your portfolio with meaningful impact.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join a community of like-minded students passionate about technology and social good.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Trophy,
      title: "Recognition & Awards",
      description: "Gain recognition for your contributions and receive certificates for completed projects.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Build professional skills and network with industry leaders in the nonprofit sector.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const roles = [
    {
      title: "Frontend Developers",
      description: "Build beautiful, responsive user interfaces using React, Vue, or Angular.",
      skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"]
    },
    {
      title: "Backend Developers",
      description: "Create robust APIs and database systems to power nonprofit applications.",
      skills: ["Node.js", "Python", "PostgreSQL", "RESTful APIs"]
    },
    {
      title: "Full-Stack Developers",
      description: "Work across the entire technology stack to deliver complete solutions.",
      skills: ["JavaScript", "Database Design", "Cloud Platforms", "DevOps"]
    },
    {
      title: "Project Managers",
      description: "Lead project coordination and ensure timely delivery of client solutions.",
      skills: ["Agile", "Communication", "Timeline Management", "Client Relations"]
    },
    {
      title: "UI/UX Designers",
      description: "Design intuitive and accessible interfaces for nonprofit organizations.",
      skills: ["Figma", "User Research", "Accessibility", "Design Systems"]
    },
    {
      title: "Data Analysts",
      description: "Help organizations make data-driven decisions and measure their impact.",
      skills: ["Python", "SQL", "Data Visualization", "Analytics"]
    }
  ];

  const handleApplyClick = () => {
    // This would typically open an application form or redirect to application page
    alert('Application process coming soon! Please contact us for more information.');
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
              <GraduationCap className="h-4 w-4 text-[#4a6cff]" />
              <span className="text-sm text-white/90">For Students</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Join the UK's First</span>
              <span className="block bg-gradient-to-r from-[#4a6cff] via-[#7c4dff] to-[#4a6cff] bg-clip-text text-transparent">
                Student-Run
              </span>
              <span className="block">Pro Bono Tech Consultancy</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Gain real-world experience while making a meaningful impact. 
              Build your skills, portfolio, and network with FutureLabs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={handleApplyClick}
                size="lg"
                className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More
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
              Why Join FutureLabs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              More than just volunteer work – it's a transformative experience that will 
              accelerate your career while making a positive impact on society.
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Make an Impact?"
        description="Join a community of students who are using their skills to create positive change in the world."
        primaryButtonText="Start Your Application"
        secondaryButtonText="Contact Us"
        onPrimaryClick={handleApplyClick}
        onSecondaryClick={() => {
          const element = document.getElementById('contact');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        variant="gradient"
      />

      {/* Roles Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're looking for passionate students across various disciplines. 
              Find the role that matches your skills and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{role.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-[#4a6cff]/10 to-[#7c4dff]/10 text-[#4a6cff] rounded-full text-sm border border-[#4a6cff]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section 
        className="py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #0a0f29 0%, #1a093e 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Our application process is designed to understand your skills, passion, and commitment to making a difference.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Submit Application</h3>
              <p className="text-white/80">Complete our online application form with your background and interests.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Skills Assessment</h3>
              <p className="text-white/80">Complete a brief skills assessment to help us understand your capabilities.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Welcome Interview</h3>
              <p className="text-white/80">Have a conversation with our team to discuss your goals and project fit.</p>
            </div>
          </div>

          <Button
            onClick={handleApplyClick}
            size="lg"
            className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
          >
            <Heart className="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Questions About Joining?"
        description="We're here to help! Reach out to learn more about opportunities, requirements, or our application process."
        primaryButtonText="Contact Our Team"
        secondaryButtonText="View FAQ"
        onPrimaryClick={() => {
          // This would typically scroll to contact or open a contact form
          alert('Contact form coming soon! Please email us at students@futurelabs.co.uk');
        }}
        onSecondaryClick={() => {
          alert('FAQ section coming soon!');
        }}
      />
    </div>
  );
}