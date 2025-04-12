// src/components/quick-consult/ServiceDetails.js
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Check,
  Mail,
  Clock,
  ChevronRight,
  Users,
  Zap,
} from "lucide-react";

const ServiceDetails = ({ service, onBack, onSchedule, isMobile }) => {
  const benefits = [
    "Expert consultation with industry leaders",
    "Personalized action plan",
    "Follow-up support",
    "Comprehensive resource package",
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "60-minute discovery session to understand your needs",
    },
    {
      title: "Custom Proposal",
      description: "Tailored plan with deliverables and timeline",
    },
    {
      title: "Implementation",
      description: "Execution with regular progress updates",
    },
    {
      title: "Review & Follow-up",
      description: "Ensuring continued success",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full"
    >
      <div className="flex-1 overflow-y-auto p-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-purple-600 mb-6 transition-colors text-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to results
        </button>

        <div className="flex flex-col gap-8 mb-8">
          <div>
            <div
              className={`${service.category.color} px-3 py-1 rounded-full inline-flex items-center mb-4`}
            >
              {service.category.icon}
              <span className="ml-2 text-sm font-medium">
                {service.category.title}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600 text-lg">{service.description}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5">
            <h3 className="font-bold text-xl mb-4">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-600 mr-2" />
              Benefits
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-3 rounded-lg shadow-xs"
                >
                  <Check className="w-5 h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              Our Process
            </h3>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {service.caseStudy && (
          <div className="bg-gray-50 rounded-xl p-5 mb-8">
            <h3 className="font-bold text-xl mb-4">Success Story</h3>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-xs">
                <h4 className="font-bold text-lg mb-1">
                  {service.caseStudy.title}
                </h4>
                <p className="text-purple-600 font-medium">
                  {service.caseStudy.result}
                </p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  {service.caseStudy.description ||
                    "Our team helped achieve remarkable results through tailored solutions."}
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors flex items-center text-sm">
                  Read full case study <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 border-t border-gray-200 bg-white p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onSchedule(service, service.category)}
            className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {isMobile ? "Schedule Now" : "Schedule Consultation"}
          </button>

          <button className="flex-1 border border-purple-600 text-purple-600 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            {isMobile ? "Contact Us" : "Contact Advisor"}
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center text-gray-500 text-xs">
          <Clock className="w-4 h-4 mr-1" />
          <span>Average response time: 24 hours</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
