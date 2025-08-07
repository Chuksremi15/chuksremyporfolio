import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="bg-primary text-light-gray py-20 mt-32 relative">
        <div className="absolute -top-12 left-0 right-0 h-24 bg-primary transform skew-y-3"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl text-white font-bold mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl mb-8">
              Have a project you'd like to discuss?
            </p>
            <Link
              to="/contact"
              className="inline-block py-[18px] px-[40px] text-[28px] bg-secondary text-white rounded-[50px] no-underline transition-all duration-500 ease-in-out hover:no-underline hover:text-white hover:py-[19px] hover:px-[41px] hover:border-2 hover:border-secondary hover:bg-primary"
            >
              Get In Touch
            </Link>
          </div>
          <div className="space-y-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/u/chuksremi15@gmail.com"
              className="block text-light-gray text-lg font-bold hover:text-white transition-colors"
            >
              <i className="fas fa-envelope mr-3"></i> ON EMAIL
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/emeka-onyedika-a5785b129/"
              className="block text-light-gray text-lg font-bold hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin mr-3"></i> ON LINKEDIN
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Chuksremi15"
              className="block text-light-gray text-lg font-bold hover:text-white transition-colors"
            >
              <i className="fab fa-github mr-3"></i> ON GITHUB
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/chuksremi"
              className="block text-light-gray text-lg font-bold hover:text-white transition-colors"
            >
              <i className="fab fa-twitter mr-3"></i> ON TWITTER
            </a>
          </div>
        </div>
      </section>
      <div className="bg-custom-dark text-light-gray py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>Copyright 2024 &copy; ChuksRemy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
