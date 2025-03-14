import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import { myprojects } from '../assets/data';


export default function MyProjects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 mx-5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">Mini Projects</h2>
        <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <AnimatePresence>
            {myprojects.map((project, index) => (
              (index < 6 || showAll) && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 md:h-40 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{project.title}</h3>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {myprojects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-00"
            >
              {showAll ? (
                <>Show Less <FaChevronUp className="text-sm" /></>
              ) : (
                <>View All Projects <FaChevronDown className="text-sm" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}