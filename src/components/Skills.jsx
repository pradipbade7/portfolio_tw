import { motion } from "framer-motion";
import { skills } from "../assets/data";

export default function Skills() {


  return (
    <section id="skills" className="pb-20 bg-primary/50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold mb-12 text-secondary text-center"></h2>

         */}

        {/* Technologies I Use */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Expertise (Techstacks and Tools)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.technologies.map(({ name, icon, color }) => (
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
            {skills.tools.map(({ name, icon, color }) => (
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
