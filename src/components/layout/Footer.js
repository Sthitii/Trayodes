// src/components/layout/Footer.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Youtube, Copyright } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    connect: {
      title: "CONNECT",
      links: [
        { label: "Contact us", href: "/contact" },
        { label: "Our offices", href: "/offices" },
      ]
    },
    about: {
      title: "ABOUT",
      links: [
        { label: "About us", href: "/about" },
      ]
    },
    legal: {
      title: "LEGAL",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ]
    }
  };

  const services = [
    {
      name: "Management Consulting",
      url: "services/management-consulting"
    },
    {
      name: "Student Services",
      url: "services/student-services"
    },
    {
      name: "IT Product & Services",
      url: "services/it-product-services"
    },
    {
      name: "Investments & Advisory",
      url: "services/investments-advisory"
    },

    
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footerSections.connect.title}</h3>
            <ul className="space-y-4">
              {footerSections.connect.links.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footerSections.about.title}</h3>
            <ul className="space-y-4">
              {footerSections.about.links.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{footerSections.legal.title}</h3>
            <ul className="space-y-4">
              {footerSections.legal.links.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services and Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">OUR SERVICES</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {services.map((data) => (
                <Link
                  key={data.name}
                  href={data.url}
                  className="bg-purple-700/50 hover:bg-purple-600/50 px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {data.name}
                </Link>
              ))}
            </div>

            {/* <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="bg-purple-700/50 p-2 rounded-full hover:bg-purple-600/50 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;