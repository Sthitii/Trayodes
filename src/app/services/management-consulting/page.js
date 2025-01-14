"use client";

import { motion } from "framer-motion";
import { Plus, Building2, Trophy, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import cons2 from "@/assets/images/cons2.jpg";
import alexander from "@/assets/images/alexander.jpg";

import Image from "next/image";

const ServiceDetailPage = () => {
  // Service details data
  const serviceDetails = {
    title: "Management Consulting",
    subtitle:
      "Helping you realise your ambitions in every aspect of change and transformation",
    heroImage: cons2,
    mainFeatures: [
      {
        title: "Experience and expertise",
        icon: <Building2 className="w-12 h-12 text-purple-600" />,
        description:
          "We have worked with businesses of every size and complexity on over 1000 change and transformation projects.",
      },
      {
        title: "Delivering great outcomes",
        icon: <Trophy className="w-12 h-12 text-purple-600" />,
        description:
          "We don't reach for off the shelf solutions, we get to know your business, and shape its future with you.",
      },
      {
        title: "A different experience",
        icon: <Users className="w-12 h-12 text-purple-600" />,
        description:
          "Working with us feels different. We work alongside you and your people, acting as an extension of your existing teams.",
      },
    ],
    servicesOffered: [
      {
        title: "Improving your business performance",
        description:
          "Understand and improve all aspects of your performance: from the top-line (revenue) to the bottom line (margin), right through to cash.",
        subServices: [
          "Strategic business planning",
          "Enterprise performance management",
          "Finance consulting",
          "Transformation consulting",
          "Enterprise applications: systems transformation",
          "Working capital optimisation",
          "Cost reduction",
          "Margin optimisation",
        ],
      },
      {
        title: "Improving your business performance",
        description:
          "Understand and improve all aspects of your performance: from the top-line (revenue) to the bottom line (margin), right through to cash.",
        subServices: [
          "Strategic business planning",
          "Enterprise performance management",
          "Finance consulting",
          "Transformation consulting",
          "Enterprise applications: systems transformation",
          "Working capital optimisation",
          "Cost reduction",
          "Margin optimisation",
        ],
      },
      {
        title: "Improving your business performance",
        description:
          "Understand and improve all aspects of your performance: from the top-line (revenue) to the bottom line (margin), right through to cash.",
        subServices: [
          "Strategic business planning",
          "Enterprise performance management",
          "Finance consulting",
          "Transformation consulting",
          "Enterprise applications: systems transformation",
          "Working capital optimisation",
          "Cost reduction",
          "Margin optimisation",
        ],
      },
    ],
    expert: {
      name: "Alexander Chen",
      title: "Head of Management Consulting",
      image: alexander,
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
        className="container mx-auto max-w-7xl px-4 py-8"
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
                Management Consulting
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90"
              >
                Helping you realise your ambitions in every aspect of change and transformation
              </motion.p>
            </div>
            
            {/* Right Space for Image/Design */}
            <div className="col-span-12 md:col-span-6">
              {/* This space is intentionally left empty for the background image to show */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Features */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDetails.mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          {serviceDetails.servicesOffered.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <details className="group bg-white rounded-lg shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <Plus className="w-5 h-5 text-purple-600 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.subServices.map((subService) => (
                      <li
                        key={subService}
                        className="flex items-center text-purple-700"
                      >
                        <span className="w-2 h-2 bg-purple-700 rounded-full mr-3" />
                        {subService}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expert Contact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-7xl px-4 pt-10 pb-20"
      >
        <div className="relative overflow-hidden rounded-[2rem]">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-blue-500" />
          
          {/* Content */}
          <div className="relative p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Expert Info */}
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <Image
                  src={alexander}
                  alt="Expert profile"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              
              <div className="text-white">
                <p className="text-sm font-medium tracking-wider mb-2">GET IN TOUCH</p>
                <h3 className="text-3xl font-bold mb-2">Alan Dale</h3>
                <p className="text-white/90">Head of Management Consulting</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-purple-700 rounded-xl font-medium 
                         hover:bg-white/95 transition-colors shadow-lg"
              >
                Contact Alan Dale
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white 
                         rounded-xl font-medium hover:bg-white/10 transition-colors 
                         flex items-center justify-center gap-2"
              >
                Learn more
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetailPage;
