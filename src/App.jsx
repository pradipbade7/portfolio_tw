import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
       <Loading />
      ) : (
        <div className="min-h-screen bg-primary text-white">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />

            <Projects />
            <Experience />
            

            <Contact />
          </motion.main>
          <footer className="py-4 md:py-6 text-center text-gray-400 bg-green-800">
            <p>&copy; <b>Pradip Bade</b>. Created with the help of <b>Copilot AI.</b></p>
          </footer>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;