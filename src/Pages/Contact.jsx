import React from 'react';

const Contact = () => {
  return (
    <div className="m-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Live Chat */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Live Chat Support</h3>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you. Click the button
            below to start a live chat.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Start Live Chat
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
