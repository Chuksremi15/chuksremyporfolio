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
              <span>Phone:</span> +2348160564759
            </h2>
            <h2>
              <span>Address:</span> New Heaven, Enugu
            </h2>
          </div>

          <div class="resume-content">
            <h2>JavaScript and Solidity Developer</h2>
            <p>
              5 years plus of software development in JavaScript and it’s
              frameworks specifically React, Vue, and Node.js. Within this time,
              I’ve built several MERN Stack applications, mini-projects and an
              admin front-end for a fintech. About a year of learning and
              writing smart contract. I am a self-taught programmer coming from
              a computer science background and looking forward to offering my
              expertise in growing your company.
            </p>
          </div>

          <div class="resume-content">
            <h2>Skills</h2>
            <p>Coding languages (JavaScript, Solidity)</p>
            <p>
              Frameworks and libraries (React, Vue, Node.js, Express.js,
              Hardhat, Truffle, Vuex, Redux, Sass, Bootstrap, Chakra UI, Ant
              Design)
            </p>
            <p>Database (MongoDB, MYSQL, Google firebase, Google firestore)</p>
          </div>

          <div class="resume-content">
            <h2>Work Experience</h2>
            <h5 className="text-right">(October 2018 - November 2021)</h5>
            <p>
              Front-end web Developer at Parapay, a fintech startup that seeks
              to provide inclusion to the traditionally underbanked and under
              serve locations in Nigeria
            </p>

            <p>
              Built responsive website and Parapay web app that have
              successfully handled 10,000+ transactions.
            </p>

            <div style={{ height: "2px", backgroundColor: "gray" }}></div>
            <h5 className="text-right mt-3">(June 2021 - November 2021)</h5>
            <p>
              Front-Stack JavaScript Developer at Midleman, an e-commerce
              healthcare startup based in Nigeria
            </p>

            <p>
              Developed the software architechture blueprint that guilded my
              team, built backend core functionalities like authentication,
              products features, delivery man features.
            </p>
            <div style={{ height: "2px", backgroundColor: "gray" }}></div>
            <h5 className="text-right mt-3">(January 2022 - Now)</h5>
            <p>
              Front-Stack Solidity Developer at Omitch, a casino startup on the
              blockchain
            </p>

            <p>
              Responsible for the full cycles of the blockchain and smart
              contract for the betting and staking protocol with solidity.
              Integrated smart contract ABI using ethersjs in a frontend built
              with React and Wrote test for smart contract using hardhat, mocha,
              chai and ethers. Employed hardhat as a development environment.
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
            <p>Rate above 1250 on chess.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
