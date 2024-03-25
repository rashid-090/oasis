import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        animate={{ rotate: 360 }} // Rotate animation
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }} // Rotate continuously
        className="h-16 w-16 md:w-24  md:h-24 border-t-4 border-primary rounded-full animate-spin"
      ></motion.div>
    </div>
  );
};

export default Preloader;
