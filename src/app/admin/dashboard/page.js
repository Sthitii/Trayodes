// app/admin/dashboard/page.js
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart } from '@tremor/react';
import { 
  Users, FileText, BookOpen, Mail, 
  TrendingUp, Eye, MessageSquare, Clock 
} from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState(null);

  // Sample data - Replace with real data from your API
  const statsData = [
    { title: "Total Services", value: "7", icon: FileText, trend: "up", trendValue: "12" },
    { title: "Blog Posts", value: "24", icon: BookOpen, trend: "up", trendValue: "8" },
    { title: "Total Inquiries", value: "156", icon: Mail, trend: "down", trendValue: "3" },
    { title: "Active Users", value: "2.4k", icon: Users, trend: "up", trendValue: "15" },
  ];

  const chartdata = [
    {
      date: "Jan",
      "Page Views": 890,
      "Unique Visitors": 338,
    },
    {
      date: "Feb",
      "Page Views": 1200,
      "Unique Visitors": 450,
    },
    // Add more data points
  ];

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setStats(statsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin</p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Export Report
        </button>
      </div>

      {/* Stats Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
              <div className="h-10 w-10 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatsCard
              key={stat.title}
              {...stat}
            />
          ))}
        </div>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traffic Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-lg font-semibold mb-4">Traffic Overview</h2>
          <LineChart
            data={chartdata}
            index="date"
            categories={["Page Views", "Unique Visitors"]}
            colors={["purple", "indigo"]}
            className="h-72"
          />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { icon: Eye, text: "New blog post viewed 24 times", time: "5 min ago" },
              { icon: MessageSquare, text: "New inquiry received", time: "1 hour ago" },
              { icon: FileText, text: "Service page updated", time: "2 hours ago" },
              { icon: Users, text: "New team member added", time: "5 hours ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <activity.icon className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{activity.text}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "New Blog Post", icon: BookOpen },
            { title: "Add Service", icon: FileText },
            { title: "View Inquiries", icon: Mail },
            { title: "Team Members", icon: Users },
          ].map((action) => (
            <button
              key={action.title}
              className="p-4 border rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors text-center"
            >
              <action.icon className="w-6 h-6 mx-auto mb-2 text-purple-600" />
              <span className="text-sm text-gray-600">{action.title}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}