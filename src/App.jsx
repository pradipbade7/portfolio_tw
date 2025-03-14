import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import MiniProjects from './pages/MiniProjects';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  function ExternalRedirect({ url }) {
    window.location.href = url;
    return null;
  }
  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <Loading />
        ) : (
          <div className="min-h-screen bg-primary text-white">
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/miniprojects" element={<MiniProjects />} />
                <Route path="/17game" element={<ExternalRedirect url="https://17cardgame.netlify.app/" />} />
              </Routes>
            </motion.main>
            <footer className="py-1 md:py-4 text-sm text-center text-gray-400 bg-green-800">
              <p>&copy; <b>Pradip Bade</b>. Created with the help of <b>Copilot AI.</b></p>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;