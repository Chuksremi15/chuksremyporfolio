import React, { useEffect, useRef } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { ProjectCard, ServiceCard } from "../componets/Componets";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  projectData,
  serviceData,
  skillCategories,
  iconComponents,
} from "../../data";

const Home = () => {
  let app = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen" ref={(el) => (app = el)}>
      <Navbar />
      <section className="min-h-screen lg:h-[750px] bg-primary text-light-gray py-12 md:py-20 lg:py-[100px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              data-aos="fade-right"
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 lg:mb-6 leading-tight">
                Go further with Remy.
              </h1>
              <p className="text-lg sm:text-xl my-6 lg:my-[35px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I solve problems with code. Full-stack and blockchain developer
                with 5+ years of experience building scalable web applications
                and decentralized solutions. Expertise spans React, Node.js,
                Solidity and Rust with a proven track record leading development
                teams. Always evolving with the tech landscape. Currently
                Building Coinbox.
              </p>
              <a
                href="/#projects"
                className="inline-block py-3 px-6 sm:py-4 sm:px-8 lg:py-[18px] lg:px-[40px] text-lg sm:text-xl lg:text-[28px] bg-secondary text-white rounded-[50px] no-underline transition-all duration-500 ease-in-out hover:no-underline hover:text-white hover:scale-105 hover:border-2 hover:border-secondary hover:bg-primary"
              >
                My Projects
              </a>
            </div>

            <div
              data-aos="zoom-in"
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="bg-custom-dark relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[375px] lg:h-[450px] rounded-[20px] overflow-hidden">
                <img
                  src="./img/profileimgwebsite.png"
                  alt="Emeka Onyedika"
                  className="absolute rounded-[5px] h-[300px] sm:h-[350px] lg:h-[400px] left-0 top-[25px] sm:top-[35px] lg:top-[50px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-custom-gray mb-4">
            MY PROJECTS
          </h1>
          <div className="h-1 w-full bg-background-gray mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                dataAos={project.dataAos}
                img={project.img}
                name={project.name}
                description={project.description}
                link={project.link}
                gitLink={project.gitLink}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className=" mx-auto px-4 container">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              MY SKILLS
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className=" mx-auto max-w-7xl grid grid-cols-4">
            {Object.entries(skillCategories).map(
              ([category, skills], categoryIndex) => (
                <div key={categoryIndex} data-aos="fade-up">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 text-center md:text-left">
                    {category}
                  </h2>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {skills.map((skill, skillIndex) => {
                      const IconComponent = iconComponents[skill.icon];
                      return (
                        <div
                          key={skillIndex}
                          data-aos="zoom-in"
                          data-aos-delay={skillIndex * 100}
                          className="group flex items-center gap-3 bg-white hover:bg-secondary px-4 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                          <div className="text-secondary group-hover:text-white text-xl transition-colors duration-300">
                            {IconComponent && <IconComponent />}
                          </div>
                          <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                            {skill.heading}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              GET IN TOUCH
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a
                      href="mailto:chuksremi15@gmail.com"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      chuksremi15@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fab fa-linkedin text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/emeka-onyedika-a5785b129/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      Emeka Onyedika
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fab fa-github text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">GitHub</h3>
                    <a
                      href="https://github.com/Chuksremi15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      @Chuksremi15
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fab fa-twitter text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Twitter</h3>
                    <a
                      href="https://twitter.com/chuksremi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      @chuksremi
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600 text-sm">
                  I typically respond to emails within 24 hours. For urgent
                  matters, feel free to reach out on LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Send a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Required fields. Your information will be kept confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
