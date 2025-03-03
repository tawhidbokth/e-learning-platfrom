import React from 'react';

const CourseDetailsPage = () => {
  // Dummy data for the course
  const course = {
    id: 1,
    title: 'JavaScript Mastery',
    description:
      'Learn JavaScript from scratch and build real-world projects. This course covers everything from basics to advanced concepts.',
    trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with your video URL
    syllabus: [
      'Introduction to JavaScript',
      'Variables and Data Types',
      'Functions and Scope',
      'DOM Manipulation',
      'Asynchronous JavaScript',
      'Building a Project',
    ],
    learningOutcomes: [
      'Understand JavaScript fundamentals',
      'Build interactive web applications',
      'Work with APIs and asynchronous code',
      'Debug and optimize JavaScript code',
    ],
    instructor: {
      name: 'John Doe',
      bio: 'Senior Full-Stack Developer with 10+ years of experience in JavaScript, React, and Node.js.',
      image: 'https://via.placeholder.com/150',
    },
    price: 29.99,
    rating: 4.7,
    duration: '10 hours',
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Course Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-gray-600">{course.description}</p>
        </div>

        {/* Course Trailer */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={course.trailer}
              title="Course Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Syllabus and Learning Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Syllabus */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.syllabus.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="text-gray-700">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructor Information */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4">Instructor</h2>
          <div className="flex items-center space-x-6">
            <img
              src={course.instructor.image}
              alt={course.instructor.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">
                {course.instructor.name}
              </h3>
              <p className="text-gray-600">{course.instructor.bio}</p>
            </div>
          </div>
        </div>

        {/* Course Details and Enrollment */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Course Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold">Price</h3>
              <p className="text-gray-600">${course.price}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Rating</h3>
              <p className="text-gray-600">{course.rating} ★</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Duration</h3>
              <p className="text-gray-600">{course.duration}</p>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const CourseDetailsPage = () => {
//   const { id } = useParams(); // Get course ID from URL
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     // Fetch course details from an API
//     fetch(`https://api.example.com/courses/${id}`)
//       .then(response => response.json())
//       .then(data => setCourse(data))
//       .catch(error => console.error('Error fetching course:', error));
//   }, [id]);

//   if (!course) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-6">
//         {/* Course Title and Description */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
//           <p className="text-xl text-gray-600">{course.description}</p>
//         </div>

//         {/* Course Trailer */}
//         <div className="mb-12">
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={course.trailer}
//               title="Course Trailer"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="rounded-lg shadow-lg"
//             ></iframe>
//           </div>
//         </div>

//         {/* Syllabus and Learning Outcomes */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
//           {/* Syllabus */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
//             <ul className="list-disc list-inside space-y-2">
//               {course.syllabus.map((item, index) => (
//                 <li key={index} className="text-gray-700">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Learning Outcomes */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
//             <ul className="list-disc list-inside space-y-2">
//               {course.learningOutcomes.map((outcome, index) => (
//                 <li key={index} className="text-gray-700">
//                   {outcome}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Instructor Information */}
//         <div className="bg-white p-8 rounded-lg shadow-md mb-12">
//           <h2 className="text-2xl font-bold mb-4">Instructor</h2>
//           <div className="flex items-center space-x-6">
//             <img
//               src={course.instructor.image}
//               alt={course.instructor.name}
//               className="w-24 h-24 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="text-xl font-semibold">
//                 {course.instructor.name}
//               </h3>
//               <p className="text-gray-600">{course.instructor.bio}</p>
//             </div>
//           </div>
//         </div>

//         {/* Course Details and Enrollment */}
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Course Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <h3 className="text-lg font-semibold">Price</h3>
//               <p className="text-gray-600">${course.price}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Rating</h3>
//               <p className="text-gray-600">{course.rating} ★</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Duration</h3>
//               <p className="text-gray-600">{course.duration}</p>
//             </div>
//           </div>
//           <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailsPage;
