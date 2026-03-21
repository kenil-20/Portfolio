import { useRef, useEffect } from "react";
import { techStackImgs } from "../constants";

const TechStack = () => {
  const sectionRef = useRef(null);
  const techCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "TailwindCSS", "Three.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "MySQL", "Laravel", "Express", "MongoDB"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Figma", "Postman", "VSCode"],
    },
  ];

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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-12 md:py-20 lg:py-24 overflow-hidden bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - New Style */}
        <div
          ref={sectionRef}
          className="text-center mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">
              Technical Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies I
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2">
              Master
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with to build
            amazing digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Technologies I Use
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {techStackImgs.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <img
                  src={tech.imgPath}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-3 object-contain filter group-hover:brightness-110 transition-all"
                />
                <p className="text-center text-sm text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
