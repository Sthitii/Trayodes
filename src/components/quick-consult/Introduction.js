// src/components/quick-consult/Introduction.js
import { motion } from 'framer-motion';
import { Sparkles, Zap, Lightbulb, Globe2, BookOpen } from 'lucide-react';

const Introduction = ({ onStart, isMobile }) => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Quick Assessment",
      description: "Just a few questions to understand your needs"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "Smart Matching",
      description: "Our algorithm finds your perfect service match"
    },
    {
      icon: <Globe2 className="w-6 h-6 text-green-600" />,
      title: "Global Expertise",
      description: "Access our worldwide network of experts"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Personalized Advice",
      description: "Tailored recommendations just for you"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 md:p-4 flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto">
        <div className="pt-4 mb-6 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <Sparkles className="w-12 h-12 text-purple-600" />
          </motion.div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Discover Your Perfect Solution
        </h2>
        
        <p className="text-gray-600 mb-6 max-w-lg mx-auto text-center text-sm md:text-base">
          Our smart assessment will guide you to the ideal services tailored to your unique needs and goals.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-3 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1 text-center">{feature.title}</h3>
              <p className="text-xs text-gray-500 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-2 sticky bottom-0 bg-white">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-200 transition-all"
          onClick={onStart}
        >
          Begin Your Journey
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Introduction;