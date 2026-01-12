import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices and screen sizes.',
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Full Stack Developer & Creative Problem Solver
            </p>
          </motion.div>

          {/* Main Content - Full Page Layout */}
          <motion.div variants={leftVariant}>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-16 rounded-3xl shadow-xl max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 bg-primary/20 dark:bg-blue-500/30 rounded-full blur-2xl"></div>
                    <img
                      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80"
                      alt="Profile"
                      className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 space-y-6">
                  <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed">
                    B.Tech student with a strong interest in Java development and Artificial Intelligence technologies. I enjoy learning Java fundamentals, object-oriented programming, and problem-solving.
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed">
                    Along with Java, I actively explore AI concepts and technologies to understand how intelligent systems work in real-world applications. I am passionate about continuous learning and currently preparing for placements and entry-level IT opportunities.
                  </p>
                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="inline-block px-10 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
                    >
                      Let's Work Together
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
