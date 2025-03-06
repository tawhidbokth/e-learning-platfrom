import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const PricingManagement = () => {
  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 1,
      title: 'Basic Plan',
      price: 29.99,
      duration: 'Monthly',
      features: ['Access to all courses', 'Community support'],
    },
    {
      id: 2,
      title: 'Pro Plan',
      price: 99.99,
      duration: 'Yearly',
      features: [
        'Access to all courses',
        'Priority support',
        'Certificate of completion',
      ],
    },
  ]);
  const [newPlan, setNewPlan] = useState({
    title: '',
    price: '',
    duration: '',
    features: [],
  });
  const [editingPlan, setEditingPlan] = useState(null);
  const [newFeature, setNewFeature] = useState('');

  const handleAddPlan = () => {
    if (!newPlan.title || !newPlan.price || !newPlan.duration) {
      alert('Please fill in all fields!');
      return;
    }
    const plan = {
      id: pricingPlans.length + 1,
      ...newPlan,
    };
    setPricingPlans([...pricingPlans, plan]);
    setNewPlan({ title: '', price: '', duration: '', features: [] });
  };

  const handleEditPlan = plan => {
    setEditingPlan(plan);
    setNewPlan({
      title: plan.title,
      price: plan.price,
      duration: plan.duration,
      features: plan.features,
    });
  };

  const handleUpdatePlan = () => {
    if (!newPlan.title || !newPlan.price || !newPlan.duration) {
      alert('Please fill in all fields!');
      return;
    }
    const updatedPlans = pricingPlans.map(plan =>
      plan.id === editingPlan.id ? { ...plan, ...newPlan } : plan
    );
    setPricingPlans(updatedPlans);
    setEditingPlan(null);
    setNewPlan({ title: '', price: '', duration: '', features: [] });
  };

  const handleDeletePlan = id => {
    setPricingPlans(pricingPlans.filter(plan => plan.id !== id));
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewPlan({ ...newPlan, features: [...newPlan.features, newFeature] });
      setNewFeature('');
    }
  };

  const handleRemoveFeature = feature => {
    setNewPlan({
      ...newPlan,
      features: newPlan.features.filter(f => f !== feature),
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Pricing Plans</h2>

      {/* Add/Edit Plan Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {editingPlan ? 'Edit Plan' : 'Add New Plan'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newPlan.title}
              onChange={e => setNewPlan({ ...newPlan, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter plan title"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={newPlan.price}
              onChange={e =>
                setNewPlan({ ...newPlan, price: parseFloat(e.target.value) })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter plan price"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="duration">
              Duration
            </label>
            <select
              id="duration"
              value={newPlan.duration}
              onChange={e =>
                setNewPlan({ ...newPlan, duration: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select duration
              </option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="features">
              Features
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="features"
                value={newFeature}
                onChange={e => setNewFeature(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a feature"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {newPlan.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mt-2"
                >
                  <span className="text-gray-700">{feature}</span>
                  <button
                    onClick={() => handleRemoveFeature(feature)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={editingPlan ? handleUpdatePlan : handleAddPlan}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaPlus className="inline-block" />
            {editingPlan ? 'Update Plan' : 'Add Plan'}
          </button>
        </div>
      </div>

      {/* Pricing Plans List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Pricing Plans</h3>
        <ul className="space-y-4">
          {pricingPlans.map(plan => (
            <li
              key={plan.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
            >
              <div>
                <h4 className="text-lg font-semibold">{plan.title}</h4>
                <p className="text-gray-600">
                  ${plan.price} / {plan.duration}
                </p>
                <ul className="list-disc list-inside mt-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditPlan(plan)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeletePlan(plan.id)}
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

export default PricingManagement;
