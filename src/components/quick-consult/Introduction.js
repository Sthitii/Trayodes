// src/components/quick-consult/Introduction.js
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Introduction = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-12 text-center"
    >
      <div className="pt-4 mb-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block"
        >
          <Sparkles className="w-16 h-16 text-purple-600" />
        </motion.div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">
        Discover Your Perfect Business Solution
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        Take our quick quiz to find the consulting services that best match your business needs. 
        We'll analyze your goals and challenges to provide tailored recommendations.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
        onClick={onStart}
      >
        Begin Your Journey
      </motion.button>
    </motion.div>
  );
};

export default Introduction;