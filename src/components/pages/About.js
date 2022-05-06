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
              I am excited and passionate about coding and really talented when
              it comes to being ingenious and creating stuff. Ever since I was a
              small boy, I have always been captivated by the wonders of
              technology.
            </p>

            <p>
              My birth to the marvels of technology came from a present my dad
              gifted me, a toy car with wired remote control, the remote control
              could only move the car forward and backward, my curious mind
              quickly picked interest in making the car do more than that, like
              making the car move sideways like a real car, getting rid of the
              remote wire between the car and remote and still maintain a
              connection. I graduated from working on toys to working on radios
              and other household electronics. This passion to be creative and
              build stuff kept me busy till I came in contact with coding and
              was mind blown when I discovered written lines of text could
              perform such marvels.
            </p>
            <p>
              This passion influenced my decision to study computer science at
              the university where I was exposed to more resources and
              knowledge. I studied new programming languages, compilers
              construction, algorithms, software development life cycle, further
              mathematics, system architecture, and lots more.
            </p>
            <p>
              Every waking day I yearn for more knowledge, career growth, and
              providing solutions to complex problems. You can always trust me
              to give my absolute best and I look forward to helping individuals
              and companies with my talent and skills.
            </p>
            <p>
              I am currently building on the blockchain and looking to simplify
              the crypto concept for easy understanding and adoption.
            </p>
            <p>
              Specialties: Javascript, Reactjs, Nodejs, Algorithms, Blockchain,
              Solidity.
            </p>
          </div>
          <div>
            <div class="about-image">
              <img src="./img/chuks2.jpg" alt="" class="img-fluid" />
            </div>
            <p class="text-center photo-caption">Outdoor photo</p>
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
                There’s nothing I enjoy more than designing and building
                products that will scale and impact the world. It really is that
                simple.
              </p>
              <p>
                I’ve spent about 3 years trying to perfect what I do and while
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
