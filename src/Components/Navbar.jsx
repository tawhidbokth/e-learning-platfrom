import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from './../Provider/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/details/:id"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Details
      </NavLink>
      <NavLink
        to="/liveupdates"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Live Class
      </NavLink>
      <NavLink
        to="/instractar"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Instructors
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/priceing"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `px-4 py-2 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <header className="bg-gray-900 text-white  w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co.com/TTr45kQ/weblogo.png"
            alt="Savory Delight"
          />
          <span className="text-xl font-bold ml-3">Home Decoration</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-4">{navLinks}</nav>

        {/* User Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition duration-300"
              >
                Sign Out
              </button>
              <div className="relative">
                <div className="cursor-pointer" onClick={toggleDropdown}>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt="User Profile"
                  />
                </div>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                    <div className="p-4">
                      <p className="font-semibold">{user.displayName}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="flex flex-col p-4 space-y-4">{navLinks}</div>
          <div className="p-4 border-t border-gray-700">
            {user ? (
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition duration-300"
                >
                  Sign Out
                </button>
                <div className="relative">
                  <div className="cursor-pointer" onClick={toggleDropdown}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                      alt="User Profile"
                    />
                  </div>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                      <div className="p-4">
                        <p className="font-semibold">{user.displayName}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="w-full px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition duration-300 text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}

      <ToastContainer />
    </header>
  );
};

export default Navbar;
