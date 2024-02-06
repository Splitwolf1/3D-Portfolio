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
    tailwind,
    nodejs,
    git,
    figma,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    // docker,
    //redux,
     //starbucks,
    // mongodb,
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
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const skills = [
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
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
     /* name: "docker",
      icon: docker,*/
    },
    //{
      /*name: "MongoDB",
      icon: mongodb,*/
   // },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
  ];
  
  const experiences = [
    
    {
      title: "Wordpress & Shopify Developer",
      company_name: "TransCTech",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2019 - Mar 2020",
      points: [
        "Design and develop customized Shopify & WordPress themes to meet client and brand requirements.",
        "Utilizing HTML, CSS, and JavaScript to create visually appealing and intuitive user interfaces.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Conducting regular audits to identify and resolve any security vulnerabilities.",
        "Implementing performance optimization strategies to enhance site speed and SEO.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "SolvTech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: " April 2020 - July 2021",
      points: [
        "Demonstrated proficiency in leveraging the React library to create dynamic and interactive components, contributing to the enhancement of overall user experience.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Responsible for adding new features such as automated user flows, API integrations,maintenance and optimizations, infrastructure migration and bug fixes on projects.",
        "Engaged in problem-solving and troubleshooting, identifying and addressing technical challenges to deliver effective solutions.",
        "Collaborated with UX/UI designers and back-end developers to ensure seamless integration of front-end and back-end components, fostering effective communication within the team.",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "Jenrec Pty Ltd",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Implemented websites, mobile applications, and landing pages from concept through deployment.",
        "Utilized Tailwind CSS to streamline the styling process, maintaining a consistent design system and contributing to the project's overall visual appeal.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tanaka Brian proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tanaka Brian does.",
      name: "Chris Williams",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Tanaka Brian optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "SovTech",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Splitwolf1/car_showcase",
      source_code_linc: "https://car-showcase-nine-lyart.vercel.app/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Codex ChatGPT",
      description:
        "A ChatGPT AI Application That Will Help You Code.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "OPENAI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Splitwolf1/open_ai",
    },
  ];
  
  export { services, skills, experiences, testimonials, projects };