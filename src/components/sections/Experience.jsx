import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "M. Kumarasamy College of Engineering",
    period: "Present",
    description: "Focused on AI fundamentals, Machine Learning, and Big Data Analytics."
  },
  {
    id: 2,
    degree: "Higher Secondary (State Board)",
    institution: "Kandasamy Kandar Higher Secondary School",
    period: "Completed",
    description: "Specialized in Computer Science and Mathematics."
  }
];

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" ref={ref}>
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              My educational background and academic achievements
            </p>
          </motion.div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

              <div className="space-y-8 sm:space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary dark:bg-blue-400 rounded-full border-4 border-gray-50 dark:border-gray-800 transform -translate-x-1/2 z-10"></div>

                    {/* Content Card */}
                    <div
                      className={`ml-20 md:ml-0 md:w-5/12 ${
                        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                      }`}
                    >
                      <motion.div
                        className="bg-white dark:bg-gray-700 p-6 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-blue-400 transition-all hover:shadow-xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center mb-3">
                          <FaGraduationCap className="text-primary dark:text-blue-400 text-2xl mr-3" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{edu.period}</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-primary dark:text-blue-400 font-semibold mb-3">{edu.institution}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
