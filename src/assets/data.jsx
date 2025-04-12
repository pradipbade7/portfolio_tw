import { FaReact, FaNodeJs, FaVuejs, FaDatabase, FaMicrosoft, FaHtml5, FaCss3, FaJs, FaCogs } from 'react-icons/fa';
import { SiDotnet, SiPostgresql, SiSharp, SiTypescript, SiBootstrap, SiJquery, SiSupabase, SiTailwindcss } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

import { PiFileSqlLight } from "react-icons/pi";

import { VscAzure } from "react-icons/vsc";

import {
  FaDocker,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJirasoftware,
  SiJavascript
} from "react-icons/si";
export const aboutData = {
  fullName: "PRADIP BADE",
  education: [
    {
      year: "2020 - 2022",
      degree: "Engineering, Information Technology",
      institution: "Xamk - South-Eastern Finland University of Applied Sciences",
      image: "/xamk.png"
    },
    {
      year: "2009 - 2014",
      degree: "Bachelor's degree Degree in Computer Engineering",
      institution: "Khwopa Engineering College",
      image: "/khec.jpeg"
    }
  ],
  description: (
    <>
      I am a developer passionate about <strong className="text-green-400">building applications</strong> and have experience of working across industries like <strong className="text-green-400">e-commerce, insurance, and digital remittance</strong>.
      I've worked with clients like <strong className="text-green-400">Merchantrade Asia, Power, Eventim, DNA</strong>,
      focusing on personalized UI solutions, API integrations, and scalable platforms.  
      <br/><br/>
  
      I'm also interested in <strong className="text-green-400">AI and machine learning</strong> and love integrating intelligent solutions into applications. 
      Feel free to <a href='/'><strong className="text-blue-300">connect on LinkedIn</strong></a>—I’m always open to new opportunities and collaborations!
    </>
  ),
  role: "Full Stack Developer, Web Developer",
  linkedin: "https://www.linkedin.com/in/pradipbade",
  githubUrl: "https://github.com/pradipbade7",
  cv: "/Pradip_Bade_CV.pdf",
  tagline: '"Code by day, football stats by night—debugging life one commit and goal at a time." ⚽💻'
};

export const experienceData = [
  {
    year: "11/2022 – 02/2025",
    role: "Web Application Developer",
    company: "Frosmo",
    location: "Helsinki, Finland",
    image: "/frosmo.jpeg",
    website: "https://www.frosmo.com",
    description: "Creating UI templates for e-commerce and iGaming sites, displaying personalized product recommendations and custom search functionalities.",
    skills: [<FaJs className="text-yellow-300" />, <FaReact className="text-blue-400" />, <SiTypescript className="text-teal-400" />, <FaHtml5 className="text-yellow-500" />]
  },
  {
    year: "08/2021 – 01/2022",
    role: "Business Developer (Full Stack Developer)",
    company: "Shadow Finland",
    location: "Helsinki, Finland",
    image: "/shadow.jpeg",
    website: "https://www.linkedin.com/company/shadow-kitchen/",
    description: "Developed shadowfoods.com, an online food ordering platform, integrating VivaWallet and Deliverect.",
    skills: [<SiJquery className="text-blue-400" />, <TbBrandCSharp className="text-purple-600" />, <SiBootstrap className="text-purple-500" />, <VscAzure className="text-blue-700" />]
  },
  {
    year: "03/2020 – 02/2021",
    role: "Software Developer",
    company: "EightSquare Infotrans",
    location: "Kathmandu, Nepal",
    image: "/8sq.jpeg",
    website: "https://8squarei.com/",
    description: "Developed APIs for a money transfer app serving Malaysia and Singapore using Vue.js and .NET Framework.",
    skills: [<FaVuejs className="text-green-600" />, <SiDotnet className="text-purple-700" />, <PiFileSqlLight className="text-blue-600" />, <FaJs className="text-yellow-300" />]
  },
  {
    year: "01/2019 – 02/2020",
    role: "Software Developer",
    company: "Arhant Solutions",
    location: "Kathmandu, Nepal",
    image: "/arhant.jpeg",
    website: "https://arhant.com.np/",
    description: "Worked on IEnsure, an insurance web app, developing policy features, reports, and an internal chat system with SignalR.",
    skills: [<SiDotnet className="text-purple-700" />, <TbBrandCSharp className="text-purple-600" />, <PiFileSqlLight className="text-blue-600" />,]
  },
  {
    year: "03/2018 – 01/2019",
    role: "Software Developer",
    company: "Chanakya Software",
    location: "Kathmandu, Nepal",
    image: "/chanakya.jpeg",
    website: "https://www.chanakyasoft.com",
    description: "Developed web applications for a DTH service provider and worked on financial software projects.",
    skills: [<SiDotnet className="text-purple-700" />, <FaHtml5 className="text-orange-500" />, <FaJs className="text-yellow-300" />]
  },
  {
    year: "10/2016 – 02/2018",
    role: "Web Developer",
    company: "Social IT World",
    location: "Kathmandu, Nepal",
    image: "/social.jpeg",
    website: "https://www.linkedin.com/company/social-it-world/about/",
    description: "Built and maintained web applications using .NET Core MVC.",
    skills: [<SiDotnet className="text-purple-700" />, <FaJs className="text-yellow-300" />, <SiJquery className="text-blue-400" />, <FaHtml5 className="text-orange-500" />]
  }
];

