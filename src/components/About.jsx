import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import aboutAnimation from '../assets/about-me.json'; 


const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const sectionInView = useInView(sectionRef, { threshold: 0.3 });
  const titleInView = useInView(titleRef, { threshold: 0.3 });
  const textInView = useInView(textRef, { threshold: 0.3 });

  const sectionControls = useAnimation();
  const titleControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    sectionControls.start(sectionInView ? 'visible' : 'hidden');
  }, [sectionInView, sectionControls]);

  useEffect(() => {
    titleControls.start(titleInView ? 'visible' : 'hidden');
  }, [titleInView, titleControls]);

  useEffect(() => {
    textControls.start(textInView ? 'visible' : 'hidden');
  }, [textInView, textControls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      variants={variants}
      initial="hidden"
      animate={sectionControls}
      className="bg-surfaceLight dark:bg-surfaceDark text-textMainLight dark:text-textMainDark py-16 px-6"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          ref={titleRef}
          variants={variants}
          initial="hidden"
          animate={titleControls}
          className="text-3xl font-semibold mb-6 text-center"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Illustration or Image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Lottie
                animationData={aboutAnimation}
                loop={true}
                className="w-64 h-64 md:w-80 md:h-80"
              />
            </motion.div>
            
          </div>

          {/* Right Side: Bio */}
          <motion.div
            ref={textRef}
            variants={variants}
            initial="hidden"
            animate={textControls}
          >
            <p className="text-textMutedLight dark:text-textMutedDark leading-relaxed">
              I'm a data analyst with a foundation in software engineering and a deep curiosity for solving problems through data. I enjoy working at the intersection of analytics and technology, transforming complex datasets into clear, impactful insights that support informed decision-making.
              <br /><br />
              Skilled in tools like Power BI, SQL, and Python, I bring a blend of analytical thinking and technical adaptability to every challenge. I'm always eager to learn, collaborate with others, and build solutions that make a real difference.
            </p>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

