// src/components/home/Insights.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import charts from '@/assets/images/charts.jpg';
import cons from '@/assets/images/cons.jpg';
import cons1 from '@/assets/images/cons1.jpg';
import fin from '@/assets/images/fin.jpg';
import discu from '@/assets/images/discu.jpg';


import { Clock, User, ArrowRight } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      category: "FEATURED",
      title: "Digital Transformation in Finance",
      description: "Strategic insights on leveraging technology for financial excellence",
      readTime: "5 min read",
      author: "Sarah Chen",
      image: charts,
      gradient: "from-purple-600 to-blue-500"
    },
    {
      category: "REPORT",
      title: "Future of Business Consulting 2024",
      description: "Key trends shaping the consulting industry",
      readTime: "8 min read",
      author: "Michael Rivera",
      image: cons,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      category: "CASE STUDY",
      title: "Banking Sector Innovation",
      description: "How we helped transform a leading bank's operations",
      readTime: "4 min read",
      author: "David Kumar",
      image: cons1,
      gradient: "from-indigo-600 to-purple-500"
    }
  ];

  const categories = ["Featured", "Latest Reports", "Case Studies", "Industry Insights", "Market Analysis"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Latest Insights & Reports</h2>
          <p className="text-gray-600 text-xl max-w-2xl">
            Discover our latest thinking and insights on the most important trends in business and technology.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="whitespace-nowrap px-6 py-2 rounded-full bg-white hover:bg-purple-50 
                       text-gray-700 hover:text-purple-700 transition-all border border-gray-200 
                       hover:border-purple-200 text-sm font-medium"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                       transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} 
                              opacity-90 transition-opacity group-hover:opacity-100`}>
                </div>
                <Image
                  src={insight.image}
                  alt={insight.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold text-white 
                               bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  {insight.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-700 
                             transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User size={16} />
                      {insight.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {insight.readTime}
                    </span>
                  </div>
                  <ArrowRight className="text-purple-700 opacity-0 -translate-x-4 
                                     group-hover:opacity-100 group-hover:translate-x-0 
                                     transition-all" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 border-2 border-purple-700 text-purple-700 
                         rounded-lg hover:bg-purple-50 transition-all inline-flex 
                         items-center gap-2 font-medium">
            View All Insights
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;