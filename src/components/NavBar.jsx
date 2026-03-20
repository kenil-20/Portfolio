import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, link) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = "/Files/kenil-resume.pdf"; // Ensure this path is correct and the file is in the public directory
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Kenil_Kakadiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Kenil Kakadiya
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={(e) => scrollToSection(e, link)}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* Download CV Button - Icon only */}
            <button
              onClick={handleDownloadCV}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-purple-500/50 transition-all duration-300 group relative"
              title="Download CV"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              Contact me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-800/95 backdrop-blur-md rounded-xl animate-slideDown">
            <nav className="flex flex-col space-y-3">
              {navLinks.map(({ link, name }) => (
                <a
                  key={name}
                  href={link}
                  onClick={(e) => scrollToSection(e, link)}
                  className="text-gray-300 hover:text-white px-4 py-2 hover:bg-gray-700/50 transition-colors"
                >
                  {name}
                </a>
              ))}

              {/* Mobile Download CV Button */}
              <button
                onClick={() => {
                  handleDownloadCV();
                  setMobileMenuOpen(false);
                }}
                className="mx-4 px-4 py-2 text-center rounded-full border border-white/20 text-white font-medium hover:bg-white/5 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download CV</span>
              </button>

              {/* Mobile Contact Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mx-4 px-4 py-2 text-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg transition-all"
              >
                Contact me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
