import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for toggle button

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg md:hidden"
      >
        {isSidebarOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={` inset-y-0 left-0 bg-gray-800 text-white w-64 min-h-screen p-6 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard/overveiw"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/dashboard' ? 'bg-gray-700' : ''
                }`}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/paymenthistory"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/dashboard/paymenthistory'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Payment History
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myclass"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/dashboard/myclass'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                My Class
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/dashboard/profile'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/mycourses"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === 'dashboard/mycourses'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                My Courses
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/students"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/dashboard/students'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                All Students
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addcourses"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/dashboard/addcourses'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Add Courses
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard/blogpost"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/Dashboard/blogpost'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Blog Post
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard/addcategory"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/Dashboard/addcategory'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Add Category
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard/freecourse"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/Dashboard/freecourse'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Add Free Course
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard/instractor"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/admin-settings' ? 'bg-gray-700' : ''
                }`}
              >
                Instractor
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard/priceing"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/Dashboard/priceing'
                    ? 'bg-gray-700'
                    : ''
                }`}
              >
                Priceing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  location.pathname === '/' ? 'bg-gray-700' : ''
                }`}
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
