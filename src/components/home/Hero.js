'use client';

import { motion } from 'framer-motion';
import { useQuickConsult } from '@/context/QuickConsultContext';
import Link from 'next/link';

const Hero = () => {
  const { setShowQuickConsult } = useQuickConsult();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const stats = [
    { 
      number: "500+", 
      label: "Global Clients",
      description: "Trusted by companies worldwide"
    },
    { 
      number: "98%", 
      label: "Success Rate",
      description: "Projects completed successfully"
    },
    { 
      number: "50+", 
      label: "Expert Consultants",
      description: "Specialized industry experts"
    },
    { 
      number: "15+", 
      label: "Years Experience",
      description: "Delivering excellence since 2009"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 lg:px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full bg-purple-200/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-3xl mb-20">
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
            Expert consulting services in management, strategy, and digital transformation. 
            We combine global expertise with local insight to drive your success.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <Link href={'/services'} className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition-all hover:scale-105 font-medium">
              Explore Services
            </Link>
            <button onClick={() => setShowQuickConsult(true)} className="border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all hover:scale-105 font-medium">
              Quick Consult
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <motion.h3 
                className="text-4xl font-bold text-purple-700 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-900 font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;