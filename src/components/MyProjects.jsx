import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { myprojects } from "../assets/data";

export default function MyProjects() {
  const [openInfoId, setOpenInfoId] = useState(null);

  const toggleInfoBox = (projectId) => {
    setOpenInfoId(openInfoId === projectId ? null : projectId);
  };

  return (
    <section className="py-20 mx-5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">
          My Projects
        </h2>
        <div className="grid justify-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {myprojects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs"
              >
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 md:h-40 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </a>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 text-center">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center text-center">
                    

                    <div className="">
                      <FaInfoCircle
                        onClick={() => toggleInfoBox(project.id)}
                        className="text-lg text-green-600 hover:text-white transition-colors duration-300 cursor-pointer"
                      />
                      {openInfoId === project.id && (
                        <>
                          {/* Backdrop overlay */}
                          <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => toggleInfoBox(null)}
                          ></div>

                          {/* Modal */}
                          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-800 text-white p-5 rounded-lg shadow-xl border border-gray-700 max-w-md w-11/12">
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="font-medium te text-lg">
                                {project.title}
                              </h4>
                              <button
                                onClick={() => toggleInfoBox(null)}
                                className="text-gray-400 hover:text-white"
                              >
                                <FaTimes className="text-xl" />
                              </button>
                            </div>
                            <p className="text-sm">{project.description}</p>
                          </div>
                        </>
                      )}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}

                    
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
                <div className="flex flex-wrap justify-center gap-2 my-2 flex-center">
                  {project.techstack?.map(({ name, icon, color }) => (
                    <div
                      key={name}
                      className={`flex items-center gap-2 px-2 py-1 text-xs text-white font-semibold rounded-full ${color} transition-transform transform hover:scale-105`}
                    >
                      {icon} {name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
