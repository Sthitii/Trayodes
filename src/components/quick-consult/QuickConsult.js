// src/components/quick-consult/QuickConsult.js
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Introduction from "./Introduction";
import QuestionCard from "./QuestionCard";
import Results from "./Results";
import ServiceDetails from "./ServiceDetails";
import ConsultationForm from "./ConsultationForm";
import {
  X,
  ArrowLeft,
  GraduationCap,
  FileText,
  Globe,
  Home,
  Briefcase,
  UserCheck,
  Rocket,
  Target,
  BarChart,
  Cpu,
  Users,
  Code,
  Cloud,
  Shield,
  ChartPie,
  TrendingUp,
  PieChart,
} from "lucide-react";

import allQuestions from "./allquestions";

const QuickConsult = ({ onClose }) => {
  const [stage, setStage] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState("start");
  const [answers, setAnswers] = useState({});
  const [questionHistory, setQuestionHistory] = useState(["start"]);
  const [points, setPoints] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [showConsultForm, setShowConsultForm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Service categories and definitions
  const serviceCategories = {
    education: {
      title: "Education Services",
      description:
        "Comprehensive support for your academic journey from course selection to career launch",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-100 text-purple-800",
      services: [
        {
          id: "course_selection",
          title: "Find Your Perfect Course",
          description:
            "Personalized guidance to select the ideal course matching your career aspirations and skills",
          icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
          features: [
            "Career assessment tests",
            "University shortlisting",
            "Program comparison",
            "International student support",
          ],
          caseStudy: {
            title: "International Student Success",
            result: "92% acceptance rate to top choices",
          },
        },
        {
          id: "admission",
          title: "Admission Assistance",
          description:
            "End-to-end support for your university application process",
          icon: <FileText className="w-6 h-6 text-purple-600" />,
          features: [
            "Application documentation",
            "Personal statement review",
            "Recommendation letter guidance",
            "Deadline management",
          ],
          caseStudy: {
            title: "Ivy League Applications",
            result: "3x increase in acceptance rates",
          },
        },
        {
          id: "visa",
          title: "Visa & Immigration Support",
          description: "Comprehensive help with student visas and relocation",
          icon: <Globe className="w-6 h-6 text-purple-600" />,
          features: [
            "Visa application guidance",
            "Document preparation",
            "Interview preparation",
            "Pre-departure briefing",
          ],
          caseStudy: {
            title: "UK Student Visa Processing",
            result: "100% approval rate",
          },
        },
        {
          id: "accommodation",
          title: "Accommodation Assistance",
          description: "Find safe and convenient housing abroad",
          icon: <Home className="w-6 h-6 text-purple-600" />,
          features: [
            "University housing options",
            "Private rentals",
            "Neighborhood guides",
            "Safety considerations",
          ],
        },
        {
          id: "part_time",
          title: "Part-Time Job Support",
          description: "Help finding relevant work during your studies",
          icon: <Briefcase className="w-6 h-6 text-purple-600" />,
          features: [
            "CV preparation",
            "Job search strategies",
            "Work rights guidance",
            "Interview preparation",
          ],
        },
        {
          id: "career",
          title: "Career Launchpad",
          description:
            "Post-study support to kickstart your professional journey",
          icon: <UserCheck className="w-6 h-6 text-purple-600" />,
          features: [
            "CV optimization platform",
            "Interview simulation",
            "Job search strategies",
            "Professional networking",
          ],
          caseStudy: {
            title: "Graduate Employment",
            result: "85% employed within 3 months",
          },
        },
      ],
    },
    consulting: {
      title: "Business Consulting",
      description:
        "Expert business strategies and operational excellence for sustainable growth",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-100 text-blue-800",
      services: [
        {
          id: "strategy",
          title: "Strategic Transformation",
          description:
            "Redefine your competitive positioning with data-driven strategies",
          icon: <Target className="w-6 h-6 text-blue-600" />,
          features: [
            "Market entry strategies",
            "Growth playbooks",
            "Competitive benchmarking",
            "Scenario planning",
          ],
          caseStudy: {
            title: "Global Retail Expansion",
            result: "240% revenue growth in 18 months",
          },
        },
        {
          id: "operations",
          title: "Operational Excellence",
          description:
            "Streamline processes and maximize organizational efficiency",
          icon: <BarChart className="w-6 h-6 text-blue-600" />,
          features: [
            "Process optimization",
            "Supply chain redesign",
            "Cost restructuring",
            "Performance metrics",
          ],
          caseStudy: {
            title: "Manufacturing Turnaround",
            result: "35% operational cost reduction",
          },
        },
        {
          id: "organization",
          title: "Organizational Design",
          description: "Build agile, high-performing teams for the new era",
          icon: <Users className="w-6 h-6 text-blue-600" />,
          features: [
            "Leadership development",
            "Talent architecture",
            "Change management",
            "Culture transformation",
          ],
          caseStudy: {
            title: "Post-Merger Integration",
            result: "90% employee retention rate",
          },
        },
      ],
    },
    technology: {
      title: "Technology Solutions",
      description:
        "Cutting-edge tech implementations to accelerate your digital transformation",
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      color: "bg-green-100 text-green-800",
      services: [
        {
          id: "digital",
          title: "Digital Transformation",
          description:
            "Leverage cutting-edge technologies to future-proof your business",
          icon: <Cpu className="w-6 h-6 text-green-600" />,
          features: [
            "AI adoption roadmaps",
            "Tech stack evaluation",
            "Digital workforce strategy",
            "Legacy system modernization",
          ],
          caseStudy: {
            title: "Banking Digital Overhaul",
            result: "60% faster customer onboarding",
          },
        },
        {
          id: "development",
          title: "Custom Software Development",
          description:
            "Tailored solutions engineered for your unique business requirements",
          icon: <Code className="w-6 h-6 text-green-600" />,
          features: [
            "Web & mobile applications",
            "Enterprise software",
            "API integrations",
            "Legacy system modernization",
          ],
          caseStudy: {
            client: "FinTech Startup",
            outcome: "3x faster transaction processing",
          },
        },
        {
          id: "cloud",
          title: "Cloud Solutions",
          description:
            "Scalable cloud infrastructure optimized for performance and cost",
          icon: <Cloud className="w-6 h-6 text-green-600" />,
          features: [
            "AWS/Azure/GCP migration",
            "Serverless architecture",
            "Kubernetes orchestration",
            "Cloud security hardening",
          ],
          caseStudy: {
            client: "E-commerce Platform",
            outcome: "60% reduction in cloud costs",
          },
        },
        {
          id: "ai",
          title: "AI & Data Solutions",
          description:
            "Transformative AI implementations with measurable business impact",
          icon: <Cpu className="w-6 h-6 text-green-600" />,
          features: [
            "Predictive analytics",
            "Computer vision",
            "LLM integration",
            "Data pipeline engineering",
          ],
          caseStudy: {
            client: "Healthcare Provider",
            outcome: "78% diagnostic accuracy improvement",
          },
        },
        {
          id: "cybersecurity",
          title: "Cybersecurity",
          description:
            "End-to-end protection for your digital assets and infrastructure",
          icon: <Shield className="w-6 h-6 text-green-600" />,
          features: [
            "Penetration testing",
            "SOC-as-a-service",
            "Compliance automation",
            "Zero-trust implementation",
          ],
          caseStudy: {
            client: "Banking Institution",
            outcome: "100% compliance audit pass rate",
          },
        },
      ],
    },
    investment: {
      title: "Investment & Advisory",
      description:
        "Strategic financial guidance and investment opportunities for growth and returns",
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-100 text-orange-800",
      services: [
        {
          id: "venture_capital",
          title: "Venture Capital",
          description:
            "Investment and strategic guidance for high-growth startups",
          icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
          features: [
            "Seed to Series B funding",
            "Strategic partnerships",
            "Growth acceleration",
            "Exit planning",
          ],
          caseStudy: {
            title: "Tech Startup Portfolio",
            result: "5x average ROI over 3 years",
          },
        },
        {
          id: "private_equity",
          title: "Private Equity",
          description:
            "Capital and expertise for established businesses seeking expansion",
          icon: <ChartPie className="w-6 h-6 text-orange-600" />,
          features: [
            "Growth capital",
            "Buyouts",
            "Restructuring",
            "Industry consolidation",
          ],
        },
        {
          id: "wealth_management",
          title: "Wealth Management",
          description:
            "Comprehensive financial planning and investment advisory services",
          icon: <PieChart className="w-6 h-6 text-orange-600" />,
          features: [
            "Portfolio management",
            "Tax optimization",
            "Retirement planning",
            "Estate planning",
          ],
        },
        {
          id: "entrepreneurship",
          title: "Entrepreneurship Pathway",
          description:
            "For students and professionals wanting to start their own ventures",
          icon: <Rocket className="w-6 h-6 text-orange-600" />,
          features: [
            "Business ideation",
            "Startup mentoring",
            "Funding guidance",
            "Legal framework setup",
          ],
          caseStudy: {
            title: "Student Startup Incubator",
            result: "15 successful launches in 2023",
          },
        },
      ],
    },
  };

  // Handle answer selection
  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    // Update points
    if (answer.points) {
      setPoints((prev) => {
        const newPoints = { ...prev };
        Object.entries(answer.points).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => {
              newPoints[v] = (newPoints[v] || 0) + 1;
            });
          } else {
            newPoints[value] = (newPoints[value] || 0) + 1;
          }
        });
        return newPoints;
      });
    }

    // Determine next question
    if (answer.nextQuestion) {
      setQuestionHistory((prev) => [...prev, answer.nextQuestion]);
      setCurrentQuestion(answer.nextQuestion);
      setAnimationKey((prev) => prev + 1);
    } else {
      // No more questions, show results
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setStage("result");
    }
  };

  // Go back to previous question
  const goBack = () => {
    if (questionHistory.length > 1) {
      const newHistory = [...questionHistory];
      newHistory.pop();
      const prevQuestion = newHistory[newHistory.length - 1];

      setQuestionHistory(newHistory);
      setCurrentQuestion(prevQuestion);

      // Remove answer for current question
      setAnswers((prev) => {
        const newAnswers = { ...prev };
        delete newAnswers[prevQuestion];
        return newAnswers;
      });

      setAnimationKey((prev) => prev + 1);
    }
  };

  // Start the quiz
  const handleStart = () => {
    setStage("quiz");
    setCurrentQuestion("start");
    setQuestionHistory(["start"]);
  };

  // View service details
  const viewServiceDetails = (serviceId, categoryKey) => {
    // Find the category that contains this service
    const category = Object.values(serviceCategories).find((cat) =>
      cat.services.some((service) => service.id === serviceId)
    );
    if (!category) {
      console.error("Service not found:", serviceId);
      return;
    }

    const service = category.services.find((s) => s.id === serviceId);

    setSelectedService({
      ...service,
      category,
    });
    setStage("service");
  };

  // Restart the quiz
  const restartQuiz = () => {
    setStage("intro");
    setAnswers({});
    setPoints({});
    setQuestionHistory(["start"]);
    setCurrentQuestion("start");
    setAnimationKey((prev) => prev + 1);
  };

  // Handle From Submit
  const handleScheduleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    // For now, we'll just show the success state in the form
  };
  const handleScheduleClick = (service, category) => {
    setSelectedService({
      ...service,
      category,
    });
    setStage("schedule");
  };

  // Determine recommended services based on points
  const getRecommendedServices = () => {
    // Get top category
    const categoryPoints = {};
    Object.entries(points).forEach(([key, value]) => {
      if (serviceCategories[key]) {
        categoryPoints[key] = value;
      }
    });

    const topCategory =
      Object.keys(categoryPoints).length > 0
        ? Object.keys(categoryPoints).reduce((a, b) =>
            categoryPoints[a] > categoryPoints[b] ? a : b
          )
        : "education"; // Default

    // Get top services within category
    const servicePoints = {};
    Object.entries(points).forEach(([key, value]) => {
      if (serviceCategories[topCategory].services.some((s) => s.id === key)) {
        servicePoints[key] = value;
      }
    });

    const topServices =
      Object.keys(servicePoints).length > 0
        ? Object.keys(servicePoints)
            .sort((a, b) => servicePoints[b] - servicePoints[a])
            .slice(0, 3)
            .map((id) =>
              serviceCategories[topCategory].services.find((s) => s.id === id)
            )
        : serviceCategories[topCategory].services.slice(0, 3);

    return {
      category: serviceCategories[topCategory],
      services: topServices,
    };
  };

  // Calculate modal height based on window size
  const modalHeight = windowSize.height * 0.9;
  const isMobile = windowSize.width < 768;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl w-full max-w-4xl shadow-xl flex flex-col"
        style={{
          maxHeight: `${modalHeight}px`,
          height: isMobile ? `${modalHeight}px` : "auto",
        }}
      >
        {/* Close button */}
        <div className="flex justify-end pr-2 pt-1">
          <button
            onClick={onClose}
            className="z-50 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            {/* Introduction Screen */}
            {stage === "intro" && (
              <Introduction onStart={handleStart} isMobile={isMobile} />
            )}

            {/* Quiz Screen */}
            {stage === "quiz" && (
              <motion.div
                key={`quiz-${animationKey}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col"
              >
                {/* Header with progress */}
                <div className="p-6 pt-0 pb-0 sticky top-0 bg-white z-10 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    {questionHistory.length > 1 ? (
                      <button
                        onClick={goBack}
                        className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5 mr-1" />
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>

                {/* Question Card */}
                <div className="flex-1 overflow-auto p-6">
                  <QuestionCard
                    key={currentQuestion}
                    question={allQuestions[currentQuestion]}
                    onAnswer={handleAnswer}
                    currentStep={questionHistory.length}
                    totalSteps={Object.keys(allQuestions).length}
                  />
                </div>
              </motion.div>
            )}

            {/* Results Screen */}
            {stage === "result" && (
              <Results
                recommendations={getRecommendedServices()}
                onViewService={viewServiceDetails}
                onSchedule={handleScheduleClick}
                onRestart={restartQuiz}
              />
            )}

            {/* Service Details Screen */}
            {stage === "service" && selectedService && (
              <ServiceDetails
                service={selectedService}
                onBack={() => setStage("result")}
                onSchedule={() => {
                  // Implement scheduling logic
                  console.log(
                    "Scheduling consultation for",
                    selectedService.title
                  );
                }}
                isMobile={isMobile}
              />
            )}
            {/* Consultation Form */}
            {stage === "schedule" && selectedService && (
              <ConsultationForm
                service={selectedService}
                onBack={() => setStage(selectedService ? "service" : "result")}
                onSubmit={handleScheduleSubmit}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuickConsult;
