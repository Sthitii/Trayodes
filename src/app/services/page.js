// src/app/services/page.js
'use client';

import React from 'react'; // Add this import
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  BarChart, 
  LineChart, // Changed from Strategy
  Globe2, 
  Code, 
  Settings, // Changed from Workflow
  PiggyBank, 
  Target 
} from 'lucide-react';

const ServiceCard = ({ service }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <Link href={`/services/${service.slug}`}>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Card Header with Pattern and Gradient */}
            <div className={`relative h-48 ${service.gradient} p-6 overflow-hidden`}>
              {/* Abstract Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
  
              {/* Floating Shapes */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-lg" />
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-lg" />
  
              {/* Icon and Label */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-14 h-14 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wider uppercase">
                  {service.category}
                </div>
              </div>
            </div>
  
            {/* Card Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>
                <div className="bg-gray-100 rounded-full p-2 group-hover:bg-purple-100 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <span className="mr-2">Learn more</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

const ServicesPage = () => {
    const services = [
        {
          title: "Management Consulting",
          category: "Business Operations",
          description: "Optimize operations and enhance organizational effectiveness through strategic transformation. We focus on streamlining processes, improving efficiency, and driving sustainable growth across your organization.",
          icon: <BarChart className="w-6 h-6 text-white" />,
          slug: "management-consulting",
          gradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
          delay: 0.1
        },
        {
          title: "Strategy Consulting",
          category: "Strategic Planning",
          description: "Develop comprehensive strategic frameworks for sustainable business growth and market leadership. Our approach combines market analysis, competitive positioning, and actionable roadmaps.",
          icon: <LineChart className="w-6 h-6 text-white" />,
          slug: "strategy-consulting",
          gradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
          delay: 0.2
        },
        {
          title: "Business Development",
          category: "Growth & Expansion",
          description: "Accelerate growth through targeted market expansion and strategic partnership initiatives. We help identify opportunities, forge valuable partnerships, and create sustainable growth strategies.",
          icon: <Globe2 className="w-6 h-6 text-white" />,
          slug: "business-development",
          gradient: "bg-gradient-to-br from-teal-600 to-emerald-600",
          delay: 0.3
        },
        {
          title: "Software/IT Consulting",
          category: "Technology Solutions",
          description: "Leverage cutting-edge technology solutions aligned with your business objectives. Our expertise spans digital transformation, system integration, and technology strategy development.",
          icon: <Code className="w-6 h-6 text-white" />,
          slug: "it-consulting",
          gradient: "bg-gradient-to-br from-cyan-600 to-blue-600",
          delay: 0.4
        },
        {
          title: "Business Process Consulting",
          category: "Process Optimization",
          description: "Streamline operations and enhance efficiency through process optimization and automation. We analyze, redesign, and implement improved business processes to maximize productivity.",
          icon: <Settings className="w-6 h-6 text-white" />,
          slug: "process-consulting",
          gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
          delay: 0.5
        },
        {
          title: "Venture Capital Consulting",
          category: "Investment Strategy",
          description: "Expert guidance for startup funding, growth strategies, and investment opportunities. We provide comprehensive support for fundraising, valuation, and investment strategy development.",
          icon: <PiggyBank className="w-6 h-6 text-white" />,
          slug: "venture-capital",
          gradient: "bg-gradient-to-br from-violet-600 to-purple-600",
          delay: 0.6
        },
        {
          title: "Marketing Consulting",
          category: "Market Growth",
          description: "Data-driven marketing strategies for measurable results and market impact. Our approach combines market research, customer insights, and innovative marketing solutions.",
          icon: <Target className="w-6 h-6 text-white" />,
          slug: "marketing-consulting",
          gradient: "bg-gradient-to-br from-fuchsia-600 to-pink-600",
          delay: 0.7
        }
    ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive consulting solutions tailored to transform your business vision into reality. 
            Each service is designed to deliver measurable impact and sustainable growth.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-4 mt-20"
      >
        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-xl font-medium hover:bg-white/95 transition-colors">
            Get in touch
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;