import { Hero } from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { Mission } from '../components/Mission';
import { WhyWorkWithUs } from '../components/WhyWorkWithUs';
import { FAQ } from '../components/FAQ';
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

      {/* CTA after Mission */}
      <CTASection
        title="Interested in a Career in Tech?"
        description="Develop your skills in digital consulting and software development with us. Gain real-world experience, work on impactful projects, and build your journey toward a successful career."
        primaryButtonText="Apply Now"
        secondaryButtonText="Read More"
        onPrimaryClick={() => {
          const element = document.getElementById('onboarding');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        onSecondaryClick={scrollToContact}
      />
      
      <Mission />
      
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

      <FAQ />
      
      </>
  );
}