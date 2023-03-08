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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Project Manager",
      icon: mobile,
    },
    {
      title: "Business Analyst",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "Java",
    },
    {
      name: "JavaScript",
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Vice President",
      company_name: "Commerzbank",
      date: "September 2017 - July 2022",
      points: [
        "Designed and delivered cutting-edge FX front office solutions, optimizing electronic trading activities.",
        "Implemented new market data sources, resulting in a 15% increase in tradable instruments.",
        "Enhanced low-latency trading framework, resulting in faster trade executions and increased profitability.",
        "Led a team of developers and introduced best practices, reducing defects by 20% and improving code maintainability by 10%.",
      ],
    },
    {
      title: "Associate Project Manager",
      company_name: "IRIS Software Inc.",
      date: "April 2017 - August 2017",
      points: [
        "Led the development of new features and enhancements by defining requirements and analyzing implementation opportunities.",
      ],
    },
    {
      title: "Technical Manager",
      company_name: "Mahindra Comviva",
      date: "November 2016 - March 2017",
      points: [
        "Played a crucial role in product development by leading efforts in release management, version control, and feature development across multiple teams.",
        "Reduced cloud (AWS) spending by ~25% through strategic implementation of best practices and cost-saving measures.",
        "Improved app stability by ~15% through collaborative efforts with developers to identify and address code inefficiencies, technical obstacles, and architectural challenges.",
      ],
    },
    {
      title: "Associate Technical Architect",
      company_name: "R Systems International Ltd",
      date: "June 2015 - November 2016",
      points: [
        "Built and nurtured a strong relationship with a lost client (DMA Inc.) to win them back and restore trust.",
        "Led a successful migration of a legacy Struts-based system to a modern Spring-based architecture, improving system performance by 20%.",
        "Implemented process improvements, including migration to Maven build framework and introduction of Test Driven Development (TDD), resulting in 50% faster build times and ~40% reduction in test defects.",
      ],
    },
    {
      title: "Project Lead",
      company_name: "JK Tech",
      date: "April 2009 - May 2015",
      points: [
        "Spearheaded successful project delivery as Technical Manager, Project Lead, and Senior Developer, managing full project lifecycles and ensuring alignment with stakeholders.",
        "Transformed engineering delivery times by 20% through implementing Agile best practices and refining methodologies to increase efficiency and productivity.",
        "Streamlined business processes by conducting thorough investigation, analysis, and documentation of functional business specifications to facilitate improvements.",
        "Collaborated with clients to fully comprehend pain points, needs, and specifications and delivered effective solutions through careful architectural and design decision-making and code reviews.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Fiserv India Pvt Ltd",
      date: "March 2007 - April 2009",
      points: [
        "Enhanced a Trade Order Management (TOM) trading solution, empowering investment managers with trading and administrative tools.",
        "Prototyped cutting-edge tools and technologies, such as OpenESB and Apache ServiceMix, to enhance the platform's capabilities and future-proof the system.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "JK Tech",
      date: "November 2005 - February 2007",
      points: [
        "Contributed to the development of two major projects: iTimer, a timesheet software, and a modernized website for the company.",
        "Learned Agile and iterative development methodologies, and supported programming changes during quality assurance, user acceptance testing, and post-implementation stages.",
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "image1",
      image: "./images/image1.jpg",
    },
    {
      name: "image2",
      image: "./images/image2.jpg",
    },
    {
      name: "image3",
      image: "./images/image3.jpg",
    },
    {
      name: "image4",
      image: "./images/image4.jpg",
    },
  ];
  

  const projects = [
    {
      name: "Streamlining Non-Deliverable Forward (NDF) Trading",
      description:
        "Led the end-to-end development of the NDF onboarding onto the eFX trading platform. This involved conducting a thorough requirement analysis, designing the solution, coding and testing the feature, ensuring successful production deployment, and providing ongoing post-go-live support.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "KDB+",
          color: "blue-text-gradient",
        },
        {
          name: "Multicast",
          color: "orange-text-gradient",
        },
        {
          name: "Junit",
          color: "green-text-gradient",
        },
      ],
      
    },
    {
      name: "FX Liquidity Provider Onboarding",
      description:
        "Designed and developed FIX bridges and market adaptors to onboard new liquidity providers (EBS/CME, Fastmatch) to our FX trading platform. This involved in-depth analysis of their APIs, implementing solutions, and thorough testing to ensure seamless connectivity.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "FIX",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "SBE",
          color: "pink-text-gradient",
        },
        {
          name: "KDB+",
          color: "blue-text-gradient",
        },
        {
          name: "Multicast",
          color: "orange-text-gradient",
        },
        {
          name: "Junit",
          color: "green-text-gradient",
        },
      ],
      
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };