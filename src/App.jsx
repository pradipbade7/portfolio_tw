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
              style={{ minHeight: 'calc(100vh - 2.5rem)' }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myprojects" element={<MiniProjects />} />
                <Route path="/17game" element={<ExternalRedirect url="https://17cardgame.netlify.app/" />} />
                <Route path="/sevenslot" element={<ExternalRedirect url="https://sevenslot.netlify.app/" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.main>
            <footer className="py-1 md:py-2 text-sm text-center text-gray-200 bg-green-800">
            <p>&copy; 2025 <b>Pradip Bade</b> | All Rights Reserved</p>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;