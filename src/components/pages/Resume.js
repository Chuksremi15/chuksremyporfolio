import React from "react";

const Resume = () => {
  return (
    <div>
      <section class="resume">
        <div>
          <div class="name">
            <h1>Chukwuemeka Remigius</h1>
            <h2>
              <span>Email:</span> Chuksremi15@gmail.com
            </h2>
            <h2>
              <span>Phone:</span> +2349058641510
            </h2>
            <h2>
              <span>Address:</span> New Heaven, Enugu
            </h2>
          </div>

          <div class="resume-content">
            <h2>JavaScript Developer</h2>
            <p>
              3 years of software development in vanilla JavaScript and it’s
              frameworks specifically React, Vue, and Node.js. Within this time,
              I’ve built several MERN Stack applications, mini-projects and an
              admin front-end for a fintech. I am a self-taught programmer
              coming from a computer science background and looking forward to
              offering my expertise in growing your company.
            </p>
          </div>

          <div class="resume-content">
            <h2>Skills</h2>
            <p>Coding languages (Vanilla JavaScript)</p>
            <p>
              Frameworks and libraries (React, Vue, Node.js, Express.js, Vuex,
              Redux, Sass, Bootstrap, Chakra UI, Ant Design)
            </p>
            <p>Database (MongoDB, MYSQL, Google firebase, Google firestore)</p>
          </div>

          <div class="resume-content">
            <h2>Work Experience</h2>
            <p>
              Front-end web Developer at Parapay, a fintech startup that seeks
              to provide inclusion to the traditionally underbanked and under
              serve locations in Nigeria
            </p>
            <p>
              Built responsive website and Parapay web app that have
              successfully handled 10,000+ transactions.
            </p>
          </div>

          <div class="resume-content">
            <h2>Education</h2>
            <p>
              Bachelor of science in computer science, Nnamdi Azikiwe
              University, 2021.
            </p>
          </div>

          <div class="resume-content">
            <h2>Interest</h2>
            <p>Solving coding challenge at Leetcode</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
