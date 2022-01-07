import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { ProjectCard } from "../componets/Componets";
import { projectData } from "../../data";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="heading">
        <div className="container">
          <div>
            <h1 className="text-center">My Projects</h1>
            <p className="text-center">
              Below are some of my favourites projects.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <section className="project">
            <div className="container">
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
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
