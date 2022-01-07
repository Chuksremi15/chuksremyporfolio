import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <div class="container footer-content">
          <div>
            <h1>Let's Work Together</h1>
            <p>Have a project you'd like to discuss?</p>
            <Link to="/contact" class="btn-large">
              Get In Touch
            </Link>
          </div>
          <div class="footer-icons">
            <a href="https://mail.google.com/mail/u/chuksremi15@gmail.com">
              <i class="fas fa-envelope"></i> ON EMAIL
            </a>
            <a href="https://www.linkedin.com/in/chukwuemeka-remigius-a5785b129/">
              <i class="fab fa-linkedin"></i> ON LINKEDIN
            </a>
            <a href="https://github.com/Chuksremi15">
              <i class="fab fa-github"></i> ON GITHUB
            </a>
            <a href="https://twitter.com/chuksremi">
              <i class="fab fa-twitter"></i> ON TWITTER
            </a>
          </div>
        </div>
      </section>
      <div class="foot">
        <div class="container">
          <div class="row">
            <p>Copyright 2021 &copy; ChuksRemy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
