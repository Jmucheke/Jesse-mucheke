import React, { lazy, useMemo } from 'react';
import { motion } from 'framer-motion';
import aboutAnimation from '../assets/about-me.json';

const Lottie = lazy(() => import('lottie-react'));

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-surfaceLight dark:bg-surfaceDark text-textMainLight dark:text-textMainDark py-16 px-6"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center"
          variants={variants}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <Lottie
              animationData={aboutAnimation}
              loop
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-textMutedLight dark:text-textMutedDark leading-relaxed">
              I'm a data analyst with a foundation in software engineering and a deep curiosity for solving problems through data. I enjoy working at the intersection of analytics and technology, transforming complex datasets into clear, impactful insights that support informed decision-making.
              <br /><br />
              Skilled in tools like Power BI, SQL, and Python, I bring a blend of analytical thinking and technical adaptability to every challenge. I'm always eager to learn, collaborate with others, and build solutions that make a real difference.
              <br /><br />
              When I’m not working on a data project, you’ll likely find me at a piano or playing guitar, it’s how I recharge and keep my mind sharp. That creative outlet helps me refocus and approach problems with fresh perspective.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
