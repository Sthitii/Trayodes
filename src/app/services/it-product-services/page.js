'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Cloud, Database, Shield, Server, ArrowRight, Terminal, Zap, Layers, Check } from 'lucide-react';

const ITProductServices = () => {
  const [activeService, setActiveService] = useState('development');
  const [hoveredTech, setHoveredTech] = useState(null);

  const services = {
    development: {
      title: "Custom Software Development",
      icon: <Code className="w-8 h-8 text-purple-600" />,
      description: "Tailored solutions engineered for your unique business requirements",
      features: [
        "Web & mobile applications",
        "Enterprise software",
        "API integrations",
        "Legacy system modernization"
      ],
      techStack: ["React", "Node.js", "Python", "Flutter"],
      caseStudy: {
        client: "FinTech Startup",
        outcome: "3x faster transaction processing"
      }
    },
    cloud: {
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      description: "Scalable cloud infrastructure optimized for performance and cost",
      features: [
        "AWS/Azure/GCP migration",
        "Serverless architecture",
        "Kubernetes orchestration",
        "Cloud security hardening"
      ],
      techStack: ["AWS", "Terraform", "Docker", "Kafka"],
      caseStudy: {
        client: "E-commerce Platform",
        outcome: "60% reduction in cloud costs"
      }
    },
    ai: {
      title: "AI & Data Solutions",
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      description: "Transformative AI implementations with measurable business impact",
      features: [
        "Predictive analytics",
        "Computer vision",
        "LLM integration",
        "Data pipeline engineering"
      ],
      techStack: ["TensorFlow", "PyTorch", "Snowflake", "Spark"],
      caseStudy: {
        client: "Healthcare Provider",
        outcome: "78% diagnostic accuracy improvement"
      }
    },
    cybersecurity: {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      description: "End-to-end protection for your digital assets and infrastructure",
      features: [
        "Penetration testing",
        "SOC-as-a-service",
        "Compliance automation",
        "Zero-trust implementation"
      ],
      techStack: ["SIEM", "OWASP", "NIST", "ISO27001"],
      caseStudy: {
        client: "Banking Institution",
        outcome: "100% compliance audit pass rate"
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Tech Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
      >
        {/* Animated Tech Background Elements */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 opacity-10"
        >
          <Terminal size={120} />
        </motion.div>
        
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          className="absolute top-1/3 right-1/4 opacity-10"
        >
          <Server size={150} />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                IT Product & Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl opacity-90">
              Engineering tomorrow's solutions with today's cutting-edge technologies
            </p>
          </motion.div>

          {/* Service Selector Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-5 py-2 rounded-full border transition-all ${activeService === key ? 
                  'bg-purple-600 border-purple-600 text-white' : 
                  'border-gray-600 text-gray-300 hover:border-purple-400 hover:text-white'}`}
              >
                {services[key].title.split(" ")[0]}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Service Detail Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  {services[activeService].icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {services[activeService].title}
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 mb-8">
                {services[activeService].description}
              </p>
              
              <div className="space-y-4 mb-8">
                {services[activeService].features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="p-1 bg-purple-100 rounded-full mr-4 mt-1">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {services[activeService].techStack.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setHoveredTech(tech)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className={`px-4 py-2 rounded-lg ${hoveredTech === tech ? 
                        'bg-purple-600 text-white shadow-lg' : 
                        'bg-gray-100 text-gray-800'}`}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                Request Tech Assessment <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Interactive Case Study */}
            <div className="relative">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 h-full">
                <div className="flex items-center gap-2 text-purple-600 mb-4">
                  <Layers className="w-5 h-5" />
                  <span className="font-medium">Implementation Showcase</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {services[activeService].caseStudy.client}
                </h3>
                <p className="text-gray-600 mb-6">
                  Achieved <span className="font-bold text-purple-600">{services[activeService].caseStudy.outcome}</span>
                </p>
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 text-white h-64 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity
                    }}
                    className="text-center"
                  >
                    <Code className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <p className="font-mono text-sm opacity-80">system.out.println("Success!");</p>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-gray-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 bg-green-100 rounded-full">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">Verified Results</span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Tech Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our Technology Capabilities
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Database size={32} />, name: "Data Engineering" },
              { icon: <Cpu size={32} />, name: "AI/ML" },
              { icon: <Cloud size={32} />, name: "Cloud Native" },
              { icon: <Shield size={32} />, name: "DevSecOps" },
              { icon: <Terminal size={32} />, name: "Web3" },
              { icon: <Server size={32} />, name: "IoT" },
              { icon: <Code size={32} />, name: "Mobile" },
              { icon: <Layers size={32} />, name: "Blockchain" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="text-purple-600 flex justify-center mb-3">
                  {tech.icon}
                </div>
                <h3 className="font-medium text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Architect Your Digital Future?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Our certified engineers will design a solution tailored to your technical and business requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Technical Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITProductServices;