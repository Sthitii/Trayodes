// src/app/insights/blog/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Filter, X } from 'lucide-react';

const industries = [
  'All Industries',
  'Banking & Finance',
  'Insurance',
  'Technology',
  'Healthcare',
  'Retail'
];

const sortOptions = [
  'Most Recent',
  'Most Popular',
  'Oldest First'
];

const blogPosts = [
  {
    title: 'Digital Transformation in Banking: A 2025 Perspective',
    description: 'Explore the latest trends and innovations shaping the future of banking and financial services.',
    image: '/api/placeholder/600/400',
    category: 'Banking & Finance',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    industry: 'Banking & Finance'
  },
  // Add more blog posts...
];

const BlogPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[400px] bg-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/400"
            alt="Blog Banner"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-white/90">
              Expert perspectives on industry trends, business transformation, and innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 -mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between gap-4 flex-wrap"
        >
          {/* Industry Filter */}
          <div className="relative">
            <button
              onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
              className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:border-purple-500 transition-colors"
            >
              <Filter size={20} />
              {selectedIndustry}
              <ChevronDown size={16} />
            </button>
            
            {showIndustryDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-10"
              >
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => {
                      setSelectedIndustry(industry);
                      setShowIndustryDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-purple-50 transition-colors"
                  >
                    {industry}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Sort Filter */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:border-purple-500 transition-colors"
            >
              Sort by: {sortBy}
              <ChevronDown size={16} />
            </button>
            
            {showSortDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setShowSortDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-purple-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedIndustry('All Industries');
              setSortBy('Most Recent');
            }}
            className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors flex items-center gap-2"
          >
            <X size={20} />
            Clear Filters
          </button>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter(post => selectedIndustry === 'All Industries' || post.industry === selectedIndustry)
            .map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;