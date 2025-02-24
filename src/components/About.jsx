import { motion } from 'framer-motion';


const aboutData = {
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
    },
    // Add more education entries...
  ],
  description:`I have over 6 years of experience as a developer, 
  focusing on building scalable applications that perform well and 
  are easy to maintain. I use creative problem-solving to address 
  real-world issues, and as someone interested in AI, I enjoy adding
   smart solutions to improve how applications work and how users 
   interact with them.`,
  tagline: '"Code by day, football stats by night—debugging life one commit and goal at a time." ⚽💻'
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-secondary text-center">About Me</h2>
          {/* <img
            src="/deepseek.png"
            alt="Your Name"
            className="mb-6 object-fit mx-auto rounded-lg"></img>
          <p className="text-lg mb-6">
              {aboutData.tagline}
              
          </p> */}
          {/* Core Expertise Section */}
          <div className="text-center">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {aboutData.description}
            </p>
          </div>
          {/* <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-center">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {aboutData.education.map((edu, index) => (

                <div className="flex flex-col md:flex-row items-center md:items-start mb-8 md:mb-0">
                  <div className="md:w-1/3 flex-shrink-0">
                    <img
                      src={edu.image} // Update with the actual image path
                      alt={edu.institution}
                      className="rounded-lg shadow-lg h-full object-cover"
                    />
                  </div>
                  <ul className="md:w-2/3 space-y-4 md:pl-8 flex-grow">
                    <li>
                      <p className="text-secondary font-medium">{edu.year}</p>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-gray-400">{edu.institution}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>

  );
}