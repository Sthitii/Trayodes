// src/components/quick-consult/Results.js
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';

const Results = ({ answers }) => {
  // Calculate recommended service based on answers
  const recommendedService = {
    title: "Strategy Consulting",
    description: "Based on your answers, we recommend focusing on strategic planning and market expansion.",
    badge: "Strategic Innovator",
    nextSteps: [
      "Schedule a strategy session",
      "Review our case studies",
      "Meet our strategy team"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-12"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Trophy className="w-10 h-10 text-purple-600" />
        </motion.div>
        
        <h2 className="text-3xl font-bold mb-4">Your Perfect Match!</h2>
        <p className="text-gray-600">
          We've analyzed your responses and found the ideal solution for your business needs.
        </p>
      </div>

      <div className="bg-purple-50 rounded-xl p-8 mb-8">
        <div className="bg-purple-600 text-white px-4 py-2 rounded-full inline-block mb-4">
          {recommendedService.badge}
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{recommendedService.title}</h3>
        <p className="text-gray-600 mb-6">{recommendedService.description}</p>

        <div className="space-y-4">
          {recommendedService.nextSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center text-purple-600"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              {step}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
        >
          Schedule Your Consultation
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Results;