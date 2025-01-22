"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Introduction from "./Introduction";
import QuizMap from "./QuizMap";
import QuestionCard from "./QuestionCard";
import Results from "./Results";
import { X } from "lucide-react";

const QuickConsult = ({ onClose }) => {
  const [stage, setStage] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const quizQuestions = [
    {
      id: 1,
      question: "What's your primary business goal for the next year?",
      options: [
        {
          id: "growth",
          text: "Accelerate Business Growth",
          icon: "🚀",
          points: { strategy: 3, marketing: 2, management: 1 },
        },
        {
          id: "efficiency",
          text: "Improve Operational Efficiency",
          icon: "⚙️",
          points: { management: 3, process: 2, it: 1 },
        },
        {
          id: "innovation",
          text: "Drive Digital Innovation",
          icon: "💡",
          points: { it: 3, strategy: 2, process: 1 },
        },
        {
          id: "market",
          text: "Enter New Markets",
          icon: "🌍",
          points: { marketing: 3, strategy: 2, venture: 1 },
        },
      ],
    },
    // Add more questions...
  ];

  const handleStart = () => {
    setStage("quiz");
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((curr) => curr + 1);
    } else {
      // Calculate result
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setStage("result");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white p-3 
                   hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <AnimatePresence mode="wait">
          {stage === "intro" && <Introduction onStart={handleStart} />}

          {stage === "quiz" && (
            <div className="p-8">
              <QuizMap
                totalQuestions={quizQuestions.length}
                currentQuestion={currentQuestion}
              />
              <QuestionCard
                question={quizQuestions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </div>
          )}

          {stage === "result" && <Results answers={answers} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuickConsult;
