import React from 'react';
import { FaChalkboardTeacher, FaBook, FaPen } from 'react-icons/fa';

const LiveClassesLatestUpdates = () => {
  const upcomingClasses = [
    {
      id: 1,
      title: 'Advanced React Workshop',
      date: 'October 25, 2023',
      time: '10:00 AM - 12:00 PM',
      instructor: 'John Doe',
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      date: 'October 28, 2023',
      time: '2:00 PM - 4:00 PM',
      instructor: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Python for Data Science',
      date: 'November 1, 2023',
      time: '9:00 AM - 11:00 AM',
      instructor: 'Alice Johnson',
    },
  ];

  // Dummy data for newly published courses/blog updates
  const latestUpdates = [
    {
      id: 1,
      type: 'Course',
      title: 'JavaScript Fundamentals',
      description: 'A beginner-friendly course to master JavaScript basics.',
      publishedDate: 'October 20, 2023',
    },
    {
      id: 2,
      type: 'Blog',
      title: 'Top 10 UI/UX Design Trends in 2023',
      description: 'Explore the latest design trends shaping the industry.',
      publishedDate: 'October 18, 2023',
    },
    {
      id: 3,
      type: 'Course',
      title: 'Digital Marketing Essentials',
      description:
        'Learn the basics of SEO, social media, and email marketing.',
      publishedDate: 'October 15, 2023',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Live Classes & Latest Updates
        </h2>

        {/* Upcoming Classes Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Upcoming Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses.map(classItem => (
              <div
                key={classItem.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <FaChalkboardTeacher className="w-6 h-6 text-blue-500 mr-2" />
                  <h4 className="text-xl font-semibold">{classItem.title}</h4>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Date:</span> {classItem.date}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Time:</span> {classItem.time}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Instructor:</span>{' '}
                  {classItem.instructor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Updates Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Latest Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestUpdates.map(update => (
              <div
                key={update.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {update.type === 'Course' ? (
                    <FaBook className="w-6 h-6 text-blue-500 mr-2" />
                  ) : (
                    <FaPen className="w-6 h-6 text-green-500 mr-2" />
                  )}
                  <span className="text-sm text-blue-500 font-medium uppercase">
                    {update.type}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mt-2 mb-2">
                  {update.title}
                </h4>
                <p className="text-gray-600 mb-4">{update.description}</p>
                <p className="text-sm text-gray-500">
                  Published on: {update.publishedDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClassesLatestUpdates;
