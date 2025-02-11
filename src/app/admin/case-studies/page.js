import { prisma } from '@/lib/prisma';
import { Search, Plus } from 'lucide-react';
import Link from 'next/link';

// Fetch case studies with their related service information
async function getCaseStudies() {
  return await prisma.CaseStudy.findMany({
    include: {
      service: {
        select: {
          title: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen bg-gray-50">
     
      
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Case Studies</h1>
            <p className="text-gray-600">Showcase your success stories</p>
          </div>
          <Link 
            href="/admin/case-studies/new" 
            className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Case Study
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-[300px]"
                />
              </div>
              <select className="border rounded-lg px-4 py-2">
                <option value="all">All Industries</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-4 text-sm font-medium text-gray-600">CASE STUDY</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">CLIENT</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">INDUSTRY</th>
                <th className="text-left p-4 text-sm font- medium text-gray-600">SERVICE</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((study) => (
                <tr key={study.id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      {study.featuredImage && (
                        <img 
                          src={study.featuredImage} 
                          alt={study.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <h3 className="font-medium">{study.title}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(study.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">
                    {study.clientName}
                  </td>
                  <td className="p-4 text-gray-600">
                    {study.industry}
                  </td>
                  <td className="p-4 text-gray-600">
                    {study.service.title}
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-3">
                      <Link 
                        href={`/admin/case-studies/${study.id}/edit`}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        Edit
                      </Link>
                      <button 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(study.id)}
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