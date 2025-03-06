import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'; // Import icons

const CategoryInput = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      icon: '💻',
      title: 'Technology',
      description: 'Explore the latest in tech and innovation.',
    },
    {
      id: 2,
      icon: '🌿',
      title: 'Lifestyle',
      description: 'Tips and trends for a better lifestyle.',
    },
    {
      id: 3,
      icon: '📚',
      title: 'Education',
      description: 'Learn something new every day.',
    },
  ]);
  const [newCategory, setNewCategory] = useState({
    icon: '',
    title: '',
    description: '',
  });
  const [editingCategory, setEditingCategory] = useState(null);

  const handleAddCategory = () => {
    if (!newCategory.icon || !newCategory.title || !newCategory.description) {
      alert('Please fill in all fields!');
      return;
    }
    const category = {
      id: categories.length + 1,
      ...newCategory,
    };
    setCategories([...categories, category]);
    setNewCategory({ icon: '', title: '', description: '' });
  };

  const handleEditCategory = category => {
    setEditingCategory(category);
    setNewCategory({
      icon: category.icon,
      title: category.title,
      description: category.description,
    });
  };

  const handleUpdateCategory = () => {
    if (!newCategory.icon || !newCategory.title || !newCategory.description) {
      alert('Please fill in all fields!');
      return;
    }
    const updatedCategories = categories.map(cat =>
      cat.id === editingCategory.id ? { ...cat, ...newCategory } : cat
    );
    setCategories(updatedCategories);
    setEditingCategory(null);
    setNewCategory({ icon: '', title: '', description: '' });
  };

  const handleDeleteCategory = id => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Categories</h2>

      {/* Add/Edit Category Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {editingCategory ? 'Edit Category' : 'Add New Category'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="icon">
              Icon
            </label>
            <input
              type="text"
              id="icon"
              value={newCategory.icon}
              onChange={e =>
                setNewCategory({ ...newCategory, icon: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter an emoji or icon"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newCategory.title}
              onChange={e =>
                setNewCategory({ ...newCategory, title: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category title"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={newCategory.description}
              onChange={e =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category description"
              rows="3"
            />
          </div>
          <button
            onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaPlus className="inline-block" />
            {editingCategory ? 'Update Category' : 'Add Category'}
          </button>
        </div>
      </div>

      {/* Categories List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Categories</h3>
        <ul className="space-y-4">
          {categories.map(category => (
            <li
              key={category.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h4 className="text-lg font-semibold">{category.title}</h4>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditCategory(category)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryInput;
