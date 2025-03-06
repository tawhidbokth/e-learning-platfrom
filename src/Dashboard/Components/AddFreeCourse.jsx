import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const FreeCourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript programming.',
      category: 'Programming',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      description: 'Master the basics of UI/UX design with Figma.',
      category: 'Design',
      image: 'https://via.placeholder.com/150',
    },
  ]);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
  });
  const [editingCourse, setEditingCourse] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleAddCourse = () => {
    if (!newCourse.title || !newCourse.description || !newCourse.category) {
      alert('Please fill in all fields!');
      return;
    }
    const course = {
      id: courses.length + 1,
      ...newCourse,
    };
    setCourses([...courses, course]);
    setNewCourse({ title: '', description: '', category: '', image: null });
    setImagePreview(null);
  };

  const handleEditCourse = course => {
    setEditingCourse(course);
    setNewCourse({
      title: course.title,
      description: course.description,
      category: course.category,
      image: course.image,
    });
    setImagePreview(course.image);
  };

  const handleUpdateCourse = () => {
    if (!newCourse.title || !newCourse.description || !newCourse.category) {
      alert('Please fill in all fields!');
      return;
    }
    const updatedCourses = courses.map(course =>
      course.id === editingCourse.id ? { ...course, ...newCourse } : course
    );
    setCourses(updatedCourses);
    setEditingCourse(null);
    setNewCourse({ title: '', description: '', category: '', image: null });
    setImagePreview(null);
  };

  const handleDeleteCourse = id => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse({ ...newCourse, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Free Courses</h2>

      {/* Add/Edit Course Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {editingCourse ? 'Edit Course' : 'Add New Course'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newCourse.title}
              onChange={e =>
                setNewCourse({ ...newCourse, title: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course title"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={newCourse.description}
              onChange={e =>
                setNewCourse({ ...newCourse, description: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course description"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={newCourse.category}
              onChange={e =>
                setNewCourse({ ...newCourse, category: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          <button
            onClick={editingCourse ? handleUpdateCourse : handleAddCourse}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaPlus className="inline-block" />
            {editingCourse ? 'Update Course' : 'Add Course'}
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Courses</h3>
        <ul className="space-y-4">
          {courses.map(course => (
            <li
              key={course.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-lg font-semibold">{course.title}</h4>
                  <p className="text-gray-600">{course.description}</p>
                  <span className="text-sm text-gray-500">
                    Category: {course.category}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditCourse(course)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreeCourseManagement;
