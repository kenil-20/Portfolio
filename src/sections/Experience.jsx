import { useRef, useEffect } from "react";
import { expCards } from "../constants";

const Experience = () => {
  const expRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    expRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - New Style */}
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">
              Work Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Places I've worked and contributed to impactful projects
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {expCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (expRefs.current[index] = el)}
              className="opacity-0 translate-y-5 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-gray-700 overflow-hidden">
                      <img
                        src={card.logoPath}
                        alt={card.review}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML += `<span class="text-xl font-bold text-gray-400">${card.review[0]}</span>`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="text-purple-400 text-sm">{card.review}</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">
                        {card.date}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="mt-4 space-y-2">
                      {card.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {[
                        "React",
                        "Node.js",
                        "Laravel",
                        "Shopify",
                        "Liquid",
                        "API",
                      ]
                        .slice(0, 4)
                        .map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
