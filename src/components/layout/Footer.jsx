import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Branding */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">
              Emeka Onyedika
            </h3>
            <p className="text-sm text-gray-400">
              Full-Stack & Blockchain Developer
            </p>
          </div>

          {/* Center - Quick Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Chuksremi15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emeka-onyedika-a5785b129/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com/chuksremi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="mailto:chuksremi15@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>

          {/* Right side - Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Emeka Onyedika. All rights reserved. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
