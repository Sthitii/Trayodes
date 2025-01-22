// app/admin/layout.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  FileText, 
  Book, 
  Users, 
  Settings, 
  Menu, 
  X,
  LogOut,
  BarChart
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const sidebarLinks = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/admin/dashboard',
  },
  {
    title: 'Services',
    icon: FileText,
    href: '/admin/services',
  },
  {
    title: 'Blog Posts',
    icon: Book,
    href: '/admin/blog',
  },
  {
    title: 'Case Studies',
    icon: BarChart,
    href: '/admin/case-studies',
  },
  {
    title: 'Team Members',
    icon: Users,
    href: '/admin/team',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
];

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isSidebarOpen ? 0 : -280 }}
        className="fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-lg"
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/admin/dashboard" className="text-xl font-bold text-purple-600">
              Trayodes Admin
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-2 py-4">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-2 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors group"
                >
                  <Icon className="mr-3 h-5 w-5" />
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="border-t p-4">
            <button
              onClick={() => signOut()}
              className="flex w-full items-center px-2 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 bg-white rounded-lg shadow-lg"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} flex-1 transition-all`}>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;