const AddCourses = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Course Title"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Course Category"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              onChange={e =>
                setNewCourse({ ...newCourse, price: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Course Price"
            />
          </div>
        </div>
        <button className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Add Course
        </button>
      </div>
    </div>
  );
};

export default AddCourses;
