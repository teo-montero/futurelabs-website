import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
  variant?: 'light' | 'gradient';
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  variant = 'light',
  className = ''
}: CTASectionProps) {
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

  if (variant === 'gradient') {
    return (
      <section 
        ref={sectionRef}
        className={`py-20 ${className}`}
        style={{
          background: 'linear-gradient(135deg, #4a6cff/10 0%, #7c4dff/10 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-[#4a6cff]/20">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onPrimaryClick}
                  className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                {secondaryButtonText && onSecondaryClick && (
                  <Button
                    onClick={onSecondaryClick}
                    variant="outline"
                    className="bg-white border-2 border-[#4a6cff] text-[#4a6cff] hover:bg-[#4a6cff] hover:text-white transition-all duration-300"
                    size="lg"
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gray-50 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {title}
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onPrimaryClick}
                className="bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] hover:from-[#3a5cef] hover:to-[#6c3def] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {secondaryButtonText && onSecondaryClick && (
                <Button
                  onClick={onSecondaryClick}
                  variant="outline"
                  className="bg-white border-2 border-[#4a6cff] text-[#4a6cff] hover:bg-[#4a6cff] hover:text-white transition-all duration-300"
                  size="lg"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}