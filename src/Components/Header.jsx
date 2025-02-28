import React from 'react';

const Header = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6">
              Unlock Your Potential with Online Learning
            </h1>
            <p className="text-xl mb-8">
              Join thousands of students mastering new skills, advancing their
              careers, and exploring new hobbies.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-50 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://i.ibb.co.com/KcGrz77j/active-learning-in-the-classroom-1030x573.png"
              alt="Online Learning"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
