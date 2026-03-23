import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 order-3 md:order-1">
            © {new Date().getFullYear()} Kenil Kakadiya. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-2">
            {socialImgs.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.name}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all group-hover:-translate-y-1">
                  <img
                    src={social.imgPath}
                    alt={social.name}
                    className="w-5 h-5 object-contain opacity-70 rounded-sm group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Terms */}
          <div className="flex gap-4 text-sm text-gray-400 order-1 md:order-3">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
