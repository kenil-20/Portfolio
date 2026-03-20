import { useRef, useEffect, useState } from "react";
import { socialImgs } from "../constants";

const ShowcaseSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  // Get GitHub URL from socialImgs
  const githubUrl =
    socialImgs.find((social) => social.name === "GitHub")?.url ||
    "https://github.com/kenil-20";

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description:
        "A modern shopping experience with real-time inventory, cart management, and secure payment integration.",
      longDescription:
        "Built a complete e-commerce solution with user authentication, product catalog, shopping cart, order management, and payment gateway integration. Features include product search, filters, reviews, and admin dashboard.",
      image: "/images/project1.png",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Redux"],
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Real-time inventory",
        "Secure payments",
        "Order tracking",
        "Admin panel",
      ],
      githubRepo: `${githubUrl}/ecommerce-platform`,
      demoAvailable: false,
    },
    {
      id: 2,
      title: "Hospital Management System",
      category: "Healthcare Tech",
      description:
        "Comprehensive hospital management solution for patient records, appointments, and billing.",
      longDescription:
        "Developed a full-featured hospital management system that streamlines patient registration, appointment scheduling, electronic health records (EHR), prescription management, billing, and reporting. Includes separate portals for patients, doctors, and administrators.",
      image: "/images/project2.png",
      tags: ["React", "Express", "PostgreSQL", "Node.js", "TailwindCSS"],
      gradient: "from-blue-600 to-cyan-600",
      features: [
        "Patient records",
        "Appointment scheduling",
        "EHR System",
        "Billing",
        "Prescriptions",
      ],
      githubRepo: `${githubUrl}/hospital-management`,
      demoAvailable: false,
    },
    {
      id: 3,
      title: "Developer Portfolio",
      category: "Frontend",
      description:
        "Interactive portfolio with smooth animations and modern design.",
      longDescription:
        "A stunning developer portfolio showcasing projects, skills, and experience with smooth animations, responsive design, and interactive elements. Built with modern frontend technologies.",
      image: "/images/project3.png",
      tags: ["React", "Framer Motion", "TailwindCSS", "GSAP"],
      gradient: "from-orange-600 to-red-600",
      features: [
        "Smooth animations",
        "Responsive design",
        "Dark/Light mode",
        "Project filtering",
      ],
      githubRepo: `${githubUrl}/developer-portfolio`,
      demoAvailable: true,
      demoLink: "#",
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

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  const openGitHub = (repoUrl) => {
    window.open(repoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-purple-900/5 to-gray-900" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">
              Featured Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Creative
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in building modern web applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className="opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="group relative h-full">
                {/* Subtle Border Glow on Hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "opacity-20 blur-sm"
                      : "opacity-0"
                  }`}
                />

                {/* Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-500 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-70"
                      }`}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay with Quick Actions */}
                    <div
                      className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-500 ${
                        hoveredProject === project.id
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{project.features.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-gray-800/50 rounded-full text-gray-400 group-hover:bg-gray-700/50 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-800/50 rounded-full text-gray-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-2">
                      <button
                        onClick={() => openGitHub(project.githubRepo)}
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 group/btn"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>View Code</span>
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>
                      <div className="text-xs text-gray-600 flex items-center gap-1">
                        <span>⭐</span>
                        <span>Featured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white font-medium">
              View All Projects on GitHub
            </span>
            <svg
              className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-gray-800">
          {[
            { value: "15+", label: "Projects Completed", icon: "🚀" },
            { value: "8+", label: "Happy Clients", icon: "😊" },
            { value: "12+", label: "Technologies", icon: "💻" },
            { value: "100%", label: "Client Satisfaction", icon: "⭐" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ShowcaseSection;
