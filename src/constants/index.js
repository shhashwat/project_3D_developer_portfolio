import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "c++",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Trainee",
    company_name: "JP Morgan Chase & Co.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
      "Fixed broken files in the repository to make web application output correctly.",
      "Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.",
      "Worked with various tools and technologies such as Git, GitHub, Visual Studio Code, Python, React, TypeScript, etc.",
    ],
  },
  {
    title: "Advanced Software Engineer Intern",
    company_name: "Walmart Global Tech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for a variety of teams at Walmart.",
      "Developed a novel version of a heap data structure in Java for Walmart’s shipping department, showcasing strong problem-solving and algorithmic skills.",
      "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
      "Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart’s pet department.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WhatsTheWord?",
    description:
      "WhatsTheWord? is a dynamic web-based social platform that enables users to create, share, and interact with posts effortlessly. Designed to offer a seamless experience, it integrates modern technologies and features to keep you engaged and connected.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mernstack",
        color: "blue-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/shhashwat/WhatsTheWord.git",
  },
  {
    name: "Convo-Connect!",
    description:
      "Web application that enables users to share messages and send pictures with other registered users on the website. You can search up the users, text them and the most recent chats appear on the top of the sidebar, current and the latest sent messages appear by the users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shhashwat/Convo-Connect.git",
  },
  {
    name: "RESTfull API based Crud App",
    description:
      "The RESTful API-based CRUD App Backend is a robust platform designed to handle essential CRUD operations efficiently. This backend service provides a reliable and scalable solution for managing data through a RESTful API.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
