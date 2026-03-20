import { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(counterItems.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = counterItems.map((item, index) => {
      const increment = Math.ceil(item.value / 50); // Count to target in ~50 steps
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.value) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              item.value,
            );
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="counter"
      className="py-16 bg-gradient-to-b from-transparent to-gray-900/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {counterItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 group-hover:border-white/20 transition-all">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {counts[index]}
                  {item.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;
