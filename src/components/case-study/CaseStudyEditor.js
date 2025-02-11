import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Bold, Italic, List, ListOrdered, Image as ImageIcon } from 'lucide-react';

export function CaseStudyEditor({ initialData, services, onSave }) {
  // Initialize state with initial data or defaults
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    clientName: initialData?.clientName || '',
    industry: initialData?.industry || '',
    challenge: initialData?.challenge || '',
    solution: initialData?.solution || '',
    results: initialData?.results || '',
    featuredImage: initialData?.featuredImage || '',
    serviceId: initialData?.serviceId || '',
  });
  const [isSaving, setIsSaving] = useState(false);

  // Initialize the rich text editors
  const challengeEditor = useEditor({
    extensions: [StarterKit],
    content: initialData?.challenge || '',
  });

  const solutionEditor = useEditor({
    extensions: [StarterKit],
    content: initialData?.solution || '',
  });

  const resultsEditor = useEditor({
    extensions: [StarterKit],
    content: initialData?.results || '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave({
        ...formData,
        challenge: challengeEditor?.getHTML(),
        solution: solutionEditor?.getHTML(),
        results: resultsEditor?.getHTML(),
      });
    } catch (error) {
      console.error('Error saving case study:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          {initialData ? 'Edit Case Study' : 'Create New Case Study'}
        </h1>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save'}
        </button>
      </div>

      <div className="space-y-6 bg-white rounded-lg p-6 shadow-sm">
        {/* Basic Information */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter case study title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Name
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter industry"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service
            </label>
            <select
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image URL
          </label>
          <input
            type="text"
            name="featuredImage"
            value={formData.featuredImage}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Enter image URL"
          />
          {formData.featuredImage && (
            <img
              src={formData.featuredImage}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Challenge Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Challenge
          </label>
          <div className="border rounded-lg">
            <div className="border-b p-2 flex space-x-2">
              <button
                onClick={() => challengeEditor?.chain().focus().toggleBold().run()}
                className={`p-2 rounded ${
                  challengeEditor?.isActive('bold') ? 'bg-gray-100' : ''
                }`}
              >
                <Bold className="w-5 h-5" />
              </button>
              <button
                onClick={() => challengeEditor?.chain().focus().toggleItalic().run()}
                className={`p-2 rounded ${
                  challengeEditor?.isActive('italic') ? 'bg-gray-100' : ''
                }`}
              >
                <Italic className="w-5 h-5" />
              </button>
            </div>
            <EditorContent editor={challengeEditor} className="p-4 min-h-[200px]" />
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Solution
          </label>
          <div className="border rounded-lg">
            <div className="border-b p-2 flex space-x-2">
              <button
                onClick={() => solutionEditor?.chain().focus().toggleBold().run()}
                className={`p-2 rounded ${
                  solutionEditor?.isActive('bold') ? 'bg-gray-100' : ''
                }`}
              >
                <Bold className="w-5 h-5" />
              </button>
              <button
                onClick={() => solutionEditor?.chain().focus().toggleItalic().run()}
                className={`p-2 rounded ${
                  solutionEditor?.isActive('italic') ? 'bg-gray-100' : ''
                }`}
              >
                <Italic className="w-5 h-5" />
              </button>
            </div>
            <EditorContent editor={solutionEditor} className="p-4 min-h-[200px]" />
          </div>
        </div>

        {/* Results Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Results
          </label>
          <div className="border rounded-lg">
            <div className="border-b p-2 flex space-x-2">
              <button
                onClick={() => resultsEditor?.chain().focus().toggleBold().run()}
                className={`p-2 rounded ${
                  resultsEditor?.isActive('bold') ? 'bg-gray-100' : ''
                }`}
              >
                <Bold className="w-5 h-5" />
              </button>
              <button
                onClick={() => resultsEditor?.chain().focus().toggleItalic().run()}
                className={`p-2 rounded ${
                  resultsEditor?.isActive('italic') ? 'bg-gray-100' : ''
                }`}
              >
                <Italic className="w-5 h-5" />
              </button>
            </div>
            <EditorContent editor={resultsEditor} className="p-4 min-h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}