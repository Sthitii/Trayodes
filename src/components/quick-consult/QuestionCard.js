// src/components/quick-consult/QuestionCard.js
import { motion } from 'framer-motion';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white rounded-xl p-8"
    >
      <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-600 
                     transition-colors text-left group"
            onClick={() => onAnswer(question.id, option)}
          >
            <span className="text-3xl mb-4 block">{option.icon}</span>
            <h4 className="font-medium group-hover:text-purple-600 transition-colors">
              {option.text}
            </h4>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;