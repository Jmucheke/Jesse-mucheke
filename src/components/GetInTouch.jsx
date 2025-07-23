import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';


const FloatingInput = ({ id, name, placeholder, type = "text", value, setValue }) => {
  const Tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="relative w-full">
      <Tag
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        rows={type === 'textarea' ? 4 : undefined}
        className={`
          peer w-full px-3 py-3
          bg-[#F9FAFB] dark:bg-backgroundDark
          text-textMainLight dark:text-textMainDark
          border border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-primaryLight dark:focus:ring-primaryDark
          rounded resize-none
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-3 top-3 text-base
          text-textMutedLight dark:text-textMutedDark
          pointer-events-none
          transition-opacity duration-400 ease-in-out
          ${value ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {placeholder}
      </label>
    </div>
  );
};




const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/myzpekev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Form submission failed');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surfaceLight dark:bg-surfaceDark text-textMainLight dark:text-textMainDark py-16 px-6">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FloatingInput id="name" name="name" placeholder="Your Name" value={name} setValue={setName} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <FloatingInput id="email" name="email" type="email" placeholder="Your Email" value={email} setValue={setEmail} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FloatingInput id="message" name="message" type="textarea" placeholder="Your Message" value={message} setValue={setMessage} />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-primaryLight dark:bg-primaryDark text-white px-6 py-3 rounded hover:bg-secondaryLight dark:hover:bg-secondaryDark transition disabled:opacity-60"
            whileHover={{ scale: isSubmitting ? 1.0 : 1.05 }}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin" />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </motion.button>

          {/* Feedback Message */}
          <AnimatePresence>
            {submitted && (
              <motion.p
                className="text-center text-successLight dark:text-successDark mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Message sent! I’ll get back to you soon.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
