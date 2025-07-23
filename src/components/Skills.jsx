import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiMysql, SiPowerbi, SiMicrosoftexcel, SiTableau,
  SiReact, SiTailwindcss, SiFramer, SiChartdotjs, SiJavascript, SiNodedotjs
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <SiPython />, color: 'bg-yellow-300' },
  { name: 'SQL', icon: <SiMysql />, color: 'bg-blue-400' },
  { name: 'Power BI', icon: <SiPowerbi />, color: 'bg-yellow-500' },
  { name: 'Excel', icon: <SiMicrosoftexcel />, color: 'bg-green-500' },
  { name: 'Tableau', icon: <SiTableau />, color: 'bg-indigo-500' },
  { name: 'React', icon: <SiReact />, color: 'bg-cyan-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-teal-400' },
  { name: 'Framer Motion', icon: <SiFramer />, color: 'bg-pink-400' },
  { name: 'Chart.js', icon: <SiChartdotjs />, color: 'bg-purple-400' },
  // { name: 'D3.js', icon: <SiD3dotjs />, color: 'bg-orange-400' },
  {name: 'JavaScript', icon: <SiJavascript />, color: 'bg-orange-400' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-green-600' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-surfaceLight dark:bg-surfaceDark text-textMainLight dark:text-textMainDark py-16 px-6"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`rounded-lg shadow-md p-6 text-center font-medium text-white ${skill.color} hover:scale-105 transform transition duration-300`}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
