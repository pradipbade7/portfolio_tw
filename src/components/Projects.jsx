import { motion } from 'framer-motion';

const projects = [
  {
    title: "eRemit Malaysia",
    description:
      "A money transfer platform serving Malaysia and Singapore. Developed APIs for mobile applications, handled backend operations, and improved app functionality.",
    tech: ["Vue.js", ".NET Web API", "SQL Server"],
    image: "/projects/eremit-my.jpeg", // Update with the actual image path
    link: "https://eremit.com.my",
  },
  {
    title: "GoalTalks",
    description:
      "I am working on a football web app for live discussions and fan engagement, creating a strong football community while incorporating AI features to enhance the experience.",
    tech: ["React", ".NET C#", "PostgreSQL", "SignalR"],
    image: "/projects/gt.png", // Update with the actual image path
    link: "https://goaltalks.com", // Update if hosted
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
    tech: ["ASP.NET", "C#", "SQL Server"],
    image: "/projects/ttmind.png", // Update with the actual image path
    link: "https://ttmind.com", // Update if hosted
  },
];


export default function Projects() {
  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-secondary text-center">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg max-w-xs"
            >
              <div className="flex justify-center items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="bg-white h-48 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>

              <div className="p-6">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-center  transform transition-transform duration-300 hover:scale-105">{project.title}</h3>
                </a>
                <p className="text-gray-400 mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-green-700 font-bold text-secondary rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
