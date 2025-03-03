import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'JavaScript Mastery',
      category: 'Programming',
      price: 29.99,
      rating: 4.7,
      duration: '10 hours',
      isFree: false,
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      price: 0,
      rating: 4.5,
      duration: '8 hours',
      isFree: true,
    },
    {
      id: 3,
      title: 'Python for Beginners',
      category: 'Programming',
      price: 19.99,
      rating: 4.8,
      duration: '12 hours',
      isFree: false,
    },
    {
      id: 4,
      title: 'Digital Marketing 101',
      category: 'Business',
      price: 0,
      rating: 4.6,
      duration: '6 hours',
      isFree: true,
    },
    {
      id: 5,
      title: 'Advanced React Development',
      category: 'Programming',
      price: 39.99,
      rating: 4.9,
      duration: '15 hours',
      isFree: false,
    },
    {
      id: 6,
      title: 'Islamic Finance Basics',
      category: 'Islamic Studies',
      price: 24.99,
      rating: 4.7,
      duration: '9 hours',
      isFree: false,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFreeCourses, setShowFreeCourses] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    'All',
    ...new Set(courses.map(course => course.category)),
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesFree = !showFreeCourses || course.isFree;
    return matchesCategory && matchesFree;
  });

  // Pagination logic
  const coursesPerPage = 6;
  const pageCount = Math.ceil(filteredCourses.length / coursesPerPage);
  const offset = currentPage * coursesPerPage;
  const currentCourses = filteredCourses.slice(offset, offset + coursesPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">All Courses</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <label className="text-gray-700 mr-2">Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-700 mr-2">
              Show Free Courses Only:
            </label>
            <input
              type="checkbox"
              checked={showFreeCourses}
              onChange={e => setShowFreeCourses(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Course List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.category}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2 text-gray-600">({course.rating})</span>
                </div>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Duration:</span>{' '}
                  {course.duration}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Price:</span>{' '}
                  {course.isFree ? (
                    <span className="text-green-500">Free</span>
                  ) : (
                    `$${course.price}`
                  )}
                </p>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-center mt-8 space-x-4'}
          pageClassName={'px-4 py-2 border border-gray-300 rounded-lg'}
          activeClassName={'bg-blue-500 text-white'}
          previousClassName={'px-4 py-2 border border-gray-300 rounded-lg'}
          nextClassName={'px-4 py-2 border border-gray-300 rounded-lg'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
        />
      </div>
    </div>
  );
};

export default Courses;
