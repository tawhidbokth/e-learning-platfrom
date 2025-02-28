import React from 'react';

const NewsletterSubscription = () => {
  return (
    <section className="bg-gradient-to-r bg-gray-500 py-16 mb-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with New Courses
        </h2>
        <p className="text-xl text-white mb-8">
          Subscribe to our newsletter to get the latest course updates,
          discounts, and exclusive offers.
        </p>
        <form className="max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full md:w-1/3 bg-white text-blue-600 font-semibold py-4 px-6 rounded-lg hover:bg-blue-50 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
