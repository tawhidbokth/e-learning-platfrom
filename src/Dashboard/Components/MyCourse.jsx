import React, { useState } from 'react';

const MyCourse = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'JavaScript Mastery',
      category: 'Programming',
      price: 29.99,
    },
    { id: 2, title: 'UI/UX Design Fundamentals', category: 'Design', price: 0 },
    {
      id: 3,
      title: 'Python for Beginners',
      category: 'Programming',
      price: 19.99,
    },
  ]);

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Courses</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr
                  key={course.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">{course.id}</td>
                  <td className="p-4">{course.title}</td>
                  <td className="p-4">{course.category}</td>
                  <td className="p-4">${course.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
