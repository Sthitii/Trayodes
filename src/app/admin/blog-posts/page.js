// app/admin/blog-posts/page.js
import { Sidebar } from '@/components/dashboard/Sidebar';
import { prisma } from '@/lib/prisma';
import { Search, Plus } from 'lucide-react';
import Link from 'next/link';

// Fetch blog posts with author information and sort by creation date
async function getBlogPosts() {
  return await prisma.blogPost.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export default async function BlogPostsPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Blog Posts</h1>
            <p className="text-gray-600">Manage your blog content</p>
          </div>
          <Link 
            href="/admin/blog-posts/new" 
            className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Post
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-[300px]"
                />
              </div>
              <select className="border rounded-lg px-4 py-2">
                <option value="all">All Posts</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Blog Posts Table */}
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-4 text-sm font-medium text-gray-600">POST</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">AUTHOR</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">STATUS</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">VIEWS</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      {post.featuredImage && (
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <h3 className="font-medium">{post.title}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">
                    {post.author.name}
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-sm rounded-full ${
                      post.status === 'published' 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-gray-50 text-gray-600'
                    }`}>
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">
                    {post.views.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-3">
                      <Link 
                        href={`/admin/blog-posts/${post.id}/edit`}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        Edit
                      </Link>
                      <button 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

