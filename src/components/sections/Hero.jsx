import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-20"
      ref={ref}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 border-4 border-purple-500/20 dark:border-purple-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-10 w-24 h-24 border-4 border-blue-500/20 dark:border-blue-400/30"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          animate={{
            rotate: -360,
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
            ],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
            borderRadius: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20">
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="currentColor"
            strokeWidth="2"
            className="text-purple-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          />
        </svg>

        {/* Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
              radial-gradient(at 80% 70%, rgba(168, 85, 247, 0.2) 0px, transparent 50%),
              radial-gradient(at 50% 50%, rgba(236, 72, 153, 0.1) 0px, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-primary dark:text-blue-400 block mt-2">
                Bhuvaneshwaran
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 font-medium"
            >
              Java Learner & AI Enthusiast

            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
            >
              Exploring AI technologies and core concepts
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white font-semibold rounded-full transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6"
            >
              <motion.a
                href="https://github.com/BHUVANESHWARAN-S47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-2xl sm:text-3xl"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/bhuvaneshwaran-s-645b5536a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-2xl sm:text-3xl"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:bhuvaneshwaran.s2005@gmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-2xl sm:text-3xl"
                whileHover={{ scale: 1.2 }}
              >
                <HiMail />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Empty space for cleaner look */}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown className="text-2xl sm:text-3xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
