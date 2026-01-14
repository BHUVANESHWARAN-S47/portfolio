import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { motion, useScroll } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const [showFloatingToggle, setShowFloatingToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowFloatingToggle(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Floating Theme Toggle for Mobile */}
      {showFloatingToggle && (
        <motion.button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 z-40 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </motion.button>
      )}

      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
