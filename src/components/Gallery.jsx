import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/project1.png',
  '/images/project2.png',
  '/images/project3.png',
  '/images/project4.png',
  '/images/project5.png',
  '/images/project6.png',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-surfaceLight dark:bg-surfaceDark text-textMainLight dark:text-textMainDark py-16 px-6">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Gallery
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-backgroundDark overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
