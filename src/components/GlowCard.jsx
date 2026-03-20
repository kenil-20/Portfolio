const GlowCard = ({ card, index, children }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          "{card.review}"
        </p>

        {/* Child Content (Avatar, Name, etc.) */}
        <div className="border-t border-white/10 pt-4">{children}</div>
      </div>
    </div>
  );
};

export default GlowCard;
