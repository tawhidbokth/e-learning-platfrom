import React, { useState } from 'react';

const AdminDashboard = () => {
  // Dummy data for courses
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

  // Dummy data for students
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', enrolledCourses: 3 },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      enrolledCourses: 5,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      enrolledCourses: 2,
    },
  ]);

  // Dummy data for instructors
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', coursesTaught: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', coursesTaught: 3 },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      coursesTaught: 7,
    },
  ]);

  // State for adding a new course
  const [newCourse, setNewCourse] = useState({
    title: '',
    category: '',
    price: '',
  });

  // Add a new course
  const handleAddCourse = () => {
    if (newCourse.title && newCourse.category && newCourse.price) {
      const course = {
        id: courses.length + 1,
        title: newCourse.title,
        category: newCourse.category,
        price: parseFloat(newCourse.price),
      };
      setCourses([...courses, course]);
      setNewCourse({ title: '', category: '', price: '' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

        {/* Add New Course Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newCourse.title}
                  onChange={e =>
                    setNewCourse({ ...newCourse, title: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Course Title"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  value={newCourse.category}
                  onChange={e =>
                    setNewCourse({ ...newCourse, category: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Course Category"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  value={newCourse.price}
                  onChange={e =>
                    setNewCourse({ ...newCourse, price: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Course Price"
                />
              </div>
            </div>
            <button
              onClick={handleAddCourse}
              className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add Course
            </button>
          </div>
        </div>

        {/* Courses Section */}
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

        {/* Students Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Students</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Enrolled Courses</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4">{student.id}</td>
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.email}</td>
                    <td className="p-4">{student.enrolledCourses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Instructors Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Instructors</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Courses Taught</th>
                </tr>
              </thead>
              <tbody>
                {instructors.map(instructor => (
                  <tr
                    key={instructor.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4">{instructor.id}</td>
                    <td className="p-4">{instructor.name}</td>
                    <td className="p-4">{instructor.email}</td>
                    <td className="p-4">{instructor.coursesTaught}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
