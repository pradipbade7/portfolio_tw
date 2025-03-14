import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './components/Loading';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import MiniProjects from './pages/MiniProjects';

function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  // Return a loading indicator while redirecting
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-xl font-semibold">Redirecting...</div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
                <Route path="/miniprojects" element={<MiniProjects />} />
                <Route path="/17game" element={<ExternalRedirect url="https://17cardgame.netlify.app/" />} />
                <Route path="*" element={<NotFound />} />
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