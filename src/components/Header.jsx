import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 py-6 text-center shadow-lg rounded-b-3xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg font-[Fredoka] tracking-wider">
        📚 Dictionary Builder for Kids!
      </h1>
      <p className="mt-2 text-lg md:text-xl text-white font-light">
        Learn new words the fun way ✨
      </p>
    </motion.header>
  );
}
