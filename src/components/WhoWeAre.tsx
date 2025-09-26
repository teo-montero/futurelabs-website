import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhoWeAre() {
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

  return (
    <section 
      id="who-we-are" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">FutureLabs is the UK's first student-run pro bono digital consultancy</strong>, 
                  uniquely positioned to go beyond traditional strategy and analysis by delivering hands-on implementation 
                  that bridges the gap between advice and real-world impact.
                </p>

                <p>
                  Unlike conventional consultancies, we don’t just recommend solutions — we design, build, and integrate them. 
                  By combining digital expertise with strategic insight, we ensure organisations gain the tools they need to 
                  scale their influence and achieve lasting results.
                </p>

                <p>
                  Our teams are drawn from multidisciplinary talent across the UK’s leading universities, blending technical, 
                  business, and creative skillsets to provide innovative solutions tailored to your organisations. Together, 
                  we deliver outcomes that are not only visionary, but truly transformative.
                </p>
              </div>
            </div>

            {/* Key Stats 
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-600 mt-1">NGOs Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] bg-clip-text text-transparent">
                  £2M+
                </div>
                <div className="text-sm text-gray-600 mt-1">Impact Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
            </div>*/}
          </div>

          {/* Right: Illustration/Graphic */}
          <div className={`relative ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 rounded-3xl transform rotate-3 opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #4a6cff 0%, #7c4dff 100%)'
                }}
              ></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://thumbs.dreamstime.com/b/london-england-panoramic-skyline-view-bank-district-london-skyscrapers-canary-wharf-background-blue-105053967.jpg"
                  alt="Digital consulting for nonprofit impact visualization"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}