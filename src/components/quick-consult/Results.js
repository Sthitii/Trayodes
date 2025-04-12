// src/components/quick-consult/Results.js
import { motion } from "framer-motion";
import {
  Trophy,
  ArrowRight,
  ChevronRight,
  Calendar,
  Check,
  Sparkles,
} from "lucide-react";

const Results = ({ recommendations, onViewService, onRestart, onSchedule }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 md:p-8 flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Trophy className="w-10 h-10 text-purple-600" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            We Found Your Matches!
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
            Based on your responses, here are the services that best fit your
            needs.
          </p>
        </div>

        <div className="mb-8">
          <div
            className={`${recommendations.category.color} px-4 py-2 rounded-full inline-flex items-center mb-6`}
          >
            {recommendations.category.icon}
            <span className="ml-2 font-medium">
              {recommendations.category.title}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-4">
            {recommendations.category.description}
          </h3>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {recommendations.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-lg">{service.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    onViewService(
                      service.id,
                      recommendations.category.title.toLowerCase()
                    )
                  }
                  className="w-full flex items-center justify-between text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm"
                >
                  <span>View details</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* {recommendations.services.some(s => s.caseStudy) && (
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.services.filter(s => s.caseStudy).slice(0,2).map((service, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-xs border border-gray-100">
                  <h4 className="font-semibold mb-1">{service.caseStudy.title}</h4>
                  <p className="text-purple-600 text-sm font-medium">{service.caseStudy.result}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>

      <div className="sticky bottom-0 pt-4 pb-2 bg-white border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:shadow-md transition-all flex items-center justify-center text-sm md:text-base"
            onClick={() => {
              onSchedule(recommendations.services[0], recommendations.category);
            }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRestart}
            className="border border-purple-600 text-purple-600 px-5 py-3 rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm md:text-base"
          >
            Retake Assessment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Results;
