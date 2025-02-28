import React from 'react';
import { Link } from 'react-router-dom';

const FreeCoursesTrial = () => {
  const freeCourses = [
    {
      id: 1,
      title: 'Introduction to HTML & CSS',
      description: 'Learn the basics of web development with HTML and CSS.',
      image: 'https://i.ibb.co.com/VY2DFpZL/c1.jpg',
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      description: 'Get started with JavaScript programming fundamentals.',
      image: 'https://i.ibb.co.com/VY2DFpZL/c1.jpg',
    },
    {
      id: 3,
      title: 'Python for Beginners',
      description: 'Start your programming journey with Python.',
      image: 'https://i.ibb.co.com/VY2DFpZL/c1.jpg',
    },
    {
      id: 4,
      title: 'Digital Marketing Essentials',
      description:
        'Learn the basics of SEO, social media, and email marketing.',
      image: 'https://i.ibb.co.com/VY2DFpZL/c1.jpg',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Free Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeCourses.map(course => (
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
                <Link
                  to={`/course/${course.id}`} // Replace with your course detail route
                  className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600 transition duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Start Your Free Trial Today!
          </h3>
          <p className="text-gray-600 mb-6">
            Get access to all our premium courses with a 7-day free trial.
          </p>
          <Link
            to="/free-trial" // Replace with your free trial route
            className="inline-block bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreeCoursesTrial;
