"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Globe,
  FileText,
  UserCheck,
  Home,
  Briefcase,
  Rocket,
} from "lucide-react";
import cons2 from "@/assets/images/cons2.jpg";
import Image from "next/image";
import Link from "next/link";
import ConsultationForm from "@/components/studentServices/consultationForm";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StudentServices = () => {
  const [showConsultation, setShowConsultation] = useState(false);

  const services = [
    {
      title: "Find Your Perfect Course",
      description:
        "Personalized guidance to select the ideal course matching your career aspirations and skills",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      features: [
        "Career assessment tests",
        "University shortlisting",
        "Program comparison",
        "International student support",
      ],
    },
    {
      title: "Admission Assistance",
      description: "End-to-end support for your university application process",
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      features: [
        "Application documentation",
        "Personal statement review",
        "Recommendation letter guidance",
        "Deadline management",
      ],
    },
    {
      title: "Visa & Immigration Support",
      description: "Comprehensive help with student visas and relocation",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      features: [
        "Visa application guidance",
        "Document preparation",
        "Interview preparation",
        "Pre-departure briefing",
      ],
    },
    {
      title: "Accommodation Assistance",
      description: "Find safe and convenient housing in the UK",
      icon: <Home className="w-8 h-8 text-purple-600" />,
      features: [
        "University housing options",
        "Private rentals",
        "Neighborhood guides",
        "Safety considerations",
      ],
    },
    {
      title: "Part-Time Job Support",
      description: "Help finding relevant work during your studies",
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      features: [
        "CV preparation",
        "Job search strategies",
        "Work rights guidance",
        "Interview preparation",
      ],
    },
    {
      title: "Career Launchpad",
      description: "Post-study support to kickstart your professional journey",
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      features: [
        "CV optimization platform",
        "Interview simulation",
        "Job search strategies",
        "Professional networking",
      ],
    },
    {
      title: "Entrepreneurship Pathway",
      description: "For students wanting to start their own ventures",
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      features: [
        "Business ideation",
        "Startup mentoring",
        "Funding guidance",
        "Legal framework setup",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
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
          <span className="text-purple-700">Student Services</span>
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
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Student Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90"
              >
                Your complete journey companion - from course selection to
                career launch
              </motion.p>
            </div>

            {/* Right Space for Image/Design */}
            <div className="col-span-12 md:col-span-6">
              {/* This space is intentionally left empty for the background image to show */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <section className="pt-16 pb-16 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          Our Comprehensive Support Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-purple-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Your Complete Student Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-purple-200 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-0">
              {[
                "Course Selection",
                "Admission Process",
                "Visa & Relocation",
                "Studies & Work",
                "Career Preparation",
                "Graduation & Beyond",
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 p-6 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-purple-700 mb-2">
                        {stage}
                      </h3>
                      <p className="text-gray-600">
                        {index === 0 &&
                          "We help you find the perfect course matching your aspirations"}
                        {index === 1 &&
                          "Complete support with applications and documentation"}
                        {index === 2 &&
                          "Visa guidance and relocation support to the UK"}
                        {index === 3 &&
                          "Academic support and part-time job assistance"}
                        {index === 4 &&
                          "Interview prep and career planning services"}
                        {index === 5 &&
                          "Ongoing support for your professional journey"}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 md:justify-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Begin Your UK Education Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Our experts are ready to guide you through every step of the
            process.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowConsultation(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Today
            </button>

            {showConsultation && (
              <ConsultationForm onClose={() => setShowConsultation(false)} />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentServices;
