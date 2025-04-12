// src/components/quick-consult/QuestionCard.js
import { motion } from 'framer-motion';

const QuestionCard = ({ question, onAnswer, currentStep, totalSteps }) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl"
    >
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{question.question}</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 md:p-5 border border-gray-200 rounded-lg hover:border-purple-300 
                     transition-all text-left group bg-white hover:bg-purple-50 shadow-sm"
            onClick={() => onAnswer(question.id, option)}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3 mt-0.5">{option.icon}</span>
              <div>
                <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                  {option.text}
                </h4>
                {option.description && (
                  <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;