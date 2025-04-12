'use client';

import { motion } from 'framer-motion';
import { useQuickConsult } from '@/context/QuickConsultContext';

import Services from '@/components/home/Services';

const Hero = () => {
  const { setShowQuickConsult } = useQuickConsult();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative pt-24 px-4 lg:px-8 ">
      <div className="absolute">
        <motion.div
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ 
            rotate: 360,
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full z-0"
        >
          <div className="w-full h-full bg-purple-200/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            Transform Your Business Vision Into Reality
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            Specializing in venture capital investments & private equity, while offering comprehensive student services for international education journeys. Our consulting expertise spans management, strategy, AI adoption and digital transformation - combining global insights with local understanding to drive growth and success at every stage.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <button 
              onClick={() => setShowQuickConsult(true)} 
              className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition-all hover:scale-105 font-medium mt-6"
            >
              Quick Consult
            </button>
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;