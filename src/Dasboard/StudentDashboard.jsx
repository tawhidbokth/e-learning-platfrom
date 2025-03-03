import React from 'react';

const StudentDashboard = () => {
  // Dummy data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: 'JavaScript Mastery',
      progress: 75,
      image: 'https://via.placeholder.com/400x200',
      instructor: 'John Doe',
      duration: '10 hours',
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      progress: 50,
      image: 'https://via.placeholder.com/400x200',
      instructor: 'Jane Smith',
      duration: '8 hours',
    },
    {
      id: 3,
      title: 'Python for Beginners',
      progress: 90,
      image: 'https://via.placeholder.com/400x200',
      instructor: 'Alice Johnson',
      duration: '12 hours',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">My Courses</h1>

        {/* Enrolled Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledCourses.map(course => (
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
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Instructor:</span>{' '}
                  {course.instructor}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Duration:</span>{' '}
                  {course.duration}
                </p>
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {course.progress}% Complete
                  </p>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
