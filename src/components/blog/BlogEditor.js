// components/blog/BlogEditor.js
import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Bold, Italic, List, ListOrdered, Image as ImageIcon } from 'lucide-react';

export function BlogEditor({ initialData, onSave }) {
  // Initialize state with initial data or defaults
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    excerpt: initialData?.excerpt || '',
    featuredImage: initialData?.featuredImage || '',
    industry: initialData?.industry || '',
    status: initialData?.status || 'draft'
  });
  const [isSaving, setIsSaving] = useState(false);

  // Initialize TipTap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
    ],
    content: initialData?.content || '',
    editorProps: {
      attributes: {
        class: 'prose prose-lg focus:outline-none max-w-none min-h-[300px] p-4',
      },
    },
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
    if (!editor) return;
    
    setIsSaving(true);
    try {
      await onSave({
        ...formData,
        content: editor.getHTML()
      });
    } catch (error) {
      console.error('Error saving blog post:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header with Save Button */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          {initialData ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <div className="flex space-x-4">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {/* Main Form */}
      <div className="space-y-6 bg-white rounded-lg p-6 shadow-sm">
        {/* Title Input */}
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
            placeholder="Enter post title"
          />
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

        {/* Rich Text Editor */}
        <div className="border rounded-lg">
          <div className="border-b p-2 flex space-x-2">
            <button
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`p-2 rounded ${
                editor?.isActive('bold') ? 'bg-gray-100' : ''
              }`}
            >
              <Bold className="w-5 h-5" />
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`p-2 rounded ${
                editor?.isActive('italic') ? 'bg-gray-100' : ''
              }`}
            >
              <Italic className="w-5 h-5" />
            </button>
            <button
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded ${
                editor?.isActive('bulletList') ? 'bg-gray-100' : ''
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <EditorContent editor={editor} />
        </div>

        {/* Additional Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
            rows={3}
            placeholder="Enter post excerpt"
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
      </div>
    </div>
  );
}