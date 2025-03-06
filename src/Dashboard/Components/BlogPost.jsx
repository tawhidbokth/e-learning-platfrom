import React, { useState } from 'react';

const BlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    const blogPost = {
      title,
      content,
      category,
      image,
    };
    console.log('Blog Post Submitted:', blogPost);
    alert('Blog post submitted successfully!');
    // Reset form fields
    setTitle('');
    setContent('');
    setCategory('');
    setImage(null);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog post title"
            required
          />
        </div>

        {/* Content Input */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog post content"
            rows="6"
            required
          />
        </div>

        {/* Category Input */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Upload Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            onChange={e => setImage(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Publish Blog Post
        </button>
      </form>
    </div>
  );
};

export default BlogPost;
