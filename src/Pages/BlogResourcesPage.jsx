import React from 'react';

const BlogResourcesPage = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 JavaScript Tips for Beginners',
      description:
        'Learn the best practices and tips to master JavaScript as a beginner.',
      image: 'https://via.placeholder.com/400x200',
      date: 'October 20, 2023',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'How to Build a Responsive Website',
      description:
        'A step-by-step guide to creating responsive websites using HTML, CSS, and JavaScript.',
      image: 'https://via.placeholder.com/400x200',
      date: 'October 18, 2023',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Introduction to Python Programming',
      description:
        'Get started with Python programming with this beginner-friendly guide.',
      image: 'https://via.placeholder.com/400x200',
      date: 'October 15, 2023',
      author: 'Alice Johnson',
    },
    {
      id: 4,
      title: 'Digital Marketing Trends in 2023',
      description:
        'Explore the latest trends in digital marketing and how to leverage them for your business.',
      image: 'https://via.placeholder.com/400x200',
      date: 'October 10, 2023',
      author: 'Michael Brown',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Blog & Resources
        </h1>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-sm text-gray-500">By {post.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogResourcesPage;
