import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import cv from "../../ChuksRemyCV.pdf";

const Navbar = () => {
  const [navData, setNavData] = useState({
    active: false,
  });

  const { active } = navData;

  const handleToggle = () => {
    setNavData({ ...navData, active: !active });
  };

  return (
    <div>
      <section className="navbar-section">
        <div className="nav-container">
          <nav className="navbar">
            <Link to="/">
              {" "}
              <div className={active ? "actived navbar-logo" : "navbar-logo"}>
                CHUKS REMY
              </div>
            </Link>
            <div
              onClick={handleToggle}
              className={active ? "is-active menu-toggle" : "menu-toggle"}
              id="mobile-menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={active ? "active nav-menu" : "nav-menu"}>
              <li>
                <NavLink
                  to="/process"
                  className="nav-links"
                  activeClassName="active"
                >
                  Process
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="nav-links"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="nav-links"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a href={cv} className="nav-links">
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
