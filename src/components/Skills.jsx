import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiSharp,
  SiDotnet,
  SiPostgresql,
  SiJirasoftware,
  SiJavascript
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function Skills() {
  const expertise = [
    "Building scalable and high-performance web applications",
    "Creating dynamic user experiences with React & Vue.js",
    "Developing robust backend systems with .NET Core & C#",
    "Cloud deployment & DevOps automation (Azure, Docker)",
  ];

  const technologies = [
    { name: "Javscript", icon: <SiJavascript />, color: "bg-yellow-500" },
    { name: "React", icon: <FaReact />, color: "bg-blue-400" },
    { name: "Vue.js", icon: <FaVuejs />, color: "bg-green-600" },
    { name: ".NET Core", icon: <SiDotnet />, color: "bg-purple-700" },
    { name: "C#", icon: <SiSharp />, color: "bg-pink-800" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-blue-800" },
    { name: "SQL Server", icon: <FaDatabase />, color: "bg-gray-700" },
  ];

  const tools = [
    { name: "Azure", icon: <VscAzure />, color: "bg-blue-700" },
    { name: "Docker", icon: <FaDocker />, color: "bg-blue-500" },
    { name: "Git", icon: <FaGitAlt />, color: "bg-red-500" },
    { name: "Jira", icon: <SiJirasoftware />, color: "bg-blue-600" },
  ];

  return (
    <section id="skills" className="pb-20 bg-primary/50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold mb-12 text-secondary text-center"></h2>

         */}

        {/* Technologies I Use */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Expertise (Techstacks and Tools)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map(({ name, icon, color }) => (
              <motion.div
                key={name}
                className={`flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-full ${color} transition-transform transform hover:scale-105`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {icon} {name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map(({ name, icon, color }) => (
              <motion.div
                key={name}
                className={`flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-full ${color} transition-transform transform hover:scale-105`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {icon} {name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
