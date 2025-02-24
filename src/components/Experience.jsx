import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaVuejs, FaDatabase, FaMicrosoft, FaHtml5, FaCss3, FaJs, FaCogs } from 'react-icons/fa';
import { SiDotnet, SiPostgresql, SiSharp, SiTypescript, SiBootstrap, SiJquery } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

import { PiFileSqlLight } from "react-icons/pi";

import { VscAzure } from "react-icons/vsc";

const experienceData = [
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

export default function Experience() {
  return (
    <section id="experience" className="pb-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12 text-secondary">Companies</h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block p-6 rounded-xl shadow-lg bg-gray-800/80 transition-all 
              transform hover:scale-105 hover:bg-green-800"
            >
              <div className="flex items-center gap-4">
                <img src={exp.image} alt={exp.company} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-gray-300">{exp.company} • {exp.year}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2 text-gray-200 text-xl justify-end">
                {exp.skills.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
