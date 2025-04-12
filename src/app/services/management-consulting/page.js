"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  BarChart,
  Target,
  Users,
  Cpu,
  ArrowRight,
  Check,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import cons2 from "@/assets/images/cons2.jpg";
import Image from "next/image";

const ManagementConsulting = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = {
    strategy: {
      title: "Strategic Transformation",
      description:
        "Redefine your competitive positioning with data-driven strategies",
      icon: <Target className="w-8 h-8 text-purple-600" />,
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
    operations: {
      title: "Operational Excellence",
      description:
        "Streamline processes and maximize organizational efficiency",
      icon: <BarChart className="w-8 h-8 text-purple-600" />,
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
    digital: {
      title: "Digital Transformation",
      description:
        "Leverage cutting-edge technologies to future-proof your business",
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
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
    organization: {
      title: "Organizational Design",
      description: "Build agile, high-performing teams for the new era",
      icon: <Users className="w-8 h-8 text-purple-600" />,
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 p-4">
          <Link href="/" className="hover:text-purple-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-purple-700">
            Services
          </Link>
          <span>/</span>
          <span className="text-purple-700">Management Consulting</span>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-7xl px-4 py-4"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-purple-900">
          <div className="absolute inset-0">
            <Image
              src={cons2}
              alt="Bridge connecting two lands"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>

          <div className="relative grid grid-cols-12 gap-8 p-12 md:p-16">
            {/* Left Content */}
            <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Management Consulting
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90"
              >
                Elevating enterprises through strategic clarity, operational precision, and transformative leadership
              </motion.p>
            </div>

            {/* Right Space for Image/Design */}
            <div className="col-span-12 md:col-span-6">
              {/* This space is intentionally left empty for the background image to show */}
            </div>
          </div>
        </div>
      </motion.div>

      {/*Tab Bar*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center"
      >
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-4xl w-full mx-4 my-8">
          <div className="flex flex-wrap gap-8 justify-between">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 font-medium ${
                  activeTab === key
                    ? "text-purple-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="hidden md:block">{services[key].icon}</span>
                {services[key].title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Service Showcase */}
      <section className="py-8 px-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {services[activeTab].title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {services[activeTab].description}
              </p>

              <div className="space-y-4 mb-8">
                {services[activeTab].features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="p-1 bg-purple-100 rounded-full mr-4 mt-1">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                Speak to an expert <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Case Study Highlight
                </h3>
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  {services[activeTab].caseStudy.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {services[activeTab].caseStudy.result}
                </p>
                <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <BarChart className="w-12 h-12 text-purple-600" />
                </div>
              </div>

              
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Methodology */}
      <section className="pt-8 pb-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Proven Methodology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnostic Analysis",
                description: "Deep-dive assessment of your business landscape",
                icon: "🔍",
              },
              {
                title: "Solution Design",
                description: "Tailored frameworks for your unique challenges",
                icon: "✏️",
              },
              {
                title: "Implementation",
                description: "Hands-on execution with measurable KPIs",
                icon: "⚡",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Transform Your Business Trajectory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Partner with our former Fortune 500 executives and industry
            specialists
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule Diagnostic Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Download Our Playbook
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManagementConsulting;
