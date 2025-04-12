// src/components/quick-consult/QuizMap.js
import { motion } from 'framer-motion';

const QuizMap = ({ totalQuestions, answeredQuestions }) => {
  const progress = (answeredQuestions / totalQuestions) * 100;
  const segments = 5;
  const segmentValue = 100 / segments;
  
  return (
    <div className="mb-4">
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ 
            width: `${progress}%`,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        />
        
        {/* Animated pulse at current progress */}
        {progress > 0 && progress < 100 && (
          <motion.div
            className="absolute top-0 h-full w-1 bg-white"
            style={{ left: `${progress}%` }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255,255,255,0.7)',
                '0 0 0 6px rgba(255,255,255,0)',
                '0 0 0 0 rgba(255,255,255,0)'
              ]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        )}
      </div>
      
      <div className="flex justify-between relative">
        {[...Array(segments + 1)].map((_, i) => {
          const segmentProgress = i * segmentValue;
          const isCompleted = progress >= segmentProgress;
          
          return (
            <div key={i} className="flex flex-col items-center relative z-10">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium
                          ${isCompleted ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'}`}
                animate={isCompleted && progress < segmentProgress + segmentValue ? { 
                  scale: [1, 1.1, 1],
                  boxShadow: ["0 0 0 0 rgba(124, 58, 237, 0)", "0 0 0 6px rgba(124, 58, 237, 0.3)", "0 0 0 0 rgba(124, 58, 237, 0)"]
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {i === segments ? '🎯' : i + 1}
              </motion.div>
              
              {/* Completion celebration */}
              {progress >= 100 && i === segments && (
                <motion.div
                  className="absolute -top-1 -right-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">⭐</span>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizMap;