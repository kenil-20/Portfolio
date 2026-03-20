import { useRef, useEffect, useState } from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getIconForAbility = (title) => {
    const icons = {
      "Quality Focus": "🎯",
      "Reliable Communication": "💬",
      "On-Time Delivery": "⏱️",
    };
    return icons[title] || "✨";
  };

  return (
    <section className="py-20 bg-black">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Custom with proper styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">
              Core Values
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Makes Me{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Three principles that guide my work and ensure exceptional results
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abilities.map((ability, index) => (
            <div
              key={ability.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group relative h-full">
                {/* Hover Glow */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-20 blur-md" : "opacity-0"
                  }`}
                />

                {/* Card */}
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                    <span className="text-3xl">
                      {getIconForAbility(ability.title)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {ability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {ability.desc}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-purple-500/50 mt-6 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
