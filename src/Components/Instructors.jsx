import React from 'react';
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      image:
        'https://i.ibb.co.com/8D9c9fqM/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4.jpg',
      bio: 'Senior Full-Stack Developer with 10+ years of experience in JavaScript, React, and Node.js.',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      experience: '10+ years',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image:
        'https://i.ibb.co.com/8D9c9fqM/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4.jpg',
      bio: 'UI/UX Designer specializing in Figma, Adobe XD, and user-centered design.',
      skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping'],
      experience: '8+ years',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      image:
        'https://i.ibb.co.com/8D9c9fqM/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4.jpg',
      bio: 'Data Scientist with expertise in Python, Machine Learning, and Data Visualization.',
      skills: ['Python', 'Machine Learning', 'Pandas', 'TensorFlow'],
      experience: '7+ years',
    },
    {
      id: 4,
      name: 'Michael Brown',
      image:
        'https://i.ibb.co.com/8D9c9fqM/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4.jpg',
      bio: 'Digital Marketing expert with a focus on SEO, Social Media, and Google Ads.',
      skills: [
        'SEO',
        'Social Media Marketing',
        'Google Ads',
        'Content Marketing',
      ],
      experience: '9+ years',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map(instructor => (
            <div
              key={instructor.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden text-center"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 mb-4">{instructor.bio}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800">Skills:</h4>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {instructor.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Experience:</span>{' '}
                  {instructor.experience}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-600"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="Website"
                  >
                    <FaGlobe className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
