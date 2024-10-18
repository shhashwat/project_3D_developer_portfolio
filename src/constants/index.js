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
} from "../assets";

import amkh from '../assets/images/amkh.png'
import urlshort from '../assets/images/urlshortner.png'
import chatter from '../assets/images/chattersarchive.png'
import lgm from '../assets/images/lgm.png'
import dailygoals from '../assets/images/dailygoals.png'
import ic from '../assets/images/impulsechitra.png'

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
    date: "August 2024",
    points: [
      "Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for a variety of teams at Walmart.",
      "Developed a novel version of a heap data structure in Java for Walmart’s shipping department, showcasing strong problem-solving and algorithmic skills.",
      "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
      "Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart’s pet department.",
    ],
  },
  {
    title: "Backend-end Developer Intern",
    company_name: "Hewlett Packard Enterprise",
    icon: ic,
    iconBg: "#383E56",
    date: "September 2024",
    points: [
      "Wrote a proposal for a RESTful web service to manage a list of employees",
      "Built a web server application in Java Spring Boot that can accept and respond to HTTP requests as well as support uploading JSON data",
      "Developed and ran a set of unit tests to assess my Java Spring Boot application’s performance",
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
      "Convo-Connect! is a web-based application that enables users to share messages and send pictures with other registered users on the website. You can search up the users, text them and the most recent chats appear on the top of the sidebar, current and the latest sent messages appear by the users.",
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
    source_code_link: "https://github.com/shhashwat/RESTful-api-based-CRUD-app-backend.git",
  },
  {
    name: "URL Shrinker",
    description:
      "URL Shrinker is a web-based platform that allows users to shorten long URLs and share them with other users. Users can also manage their shortened URLs and share them with others.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: urlshort,
    source_code_link: "https://github.com/shhashwat/URLShortner.git",
  },
  {
    name: "ChattersArchive?",
    description:
      "ChattersArchive is a web-based platform that allows users to communicate with other users on the platform after being logged in by using Google Authentication to authenticate users. Users can also manage their chats and share them with others.",
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
        name: "chakraui",
        color: "pink-text-gradient",
      },
    ],
    image: chatter,
    source_code_link: "https://github.com/shhashwat/chattersarchive.git",
  },
  {
    name: "Lets Go Movies",
    description:
      "Lets Go Movies is a web-based platform that reccomends movies for users based on their preferences and popular genres it allows users to look up the details of the selected movie and showcases a breif summary of the slected movie. The API was sourced from The Movie Database",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: lgm,
    source_code_link: "https://github.com/shhashwat/LetsGoMovies.git",
  },
  {
    name: "AurMausamKaisaHai?",
    description:
      "AurMausamKaisaHai is a web-based platform that allows users to search, the temprature,the weather condition, time, day and date of the place they desire to know about.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: amkh,
    source_code_link: "https://github.com/shhashwat/AurMausamKaisaHai.git",
  },
  {
    name: "Daily Goals",
    description:
      "Daily Goals is a web-based goals listing platform that allows users to append their daily goals in headers and descriptions. And then the user can delete their goals on completion of their tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reactrouter",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dailygoals,
    source_code_link: "https://github.com/shhashwat/dailygoalsapp.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
