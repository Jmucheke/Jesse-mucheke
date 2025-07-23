import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/data-analytics.json';




const Home = () => {

  const [engineReady, setEngineReady] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect theme dynamically
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme(); // Initial check

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
      setEngineReady(true);
    });
  }, []);


  // Particle options with dark/light toggle
  const particleOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: 'transparent' },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // 'grab' or 'bubble' are also fun!
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },

      color: {
        value: isDark ? '#ffffff' : '#4F46E5', // primaryDark / primaryLight
      },
      links: {
        enable: true,
        distance: 150,
        color: isDark ? '#ffffff' : '#4F46E5',
        opacity: 0.4,
        width: 1,
      },

      collisions: {
        enable: true,
      },
      move: {
        enable: true,
        direction: 'none',
        speed: 1,
        outModes: {
          default: 'bounce',
        },
      },
      shape: {
        type: 'circle', // 'triangle', 'edge', 'polygon', etc.
      },
      size: {
        value: { min: 3, max: 6 },
      },
      opacity: {
        value: 0.7,
      },
    },
    detectRetina: true,
  };


  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Jesse_Mucheke_CV.pdf';
    link.download = 'Jesse_Mucheke_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-backgroundLight dark:bg-backgroundDark transition-colors duration-700">
      {/* Particle background */}
      {engineReady && (
        <Particles
          className="absolute inset-0 z-0"
          id="tsparticles"
          options={particleOptions}
        />
      )}

      {/* Main content */}

      {/* <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between h-full max-w-6xl mx-auto px-4 py-12"> */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
        {/* Text & buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >


          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-xl md:text-3xl font-regular text-black text-textMainLight dark:text-textMainDark"
          >
            Hi, I’m Jesse Mucheke...
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryLight dark:text-primaryDark leading-tight"
          >
            Data Analyst
          </motion.h2>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-textMutedLight dark:text-textMutedDark mt-4 max-w-xl mx-auto md:mx-0"
          >
            I build data solutions that drive smarter business decisions through impactful stories and visuals.
          </motion.p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="bg-primaryLight text-white dark:bg-primaryDark px-6 py-3 rounded shadow hover:opacity-90 transition-opacity duration-300"
            >
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
              className="border border-primaryLight text-primaryLight dark:text-primaryDark dark:border-primaryDark px-6 py-3 rounded hover:bg-primaryLight hover:text-white hover:dark:bg-primaryDark hover:dark:text-white transition-colors duration-300"
            >
              Explore My Work
            </motion.button>
          </div>
        </motion.div>

        {/* Lottie animation */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
          <Lottie animationData={animationData} loop className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain" />
        </div>

      </div>
    </section>
  );
};

export default Home;

