import { FaNodeJs, FaHardHat } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiRedux,
  SiFirebase,
  SiTailwindcss,
  SiVuedotjs,
  SiSolidity,
  SiGithub,
  SiMongodb,
  SiHiveBlockchain,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiRust,
  SiSolana,
} from "react-icons/si";

export const projectData = [
  {
    dataAos: "fade-up",
    img: `./img/projects/clyntoapp.png`,
    name: "Clynto",
    description:
      "Clynto is an on-chain lending and borrowing protocol that allows users to lend and borrow crypto assets on EVM compatible blockchain by adopting a peer-to-peer model",
    link: "https://app.clynto.com/",
    gitLink: "https://github.com/chuksremi15",
    techStack: ["React", "Next.js", "Solidity"],
  },
  {
    dataAos: "fade-up",
    img: `./img/projects/buidlguidl.png`,
    name: "BuildGuidl Porfolio",
    description:
      "BuidlGuidl is a decentralized autonomous organization acting as the community and incentivization layer around scaffold-eth and speedrunethereum.com",
    link: "https://app.buidlguidl.com/builders/0xDAADf6f9B33a1e01Be2A48765D77B116A2d5DF77",
    gitLink: "https://github.com/chuksremi15",
    techStack: ["React", "Next.js", "Solidity"],
  },
  {
    dataAos: "fade-up",
    img: `./img/projects/aimovement.jpg`,
    name: "AI Movement",
    description:
      "AI Movement is a community of private and institutional investors, technology experts that seek to identify, understand, and resolve core humanitarian issues through advanced technology.",
    link: "https://aimovement.tech/",
    gitLink: "https://github.com/chuksremi15",
    techStack: ["React", "Redux", "Node.js"],
  },
  // {
  //   dataAos: "fade-up",
  //   img: `./img/projects/kachijamesgallery.jpg`,
  //   name: "Kachi James Gallery",
  //   description: "Art gallery website",
  //   link: "https://kachijames.com/",
  //   gitLink: "https://github.com/teensnfts/TeensNFT-Website",
  //   techStack: ["React", "Redux", "Node.js"],
  // },

  // {
  //   dataAos: "fade-up",
  //   img: `./img/projects/afrochives.jpg`,
  //   name: "Afrochives Studio",
  //   description:
  //     "Afrochives Studio is a media and content studio. Our mission is  to inform, educate, entertain and inspire audiences around the world through Afro-centric stories.",
  //   link: "https://afrochives.studio/",
  //   gitLink: "https://github.com/chuksremi15",
  //   techStack: ["React"],
  // },
  // {
  //   dataAos: "fade-up",
  //   img: `./img/projects/parapayhome.jpg`,
  //   name: "Parapay",
  //   description:
  //     "Parapay is a fintech startup based in Nigeria that seeks to make easier payment transaction by introducing the use of a unique HashTag. I built using React, the animations were achieved with third party libery.",
  //   link: "https://parapay.io",
  //   gitLink: "https://github.com/Chuksremi15",
  //   techStack: ["React", "Nodejs"],
  // },
];

export const skillCategories = {
  "Frontend Development": [
    {
      dataAos: "fade-up",
      icon: "GrReactjs",
      heading: "React",
      body: "Building interactive user interfaces",
      tech: "REACTJS",
    },
    {
      dataAos: "fade-up",
      icon: "RiNextjsLine",
      heading: "Next.js",
      body: "Full-stack React framework",
      tech: "NEXTJS",
    },
    {
      dataAos: "fade-up",
      icon: "SiRedux",
      heading: "Redux",
      body: "State management for React apps",
      tech: "REDUXJS",
    },
    {
      dataAos: "fade-up",
      icon: "SiTailwindcss",
      heading: "Tailwind CSS",
      body: "Utility-first CSS framework",
      tech: "TAILWIND",
    },
    {
      dataAos: "fade-up",
      icon: "SiVuedotjs",
      heading: "Vue.js",
      body: "Progressive JavaScript framework",
      tech: "VUEJS",
    },
  ],
  "Backend Development": [
    {
      dataAos: "fade-up",
      icon: "FaNodeJs",
      heading: "Node.js",
      body: "Server-side JavaScript runtime",
      tech: "NODE.JS",
    },
    {
      dataAos: "fade-up",
      icon: "SiExpress",
      heading: "Express.js",
      body: "Fast, minimalist web framework for Node.js",
      tech: "EXPRESS",
    },
    {
      dataAos: "fade-up",
      icon: "SiMongodb",
      heading: "MongoDB",
      body: "NoSQL database solution",
      tech: "MONGODB",
    },
    {
      dataAos: "fade-up",
      icon: "SiPostgresql",
      heading: "PostgreSQL",
      body: "Advanced open-source relational database",
      tech: "POSTGRESQL",
    },
    {
      dataAos: "fade-up",
      icon: "SiFirebase",
      heading: "Firebase",
      body: "Backend-as-a-Service platform",
      tech: "FIREBASE",
    },
  ],
  "Blockchain Development": [
    {
      dataAos: "fade-up",
      icon: "SiSolidity",
      heading: "Solidity",
      body: "Smart contract programming language",
      tech: "SOLIDITY",
    },
    {
      dataAos: "fade-up",
      icon: "SiRust",
      heading: "Rust",
      body: "Systems programming language for blockchain",
      tech: "RUST",
    },
    {
      dataAos: "fade-up",
      icon: "FaHardHat",
      heading: "Hardhat",
      body: "Ethereum development environment",
      tech: "HARDHAT",
    },
    {
      dataAos: "fade-up",
      icon: "SiSolana",
      heading: "Solana",
      body: "High-performance blockchain platform",
      tech: "SOLANA",
    },
    {
      dataAos: "fade-up",
      icon: "SiHiveBlockchain",
      heading: "Blockchain",
      body: "Decentralized application development",
      tech: "BLOCKCHAIN",
    },
  ],
  "Tools & Version Control": [
    {
      dataAos: "fade-up",
      icon: "SiGithub",
      heading: "Git & GitHub",
      body: "Version control and collaboration",
      tech: "GIT",
    },
  ],
};

// Keep the old serviceData for backward compatibility
export const serviceData = Object.values(skillCategories).flat();

// Export icon components (not JSX)
export const iconComponents = {
  FaNodeJs,
  GrReactjs,
  RiNextjsLine,
  SiSolidity,
  SiRedux,
  SiHiveBlockchain,
  FaHardHat,
  SiTailwindcss,
  SiVuedotjs,
  SiGithub,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiRust,
  SiSolana,
};
