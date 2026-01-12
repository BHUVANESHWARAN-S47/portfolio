import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaAws, FaFigma, FaVuejs, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiMysql, SiFirebase } from 'react-icons/si';
import { skillCategories } from '../../data/skills';

const skillIcons = {
  'React': <FaReact />,
  'JavaScript/TypeScript': <SiJavascript />,
  'HTML/CSS': <FaCss3Alt />,
  'Tailwind CSS': <SiTailwindcss />,
  'Next.js': <SiNextdotjs />,
  'Vue.js': <FaVuejs />,
  'Node.js': <FaNodeJs />,
  'Express': <SiExpress />,
  'Python': <FaPython />,
  'RESTful APIs': <FaNodeJs />,
  'GraphQL': <SiGraphql />,
  'MongoDB': <SiMongodb />,
  'PostgreSQL': <SiPostgresql />,
  'MySQL': <SiMysql />,
  'Firebase': <SiFirebase />,
  'Git/GitHub': <FaGitAlt />,
  'Docker': <FaDocker />,
  'AWS': <FaAws />,
  'CI/CD': <FaGitAlt />,
  'Figma': <FaFigma />
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const cardVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: (index % 6) * 0.1 },
    },
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" ref={ref}>
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills by Category - Icon Card Layout */}
          <div className="space-y-8 sm:space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={cardVariants(skillIndex)}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                      <div className="relative bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-blue-400 transition-all flex flex-col items-center justify-center text-center h-full">
                        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-primary dark:text-blue-400 group-hover:scale-125 transition-transform">
                          {skillIcons[skill.name] || <FaDatabase />}
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                          {skill.name}
                        </h4>
                        <div className="flex items-center space-x-1">
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
