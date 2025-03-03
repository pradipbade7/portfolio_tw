import { motion } from 'framer-motion';
import { aboutData } from '../assets/data';

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
          <div className="text-center">
            <p className="text-md text-gray-300 max-w-3xl mx-auto">
              {aboutData.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}