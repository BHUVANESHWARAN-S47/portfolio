import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: 'easeOut', 
        delay: index * 0.03
      },
    },
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" ref={ref}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y }}
        >
          <div
            style={{
              background: `
                radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 70%, rgba(168, 85, 247, 0.2) 0px, transparent 50%),
                radial-gradient(at 50% 50%, rgba(236, 72, 153, 0.1) 0px, transparent 50%)
              `,
              height: '100%',
            }}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills by Category - Image Card Layout */}
          <div className="space-y-12 sm:space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={cardVariants(skillIndex)}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-white dark:bg-gray-700 p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-blue-400 group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[180px]">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-full h-full object-contain transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[32px] flex items-center justify-center">
                          {skill.name}
                        </h4>
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < Math.ceil(skill.level / 20)
                                  ? 'bg-primary dark:bg-blue-400'
                                  : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
