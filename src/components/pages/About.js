import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <section class="heading">
        <div class="container">
          <div>
            <h1 class="text-center">About Me</h1>
            <p class="text-center">
              Find out who I am, where I'm from and what I'm all about.
            </p>
          </div>
        </div>
      </section>

      <section class="about">
        <div class="about-content container">
          <div>
            <h1>Who I Am</h1>
            <p>
              My name is Remy. I'm fullstack developer based in Enugu, Nigeria.
            </p>
            <p>
              I am excited and passionate about what I do and really talented
              when it comes to being ingenious and creating stuff. Ever since I
              was a small boy, I have always been captivated by the wonders of
              technology.
            </p>

            <p>
              My birth to the marvels of technology came from a present my dad
              gifted me, a toy car with wired remote control, the remote control
              could only move the car forward and backward,my curious mind
              quickly picked interest in making the car do more than that, like
              making the car move sideways like a real car, getting rid of the
              remote wire between the car and remote and still maintain a
              connection.
            </p>
            <p>
              You can always trust me to give my absolute best and I look
              forward to helping individuals and companies create a web and
              mobile presence
            </p>
          </div>
          <div>
            <div class="about-image">
              <img src="./img/chuks2.jpg" alt="" class="img-fluid" />
            </div>
            <p class="text-center photo-caption">Outdoor photo at school</p>
          </div>
        </div>
      </section>

      <section class="about-services">
        <div class="container">
          <div class="line"></div>
          <div>
            <div class="text-center">
              <h1>From Start to Finish</h1>
              <p>
                From wireframes to design to code. I cover every step of the
                process in getting a website and mobile app launched.
              </p>
            </div>
          </div>
          <div class="d-flex">
            <Link to={"/process"} class="btn-medium">
              See My Process
            </Link>
          </div>
        </div>
      </section>
      <section class="about-services">
        <div class="container">
          <div class="line"></div>
          <div>
            <div class="text-center">
              <h1>Why Work With Me</h1>
              <p>
                There’s nothing I enjoy more than designing and developing good
                websites for nice people. It really is that simple.
              </p>
              <p>
                I’ve spent about 16 months trying to perfect what I do and while
                I’ll never be perfect, I do my best to come close.
              </p>
              <p>
                If you’ve got a project you’d like to work on with me just get
                in touch and we can get to work!
              </p>
            </div>
          </div>
          <div class="d-flex">
            <Link to={"/contact"} class="btn-medium">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
