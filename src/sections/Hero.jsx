import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const creativeShowcase = [
    {
      type: "3D Sphere",
      icon: "🌐",
      title: "Interactive 3D",
      description: "Building immersive web experiences",
      color: "from-purple-500 to-pink-500",
      pattern: "circuit",
    },
    {
      type: "Creative Dev",
      icon: "✨",
      title: "Creative Development",
      description: "Where code meets creativity",
      color: "from-blue-500 to-cyan-500",
      pattern: "waves",
    },
    {
      type: "Innovation",
      icon: "💡",
      title: "Innovation First",
      description: "Pushing boundaries with every project",
      color: "from-orange-500 to-red-500",
      pattern: "dots",
    },
  ];

  // Tech icons for floating orbs
  const techIcons = [
    { icon: "⚛️", name: "React", color: "from-cyan-400 to-blue-500" },
    { icon: "🐍", name: "MySQL", color: "from-green-400 to-emerald-500" },
    { icon: "📱", name: "React Native", color: "from-purple-400 to-pink-500" },
    { icon: "🟢", name: "Node.js", color: "from-green-500 to-lime-500" },
    { icon: "🗄️", name: "MongoDB", color: "from-green-600 to-emerald-600" },
    { icon: "⚡", name: "Next.js", color: "from-gray-700 to-gray-900" },
    { icon: "🎨", name: "Tailwind", color: "from-sky-400 to-blue-500" },
    { icon: "📊", name: "TypeScript", color: "from-blue-600 to-indigo-600" },
  ];

  useEffect(() => {
    // Smooth rotation of showcase items
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % creativeShowcase.length);
    }, 4000);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  // Intersection Observer for fade-in animations
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

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center mt-6">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Animated badge */}
            <div className="fade-in opacity-0 translate-y-5 transition-all duration-700 delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 hover:border-purple-500/30 transition-all group">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">
                Open to opportunities
              </span>
            </div>

            {/* Main heading */}
            <h1 className="fade-in opacity-0 translate-y-5 transition-all duration-700 delay-200">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="block text-white mb-4">Creating</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                    Digital Magic
                  </span>
                </span>
              </span>
            </h1>

            <p className="fade-in opacity-0 translate-y-5 transition-all duration-700 delay-300 text-gray-400 text-lg md:text-xl mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              Hi, I'm Kenil. I transform complex problems into elegant,
              user-friendly digital experiences that captivate and inspire. With
              1+ years of hands-on web development experience and a B.E./B.Tech
              degree in IT, I bring both practical skills and strong technical
              knowledge.
            </p>

            {/* CTA Buttons */}
            <div className="fade-in opacity-0 translate-y-5 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const element = document.querySelector("#work");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group relative px-8 py-2 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Explore My Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group px-8 py-2 sm:py-4 border-2 border-white/10 text-white rounded-full font-medium hover:bg-white/5 hover:border-purple-500/30 transition-all duration-500 text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Let's Connect
                  <svg
                    className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Fixed Centering */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            <div className="relative w-full max-w-md">
              {/* Main creative display */}
              <div className="relative perspective-2000">
                {/* Rotating 3D Cube */}
                <div
                  className="relative w-96 h-96 mx-auto animate-rotate-slow"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {[...Array(6)].map((_, i) => {
                    const colors = [
                      "from-purple-600/20 to-pink-600/20",
                      "from-blue-600/20 to-cyan-600/20",
                      "from-orange-600/20 to-red-600/20",
                      "from-green-600/20 to-emerald-600/20",
                      "from-yellow-600/20 to-amber-600/20",
                      "from-indigo-600/20 to-violet-600/20",
                    ];
                    const icons = ["⚛️", "🚀", "💡", "🎨", "⚡", "🌟"];

                    return (
                      <div
                        key={i}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          transform: `rotateY(${i * 60}deg) translateZ(180px)`,
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                          transition: "all 0.5s ease",
                        }}
                      >
                        <div
                          className={`w-48 h-48 bg-gradient-to-br ${colors[i % colors.length]} backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-4`}
                        >
                          <span className="text-4xl mb-2 animate-bounce-subtle">
                            {icons[i]}
                          </span>
                          <span className="text-white text-sm font-mono">
                            Face {i + 1}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Icons in Perfect Circular Orbs */}
                {techIcons.slice(0, 8).map((tech, i) => {
                  const angle = i * 45 * (Math.PI / 180);
                  const radius = 220;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        zIndex: 30,
                      }}
                    >
                      <div
                        className="group relative w-16 h-16"
                        style={{
                          animation: `float 4s ease-in-out infinite`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      >
                        {/* Orb background */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${tech.color} opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500`}
                        />

                        {/* Orb content */}
                        <div className="relative w-full h-full rounded-full bg-gray-900/80 backdrop-blur-sm border-2 border-white/10 group-hover:border-white/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-500">
                          <span className="group-hover:rotate-12 transition-transform duration-300">
                            {tech.icon}
                          </span>

                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Central creative showcase */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 text-center z-40">
                  <div className="relative">
                    {/* Animated rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-80 h-80 border-2 border-purple-500/30 rounded-full animate-ping-slow" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-72 h-72 border-2 border-blue-500/30 rounded-full animate-ping-slow animation-delay-1000" />
                    </div>

                    {/* Main content */}
                    <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                      <div className="text-6xl mb-3 animate-bounce-subtle">
                        {creativeShowcase[activeIndex].icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {creativeShowcase[activeIndex].title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {creativeShowcase[activeIndex].description}
                      </p>

                      {/* Progress bar */}
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${creativeShowcase[activeIndex].color} transition-all duration-300 ease-linear`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Dots indicator */}
                      <div className="flex justify-center gap-2 mt-4">
                        {creativeShowcase.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              i === activeIndex
                                ? `w-8 bg-gradient-to-r ${creativeShowcase[i].color}`
                                : "w-2 bg-gray-600 hover:bg-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech labels at bottom */}
              <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 flex gap-4">
                {["React", "Node.js", "Three.js", "MongoDB"].map((tech, i) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          onClick={() => {
            const element = document.querySelector("#work");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="flex sm:flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer group"
        >
          <span className="text-xs text-gray-400 group-hover:text-white tracking-wider">
            DISCOVER MORE
          </span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center group-hover:border-purple-500/50 transition-colors duration-300">
            <div className="w-1 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-scroll-smooth" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
