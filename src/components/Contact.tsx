import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, ArrowRight, Send } from 'lucide-react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start a Conversation with FutureLabs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your organization's digital capabilities? 
            Let's discuss how we can help amplify your impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Methods */}
          <div className={`lg:col-span-1 space-y-6 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            
            {/* Email Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#4a6cff]/5 to-[#7c4dff]/5 border border-[#4a6cff]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">General Inquiries</p>
                  <p className="font-medium text-gray-900">hello@futurelabs.co.uk</p>
                  <p className="text-gray-600 mt-4">Project Discussions</p>
                  <p className="font-medium text-gray-900">projects@futurelabs.co.uk</p>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#7c4dff]/5 to-[#4a6cff]/5 border border-[#7c4dff]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7c4dff] to-[#4a6cff] rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">Direct Line</p>
                  <p className="font-medium text-gray-900">+44 (0) 20 7946 0958</p>
                  <p className="text-gray-600 mt-4">Available</p>
                  <p className="font-medium text-gray-900">Mon-Fri, 9AM-6PM GMT</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-4">
              <Button
                className="w-full bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-2 border-[#4a6cff] text-[#4a6cff] hover:bg-[#4a6cff] hover:text-white transition-all duration-300"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-gray-600">
                    Share your vision and challenges – we'll respond within 24 hours with next steps.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#4a6cff] focus:ring-[#4a6cff] transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[#4a6cff] focus:ring-[#4a6cff] transition-colors duration-200"
                        placeholder="john@yourorganization.org"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#4a6cff] focus:ring-[#4a6cff] transition-colors duration-200"
                      placeholder="Your Organization Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#4a6cff] focus:ring-[#4a6cff] transition-colors duration-200 resize-none"
                      placeholder="Tell us about your organization's mission, current challenges, and how you envision technology helping you achieve greater impact..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-[#4a6cff] text-[#4a6cff] hover:bg-[#4a6cff] hover:text-white transition-all duration-300"
                      size="lg"
                    >
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Book a Call Instead
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </section>
  );
}