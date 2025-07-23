import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';
import debounce from 'lodash.debounce';

const FloatingInput = React.memo(({ id, name, placeholder, type = "text", value, setValue }) => {
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
        className="peer w-full px-3 py-3 bg-[#F9FAFB] dark:bg-backgroundDark text-textMainLight dark:text-textMainDark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryLight dark:focus:ring-primaryDark rounded resize-none"
        aria-required="true"
        aria-label={placeholder}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 top-3 text-base text-textMutedLight dark:text-textMutedDark pointer-events-none transition-opacity duration-400 ease-in-out ${value ? 'opacity-0' : 'opacity-100'}`}
      >
        {placeholder}
      </label>
    </div>
  );
});

const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const honeypotRef = useRef(null);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const debouncedSubmit = useCallback(
    debounce(async (formData) => {
      try {
        const res = await fetch('https://formspree.io/f/myzpekev', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
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
    }, 1000),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (honeypotRef.current?.value) {
      console.warn('Bot detected');
      setIsSubmitting(false);
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    debouncedSubmit({ name, email, message });
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

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6" noValidate>
          {/* Honeypot Field */}
          <input
            type="text"
            name="_gotcha"
            ref={honeypotRef}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <FloatingInput id="name" name="name" placeholder="Your Name" value={name} setValue={setName} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <FloatingInput id="email" name="email" type="email" placeholder="Your Email" value={email} setValue={setEmail} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <FloatingInput id="message" name="message" type="textarea" placeholder="Your Message" value={message} setValue={setMessage} />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-primaryLight dark:bg-primaryDark text-white px-6 py-3 rounded hover:bg-secondaryLight dark:hover:bg-secondaryDark transition disabled:opacity-60"
            whileHover={{ scale: isSubmitting ? 1.0 : 1.05 }}
            aria-busy={isSubmitting}
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

          <AnimatePresence>
            {submitted && (
              <motion.p
                className="text-center text-successLight dark:text-successDark mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                aria-live="polite"
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
