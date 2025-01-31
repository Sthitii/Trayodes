'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch('/api/blogs');
    const data = await response.json();
    setBlogs(data);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      fetchBlogs(); // Refresh the list
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link
          href="/admin/blogs/create"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          + Create Blog
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search blogs by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.featuredImage})` }}
            ></div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">Author: {blog.author.name}</p>
              <p className="text-gray-600 mb-4">Industry: {blog.industry}</p>
              <div className="flex gap-2">
                <Link
                  href={`/admin/blogs/edit/${blog.id}`}
                  className="text-purple-600 hover:text-purple-700"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}