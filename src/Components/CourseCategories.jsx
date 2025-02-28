import React from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaMosque,
  FaBrain,
  FaGlobe,
} from 'react-icons/fa';

const CourseCategories = () => {
  const categories = [
    {
      id: 1,
      icon: <FaCode className="w-12 h-12 mx-auto mb-4 text-blue-500" />,
      title: 'Programming',
      description: 'Learn coding languages like Python, JavaScript, and more.',
    },
    {
      id: 2,
      icon: <FaPaintBrush className="w-12 h-12 mx-auto mb-4 text-purple-500" />,
      title: 'Design',
      description: 'Master UI/UX, Graphic Design, and Animation.',
    },
    {
      id: 3,
      icon: <FaChartLine className="w-12 h-12 mx-auto mb-4 text-green-500" />,
      title: 'Business',
      description: 'Explore entrepreneurship, marketing, and finance.',
    },
    {
      id: 4,
      icon: <FaMosque className="w-12 h-12 mx-auto mb-4 text-yellow-500" />,
      title: 'Islamic Studies',
      description: 'Deepen your knowledge of Quran, Hadith, and Fiqh.',
    },
    {
      id: 5,
      icon: <FaBrain className="w-12 h-12 mx-auto mb-4 text-red-500" />,
      title: 'Personal Development',
      description:
        'Improve your skills in leadership, communication, and more.',
    },
    {
      id: 6,
      icon: <FaGlobe className="w-12 h-12 mx-auto mb-4 text-indigo-500" />,
      title: 'Languages',
      description: 'Learn new languages like Arabic, Spanish, and French.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Course Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div>{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
