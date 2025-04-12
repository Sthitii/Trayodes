"use client";

import { useRouter } from "next/navigation";
import { Briefcase, Handshake, Code, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Investments & Advisory",
    description: "Expert guidance for startup funding, growth strategies, and investment opportunities.",
    icon: <Handshake className="w-12 h-12 text-purple-600" />,
    link: "/services/investment-advisory",
  },
  {
    title: "Management Consulting",
    description: "Optimize operations and enhance organizational effectiveness through strategic transformation.",
    icon: <Briefcase className="w-12 h-12 text-purple-600" />,
    link: "/services/management-consulting",
  },
 
  {
    title: "IT Product & Services",
    description: "Leverage cutting-edge technology solutions aligned with your business objectives.",
    icon: <Code className="w-12 h-12 text-purple-600" />,
    link: "/services/it-product-services",
  },
  {
    title: "Student Services",
    description: "Comprehensive support for students, including course consultation, visa help, and interview prep.",
    icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
    link: "/services/student-services",
  },
];

export default function Services() {
  const router = useRouter();

  const handleServiceClick = (link, e) => {
    e.stopPropagation();
    console.log('clicked');
    router.push(link);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={(e) => handleServiceClick(service.link, e)}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer hover:bg-purple-50 "
              style={{ cursor: 'pointer' }}
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}