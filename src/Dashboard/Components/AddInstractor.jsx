import React, { useState } from 'react';

const AddInstractor = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', coursesTaught: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', coursesTaught: 3 },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      coursesTaught: 7,
    },
  ]);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Instructors</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Courses Taught</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map(instructor => (
                <tr
                  key={instructor.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">{instructor.id}</td>
                  <td className="p-4">{instructor.name}</td>
                  <td className="p-4">{instructor.email}</td>
                  <td className="p-4">{instructor.coursesTaught}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddInstractor;
