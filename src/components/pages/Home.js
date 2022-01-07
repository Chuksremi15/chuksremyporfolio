import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { ProjectCard, ServiceCard } from "../componets/Componets";
import Aos from "aos";
import "aos/dist/aos.css";
import { projectData, serviceData } from "../../data";

const Home = () => {
  let app = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="root-div" ref={(el) => (app = el)}>
      <Navbar />
      <section className="showcase">
        <div className="container showcase-content">
          <div data-aos={"fade-right"} className="showcase-text">
            <h1>Go further with Remy.</h1>
            <p>
              Javascript enthusiast. I create bespoke websites and webapps to
              help you go further online.
            </p>
            <Link to="/projects" className="btn-large">
              My Projects
            </Link>
          </div>

          <div data-aos={"zoom-in"} className="showcase-image">
            <img src="./img/chuks.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="project">
        <div className="container">
          <h1 className="services-heading">MY PROJECTS</h1>
          <div className="line"></div>
          <div className="projects">
            {projectData.map(
              ({ img, name, description, link, gitLink, dataAos }) => (
                <ProjectCard
                  dataAos={dataAos}
                  img={img}
                  name={name}
                  description={description}
                  link={link}
                  gitLink={dataAos}
                />
              )
            )}
          </div>
          <div className="d-flex">
            <Link to="/projects" className="btn-medium">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <h1 className="services-heading">MY SKILLS</h1>
          <div className="line"></div>
          <div className="services">
            {serviceData.map(({ src, heading, body, tech, dataAos }) => (
              <ServiceCard
                dataAos={dataAos}
                src={src}
                heading={heading}
                body={body}
                tech={tech}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="service">
        <div className="container">
          <h1 className="services-heading">Journey</h1>
          <div className="line"></div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Home;