export const myprojects = [
  {
    id: 1,
    title: "Quiz App",
    description: "A quiz application built with React that allows users to test their knowledge in various programming languages and technologies.",
    image: "/projects/quiz.png",
    websiteUrl: "https://codestackquiz.netlify.app/",
    githubUrl: "https://github.com/pradipbade7/quiz-app",
  },
  {
    id: 2,
    title: "Portfolio",
    description: " Modern, responsive portfolio website built with React, Vite, and Tailwind CSS.",
    image: "/projects/pradip-logo.png",
    websiteUrl: "https://pradipbade.com",
    githubUrl: "https://github.com/pradipbade7/portfolio_tw",
  },
  {
    id: 3,
    title: "GoalTalks",
    description: "GoalTalks – Where football fans unite for live discussions, match tracking, and real-time engagement.",
    image: "/projects/gt.png",
    websiteUrl: "https://goaltalks.com",
    githubUrl: "https://github.com/pradipbade7/GoalTalksComingSoon",
  },
  {
    id: 4,
    title: "17 or Nothing",
    description: "A strategic card game where players draw cards to reach as close to 17 as possible without exceeding it.",
    image: "/projects/17.png",
    websiteUrl: "https://17cardgame.netlify.app/",
    githubUrl: "https://github.com/pradipbade7/card-games",
  },
  {
    id: 5,
    title: "Simple Slot",
    description: "A modern, interactive 5x3 slot machine game with realistic animations, sound effects, and confetti celebrations for big wins.",
    image: "/projects/sevenslot.png",
    websiteUrl: "https://sevenslot.netlify.app/",
    githubUrl: "https://github.com/pradipbade7/simple-slot",
  },
 {
  id: 6,
  title: "T9 Word-Match",
  description: "The T9 Word Matcher converts numeric input from a T9 keypad (like old mobile phones) into possible matching words. Users can type digit sequences and see matching words in real-time. For example, typing '4663' could match 'home' or 'good'.",
  image: "/projects/t9.png",
  websiteUrl: "https://t9solution-1.onrender.com/",
  githubUrl: "https://github.com/pradipbade7/t9solution",
} 
];

export const projects = [
  {
    title: "eRemit Malaysia",
    description:
      "A money transfer platform serving Malaysia and Singapore. Developed APIs for mobile applications, handled backend operations, and improved app functionality.",
    tech: ["Vue.js", ".NET Web API", "MS SQL"],
    image: "/projects/eremit-my.jpeg", // Update with the actual image path
    link: "https://eremit.com.my",
  },
  {
    title: "iEnsure",
    description:
      "It is an insurance software used by companies to manage policies, claims, handle premium payments, KYC verification, and enhancing efficiency in insurance operations.",
    tech: [".NET C#", "Webforms", "MS SQL", "SignalR"],
    image: "/projects/iensure.png", // Update with the actual image path
    link: "https://arhant.com.np/solutions", // Update if hosted
  },
  {
    title: "Shadow Foods",
    description:
      "An online food ordering platform integrated with VivaWallet for payments and Deliverect for menu management, deployed on Azure.",
    tech: [".NET 5", "jQuery", "Bootstrap", "MS SQL"],
    image: "/projects/sf.png", // Update with the actual image path
    link: "https://shadowfoods.com",
  },
  {
    title: "TTMind",
    description:
      "A web application designed to streamline task management and collaboration, offering a user-friendly interface and efficient workflow tracking.",
    tech: ["ASP.NET", "C#", "MS SQL"],
    image: "/projects/ttmind.png", // Update with the actual image path
    link: "https://ttmind.com", // Update if hosted
  },
];
export const skills = {
  expertise: [
    "Building scalable and high-performance web applications",
    "Creating dynamic user experiences with React & Vue.js",
    "Developing robust backend systems with .NET Core & C#",
    "Cloud deployment & DevOps automation (Azure, Docker)",
  ],
  technologies: [
    { name: "Javscript", icon: <SiJavascript />, color: "bg-yellow-500" },
    { name: "React", icon: <FaReact />, color: "bg-blue-400" },
    { name: "Vue.js", icon: <FaVuejs />, color: "bg-green-600" },
    { name: "Typescript", icon: <SiTypescript />, color: "bg-blue-600" },
    { name: ".NET", icon: <SiDotnet />, color: "bg-purple-700" },
    { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-600" },    
    { name: "C#", icon: <SiSharp />, color: "bg-pink-800" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-blue-800" },
    { name: "SQL Server", icon: <FaDatabase />, color: "bg-gray-700" },
  ],
  tools: [
    { name: "Azure", icon: <VscAzure />, color: "bg-blue-700" },
    { name: "Supabase", icon: <SiSupabase />, color: "bg-green-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-blue-400" },
    { name: "Git", icon: <FaGitAlt />, color: "bg-red-500" },
    { name: "Jira", icon: <SiJirasoftware />, color: "bg-blue-600" },
  ]
}
