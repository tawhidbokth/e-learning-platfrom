import React, { useState } from 'react';

const Students = () => {
  // Dummy data for students
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', enrolledCourses: 3 },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      enrolledCourses: 5,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      enrolledCourses: 2,
    },
  ]);

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Students</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Enrolled Courses</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">{student.id}</td>
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.email}</td>
                  <td className="p-4">{student.enrolledCourses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
