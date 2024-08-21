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
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="root-div" ref={(el) => (app = el)}>
      <Navbar />
      <section className="showcase">
        <div className="container showcase-content">
          <div data-aos={"fade-right"} className="showcase-text">
            <h1>Go further with Remy.</h1>
            <p>
              Full-stack and blockchain programmer with over 4 years of
              experience. Solid skills in HTML, CSS, Javascript, React, Redux,
              Node.js, Solidity. Experienced project team lead. Willing to learn
              and improve along with conventions in the ecosystem. Graduate of
              Computer Science.
            </p>
            <a href="/#projects" className="btn-large">
              My Projects
            </a>
          </div>

          <div data-aos={"zoom-in"} className="showcase-image">
            <img src="./img/profileimgwebsite.png" alt="" />
          </div>
        </div>
      </section>

      <section id="projects" className="project">
        <div className="container">
          <h1 className="services-heading">MY PROJECTS</h1>
          <div className="line"></div>
          <div className="projects">
            {projectData.map(
              ({
                img,
                name,
                description,
                link,
                gitLink,
                dataAos,
                techStack,
              }) => (
                <ProjectCard
                  dataAos={dataAos}
                  img={img}
                  name={name}
                  description={description}
                  link={link}
                  gitLink={dataAos}
                  techStack={techStack}
                />
              )
            )}
          </div>
          {/* <div className="d-flex">
            <Link to="/projects" className="btn-medium">
              View All Projects
            </Link>
          </div> */}
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
