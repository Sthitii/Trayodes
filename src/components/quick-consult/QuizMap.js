// src/components/quick-consult/QuizMap.js
import { motion } from 'framer-motion';

const QuizMap = ({ totalQuestions, currentQuestion }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-sm text-purple-600 font-medium">
          {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}% Complete
        </span>
      </div>
      
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-purple-600"
          initial={{ width: 0 }}
          animate={{ 
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%` 
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="mt-4 flex justify-between">
        {[...Array(totalQuestions)].map((_, index) => (
          <motion.div
            key={index}
            className={`w-10 h-10 rounded-full flex items-center justify-center
                      ${index <= currentQuestion ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            animate={index === currentQuestion ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {index + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuizMap;