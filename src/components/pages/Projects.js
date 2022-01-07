import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {ProjectCard} from '../componets/Componets';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className='heading'>
        <div className='container'>
          <div>
            <h1 className='text-center'>My Projects</h1>
            <p className='text-center'>
              Below are some of my favourites projects.
            </p>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='container'>
          <section className='project'>
            <div className='container'>
              <div className='projects'>
                <ProjectCard
                  img={'./img/projects/parapay.jpg'}
                  name={'Parapay'}
                  description={
                    'Parapay is a fintech startup based in Nigeria that seeks to make easier payment transaction by introducing the use of a unique HashTag. The website was developed using React, the animations were achieve using a third party libery.'
                  }
                  link={'https://parapay.io'}
                  gitLink={'https://github.com/Chuksremi15'}
                />
                <ProjectCard
                  img={'./img/projects/paulukonu.jpg'}
                  name={'Paul Ukonu'}
                  description={
                    'A sleek, animated, and well-designed photography website for celebrity Photography Paul Ukonu. One of my favorite projects. The carousel effect and design were achieved by customizing the root bootstrap code. The design was done with Figma.'
                  }
                  link={'https://paulukonu.com'}
                  gitLink={'https://github.com/Chuksremi15'}
                />
                <ProjectCard
                  img={'./img/projects/zoomfx.jpg'}
                  name={'Zoomfx'}
                  description={
                    'MERN stack forex investment site. This project includes an admin section. The methods used are ingenious. I used Redux for state management. This project really challenged my thought process but I excelled and learned a lot along the way.'
                  }
                  link={'https://cryptic-taiga-82883.herokuapp.com/'}
                  gitLink={'https://github.com/Chuksremi15'}
                />
                <ProjectCard
                  img={`./img/projects/parapayhome.jpg`}
                  name={'Parapay'}
                  description={
                    'Parapay is a fintech startup based in Nigeria that seeks to make easier payment transaction by introducing the use of a unique HashTag. The website was developed using React, the animations were achieve using a third party libery.'
                  }
                  link={'https://parapayhome.web.app/'}
                  gitLink={'https://github.com/Chuksremi15'}
                />
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
