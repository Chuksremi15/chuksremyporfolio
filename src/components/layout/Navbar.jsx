import React, { useState } from "react";
import { Link } from "react-router-dom";
import cv from "../../chuksremicv.pdf";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link to="/">
            <div className="text-xl font-bold text-gray-800 hover:text-secondary transition-colors">
              EMEKA ONYEDIKA
            </div>
          </Link>

          <div
            onClick={handleToggle}
            className="md:hidden flex flex-col cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                active ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all ${
                active ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                active ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>

          <ul
            className={`${
              active ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
          >
            <li>
              <a
                href={cv}
                className="block text-gray-700 hover:text-secondary transition-colors font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
