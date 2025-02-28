import React from 'react';

const PopularCourses = () => {
  // Dummy data for popular courses

  //   https://i.ibb.co.com/VY2DFpZL/c1.jpg
  // https://i.ibb.co.com/fdbvWr2c/c2.webp
  // https://i.ibb.co.com/LKrYmvq/c3.png
  // https://i.ibb.co.com/TD9GKCMm/c4.jpg
  // https://i.ibb.co.com/nqbkGBz5/c5.jpg
  // https://i.ibb.co.com/5hQ2DBY6/c6.png
  const courses = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/VY2DFpZL/c1.jpg',
      title: 'JavaScript Mastery',
      description:
        'Learn JavaScript from scratch and build real-world projects.',
      rating: 4.7,
    },
    {
      id: 2,
      image: 'https://i.ibb.co.com/fdbvWr2c/c2.webp',
      title: 'UI/UX Design Fundamentals',
      description: 'Master the basics of UI/UX design with Figma and Adobe XD.',
      rating: 4.5,
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/LKrYmvq/c3.png',
      title: 'Python for Beginners',
      description: 'Start your programming journey with Python.',
      rating: 4.8,
    },
    {
      id: 4,
      image: 'https://i.ibb.co.com/TD9GKCMm/c4.jpg',
      title: 'Digital Marketing 101',
      description: 'Learn SEO, social media marketing, and Google Ads.',
      rating: 4.6,
    },
    {
      id: 5,
      image: 'https://i.ibb.co.com/nqbkGBz5/c5.jpg',
      title: 'Advanced React Development',
      description: 'Build scalable React applications with best practices.',
      rating: 4.9,
    },
    {
      id: 6,
      image: 'https://i.ibb.co.com/5hQ2DBY6/c6.png',
      title: 'Islamic Finance Basics',
      description: 'Understand the principles of Islamic banking and finance.',
      rating: 4.7,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2 text-gray-600">({course.rating})</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
