import { useRef, useEffect, useState } from "react";
import { expCards } from "../constants";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const transitionTimeoutRef = useRef(null);

  const totalCards = expCards.length;

  // Handle window resize for responsive
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    if (windowWidth < 768) return 1; // Mobile: 1 card
    if (windowWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const cardsToShow = getCardsToShow();
  const isMobileOrTablet = windowWidth < 1024;

  // Get visible cards based on current index and screen size
  const getVisibleCards = () => {
    const visible = [];
    const halfShow = Math.floor(cardsToShow / 2);

    for (let i = -halfShow; i <= halfShow; i++) {
      let index = currentIndex + i;
      if (index < 0) index = totalCards + index;
      if (index >= totalCards) index = index - totalCards;
      visible.push({ ...expCards[index], originalIndex: index });
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  // Auto-slide functionality - only on desktop
  useEffect(() => {
    if (!isMobileOrTablet && !isHovered && !isTransitioning) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, totalCards, isMobileOrTablet, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);

    // Reset transition state after animation completes
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    if (isTransitioning) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || isTransitioning) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50; // Minimum distance for swipe to register

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe right - go to previous slide
        prevSlide();
      } else {
        // Swipe left - go to next slide
        nextSlide();
      }
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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

  // Helper function to check if card is center
  const isCenterCard = (idx) => {
    if (cardsToShow === 1) return true;
    if (cardsToShow === 2) return idx === 1;
    return idx === 1;
  };

  return (
    <section
      id="experience"
      className="py-12 md:py-20 lg:py-24 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className="text-center mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs md:text-sm text-purple-400 font-semibold uppercase tracking-wider">
              Work Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            My Work
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Places I've worked and contributed to impactful projects
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mt-8 md:mt-12 lg:mt-16"
          onMouseEnter={() => !isMobileOrTablet && setIsHovered(true)}
          onMouseLeave={() => !isMobileOrTablet && setIsHovered(false)}
          onTouchStart={isMobileOrTablet ? handleTouchStart : undefined}
          onTouchMove={isMobileOrTablet ? handleTouchMove : undefined}
          onTouchEnd={isMobileOrTablet ? handleTouchEnd : undefined}
        >
          {/* Navigation Buttons - Hidden on mobile if only 1 card */}
          {cardsToShow > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-gray-800/90 hover:bg-purple-600 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 -ml-3 md:-ml-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-gray-800/90 hover:bg-purple-600 text-white rounded-full p-2 md:p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 -mr-3 md:-mr-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Track - With smooth transitions */}
          <div
            className={`flex justify-center items-center gap-3 md:gap-4 lg:gap-6 px-2 md:px-4 lg:px-8 ${cardsToShow === 1 ? "px-0" : ""}`}
            style={{
              transition: isTransitioning
                ? "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {visibleCards.map((card, idx) => {
              const isCenter = isCenterCard(idx);
              const isMobile = cardsToShow === 1;

              // Responsive width classes
              let widthClass = "";
              if (isMobile) {
                widthClass = "w-full";
              } else if (cardsToShow === 2) {
                widthClass = isCenter
                  ? "w-full md:w-3/4 lg:w-2/3 mx-auto"
                  : "w-full md:w-3/4 lg:w-2/3 hidden md:block mx-auto";
              } else {
                widthClass = isCenter
                  ? "w-full md:w-3/4 lg:w-2/3 xl:w-3/5 mx-auto"
                  : "w-full md:w-2/5 lg:w-1/2 xl:w-2/5 hidden md:block";
              }

              return (
                <div
                  key={`${card.originalIndex}-${idx}`}
                  className={`transition-all duration-500 ease-out ${widthClass} ${
                    isTransitioning ? "scale-98" : "scale-100"
                  }`}
                  style={{
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div
                    className={`group relative bg-gray-800/40 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 border transition-all duration-500 hover:shadow-xl h-full flex flex-col ${
                      isCenter
                        ? "border-purple-500/70 shadow-xl shadow-purple-500/20 scale-100 z-20"
                        : "border-gray-700 hover:border-purple-500/30 scale-95 opacity-70 hover:opacity-90"
                    }`}
                    style={{
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-blue-600/0 rounded-xl group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-blue-600/10 transition-all duration-700" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Logo and Title/Company Section */}
                      <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                            <div
                              className={`relative rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border overflow-hidden transition-all duration-500 ${
                                isCenter
                                  ? "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 border-purple-500/50 group-hover:scale-110"
                                  : "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 border-gray-700 group-hover:border-purple-500/50 group-hover:scale-105"
                              }`}
                            >
                              <img
                                src={card.logoPath}
                                alt={card.review}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  const parent = e.target.parentElement;
                                  if (
                                    parent &&
                                    !parent.querySelector(".fallback-text")
                                  ) {
                                    const span = document.createElement("span");
                                    span.className =
                                      "fallback-text text-base sm:text-lg font-bold text-gray-400";
                                    span.textContent = card.review.charAt(0);
                                    parent.appendChild(span);
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-semibold text-white transition-all duration-500 ${
                              isCenter
                                ? "text-base sm:text-lg md:text-xl lg:text-2xl"
                                : "text-sm sm:text-base md:text-lg"
                            } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400`}
                          >
                            {card.title}
                          </h3>
                          <p
                            className={`text-purple-400 transition-colors duration-500 ${
                              isCenter
                                ? "text-sm sm:text-base md:text-lg lg:text-xl"
                                : "text-xs sm:text-sm md:text-base"
                            } group-hover:text-purple-300`}
                          >
                            {card.review}
                          </p>
                        </div>
                      </div>

                      {/* Date - On its own row */}
                      <div className="mb-3 sm:mb-4 lg:mb-5">
                        <span
                          className={`text-gray-500 transition-colors duration-500 flex items-center gap-1 ${
                            isCenter
                              ? "text-xs sm:text-sm md:text-base lg:text-lg"
                              : "text-[11px] sm:text-xs md:text-sm"
                          } group-hover:text-gray-400`}
                        >
                          <svg
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span>{card.date}</span>
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <ul className="mt-1 sm:mt-2 space-y-1.5 sm:space-y-2 lg:space-y-2.5 mb-3 sm:mb-4 lg:mb-5 flex-1">
                        {card.responsibilities
                          .slice(
                            0,
                            isCenter
                              ? windowWidth < 640
                                ? 4
                                : 6
                              : windowWidth < 640
                                ? 1
                                : 2,
                          )
                          .map((resp, idx) => (
                            <li
                              key={idx}
                              className={`flex items-start gap-1.5 sm:gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-500 ${
                                isCenter
                                  ? "text-xs sm:text-sm md:text-base lg:text-md"
                                  : "text-[11px] sm:text-xs md:text-sm"
                              }`}
                            >
                              <span className="text-purple-400 mt-0.5 sm:mt-1 group-hover:text-purple-300 transition-colors duration-500 flex-shrink-0">
                                •
                              </span>
                              <span
                                className={
                                  !isCenter ? "line-clamp-2" : "break-words"
                                }
                              >
                                {resp}
                              </span>
                            </li>
                          ))}
                        {!isCenter && card.responsibilities.length > 2 && (
                          <li className="text-[10px] sm:text-[11px] text-gray-500">
                            +{card.responsibilities.length - 2} more
                          </li>
                        )}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-2.5 mt-auto pt-3 sm:pt-4 lg:pt-5 border-t border-gray-800">
                        {(
                          card.techStack || [
                            "React",
                            "Node.js",
                            "Laravel",
                            "Shopify",
                          ]
                        )
                          .slice(
                            0,
                            isCenter
                              ? windowWidth < 640
                                ? 4
                                : 6
                              : windowWidth < 640
                                ? 2
                                : 3,
                          )
                          .map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 bg-gray-700/50 text-gray-300 rounded-full transition-all duration-300 group-hover:bg-purple-500/10 group-hover:text-purple-400 whitespace-nowrap ${
                                isCenter
                                  ? "text-[11px] sm:text-xs md:text-sm lg:text-base"
                                  : "text-[10px] sm:text-[11px] md:text-xs"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Bottom Gradient Line on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 lg:mt-10">
            {expCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-4 sm:w-6 md:w-8 lg:w-10 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "w-1.5 sm:w-2 bg-gray-600 hover:bg-gray-500"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
