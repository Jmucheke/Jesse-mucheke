import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/Jmucheke',
      title: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/jesse-mucheke-496533213/',
      title: 'LinkedIn',
    },
    {
      icon: <FaEnvelope />,
      link: 'mailto:muchekejesse@gmail.com',
      title: 'Email',
    },
    {
      icon: <FaPhone />,
      link: 'tel:+254700827215',
      title: 'Email',
    },
  ];

  return (
    <footer className="w-full bg-white dark:bg-backgroundDark text-textMainLight dark:text-textMainDark py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative"
      >
        {/* Name or Logo */}
        <div className="text-lg font-semibold order-1 md:order-1">
          Jesse Mucheke
        </div>

        {/* Center: Copyright */}
        <div className="text-sm text-textMutedLight dark:text-textMutedDark order-3 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
          © {new Date().getFullYear()} Jesse Mucheke. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl order-2 md:order-3">
          {socialLinks.map(({ icon, link, title }, index) => (
            <motion.a
              key={index}
              href={link}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit focus:outline-none focus:ring-0"
              whileHover={{
                scale: [1, 1.1, 1.1, 1.05, 1.05, 1],
                rotate: [0, -10, 10, -6, 6, -3, 3, 0],
                transition: { duration: 0.6 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>

  );
};

export default Footer;
