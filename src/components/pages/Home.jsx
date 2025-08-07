import React, { useEffect, useRef } from "react";
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
    <div className="min-h-screen" ref={(el) => (app = el)}>
      <Navbar />
      <section className="h-[750px] bg-primary text-light-gray pb-[200px] pt-[100px]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h1 className="text-7xl text-white mb-4">Go further with Remy.</h1>
            <p className="text-xl my-[35px]">
              Full-stack and blockchain programmer with over 5 years of
              experience. Solid skills in HTML, CSS, Javascript, React, Redux,
              Node.js, Solidity. Experienced project team lead. Willing to learn
              and improve along with conventions in the ecosystem. Graduate of
              Computer Science.
            </p>
            <a
              href="/#projects"
              className="inline-block py-[18px] px-[40px] text-[28px] bg-secondary text-white rounded-[50px] no-underline transition-all duration-500 ease-in-out hover:no-underline hover:text-white hover:py-[19px] hover:px-[41px] hover:border-2 hover:border-secondary hover:bg-primary"
            >
              My Projects
            </a>
          </div>

          <div
            data-aos="zoom-in"
            className="justify-self-end bg-custom-dark relative w-[375px] h-[450px] rounded-[20px] overflow-hidden"
          >
            <img
              src="./img/profileimgwebsite.png"
              alt=""
              className="absolute rounded-[5px] h-[400px] left-0 top-[50px]"
            />
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-custom-gray mb-4">
            MY SKILLS
          </h1>
          <div className="h-1 w-full bg-background-gray mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                dataAos={service.dataAos}
                icon={service.icon}
                heading={service.heading}
                body={service.body}
                tech={service.tech}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
