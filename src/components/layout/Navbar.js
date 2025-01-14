// src/components/layout/Navbar.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const services = [
    {
      category: "Management & Strategy",
      items: [
        {
          title: "Management Consulting",
          description: "Optimize operations and enhance organizational effectiveness",
          link: "/services/management-consulting"
        },
        {
          title: "Strategy Consulting",
          description: "Develop comprehensive strategic frameworks for sustainable growth",
          link: "/services/strategy-consulting"
        },
        {
          title: "Business Development",
          description: "Accelerate growth through targeted market expansion strategies",
          link: "/services/business-development"
        }
      ]
    },
    {
      category: "Technology & Operations",
      items: [
        {
          title: "Software/IT Consulting",
          description: "Leverage technology solutions aligned with business objectives",
          link: "/services/it-consulting"
        },
        {
          title: "Business Process Consulting",
          description: "Streamline operations and enhance efficiency through optimization",
          link: "/services/process-consulting"
        }
      ]
    },
    {
      category: "Financial Advisory",
      items: [
        {
          title: "Venture Capital Consulting",
          description: "Expert guidance for startup funding and growth strategies",
          link: "/services/venture-capital"
        },
        {
          title: "Marketing Consulting",
          description: "Data-driven marketing strategies for measurable results",
          link: "/services/marketing"
        }
      ]
    }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-purple-700">
              Trayodes
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 transition-colors py-8"
                  onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
                >
                  <span>Services</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-purple-700 transition-colors">
                About
              </Link>
              <Link href="/insights" className="text-gray-700 hover:text-purple-700 transition-colors">
                Insights
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-700 transition-colors">
                Contact
              </Link>
              <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40"
          >
            <div className="relative w-full">
              {/* Close Button */}
              <button
                onClick={() => setActiveMenu(null)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Menu Content */}
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {services.map((category) => (
                    <div key={category.category} className="space-y-8">
                      <h3 className="text-gray-400 font-medium tracking-wide uppercase text-sm px-4">
                        {category.category}
                      </h3>
                      <div className="space-y-6">
                        {category.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.link}
                            className="block group"
                            onClick={() => setActiveMenu(null)}
                          >
                            <div className="p-4 rounded-lg group-hover:bg-purple-50 transition-colors">
                              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 mt-1 text-sm">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {activeMenu === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;