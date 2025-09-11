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

            {/* Key Stats */}
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
            </div>
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
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29uc3VsdGluZyUyMG5vbnByb2ZpdCUyMGltcGFjdHxlbnwwfHx8fDE3NTc0Mzk4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital consulting for nonprofit impact visualization"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay with Icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-gray-900">Impact Amplified</div>
                          <div className="text-sm text-gray-600">Through Smart Technology</div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-xl flex items-center justify-center">
                          <span className="text-white text-xl">🚀</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#4a6cff] to-[#7c4dff] rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">💡</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#7c4dff] to-[#4a6cff] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}