import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { Services } from '../components/Services';
import { OnboardingProcess } from '../components/OnboardingProcess';
import { WhyWorkWithUs } from '../components/WhyWorkWithUs';
import { Contact } from '../components/Contact';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <WhoWeAre />
      
      {/* CTA after Who We Are */}
      <CTASection
        title="Ready to Transform Your Operations?"
        description="Let's discuss how these solutions can be tailored to your organization's unique needs and goals."
        primaryButtonText="Get Started Today"
        onPrimaryClick={scrollToContact}
        variant="gradient"
      />
      
      <Services />
      
      {/* CTA after Services */}
      <CTASection
        title="Interested in Our Approach?"
        description="Learn more about our proven process and see how we can help your organization achieve its digital transformation goals."
        primaryButtonText="View Our Process"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => {
          const element = document.getElementById('onboarding');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        onSecondaryClick={scrollToContact}
      />
      
      <OnboardingProcess />
      
      {/* CTA after Onboarding */}
      <CTASection
        title="Ready to Get Started?"
        description="The first step is always a conversation. Let's discuss your challenges and explore how we can help."
        primaryButtonText="Schedule Your Intro Call"
        onPrimaryClick={scrollToContact}
        variant="gradient"
      />
      
      <WhyWorkWithUs />
      
      {/* CTA after Why Work With Us */}
      <CTASection
        title="Let's Build Something Amazing Together"
        description="Every great partnership starts with a conversation. We're excited to learn about your mission and explore how technology can amplify your impact."
        primaryButtonText="Start a Conversation"
        secondaryButtonText="Explore Our Services"
        onPrimaryClick={scrollToContact}
        onSecondaryClick={scrollToServices}
      />
      
      <Contact />
    </>
  );
}