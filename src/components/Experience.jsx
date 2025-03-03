import { motion } from 'framer-motion';

import { experienceData } from '../assets/data';



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
