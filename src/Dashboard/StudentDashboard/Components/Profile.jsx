import React from 'react';

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition-all hover:scale-105">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/cKQ7vzPS/gettyimages-1438969575-612x612.jpg" // Replace with your image URL
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Profile Details */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">johndoe@example.com</p>
          <p className="text-gray-600">ID: 123456789</p>
        </div>

        {/* Edit Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:from-blue-600 hover:to-purple-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
