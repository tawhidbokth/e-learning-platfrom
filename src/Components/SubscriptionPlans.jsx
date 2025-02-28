import React from 'react';
import { Link } from 'react-router-dom';

const SubscriptionPlans = () => {
  // Dummy data for subscription plans
  const plans = [
    {
      id: 1,
      name: 'Free',
      price: '$0',
      features: [
        'Access to free courses',
        'Limited course materials',
        'Community support',
        'No certificate',
      ],
      buttonText: 'Get Started',
      buttonColor: 'bg-gray-500 hover:bg-gray-600',
    },
    {
      id: 2,
      name: 'Monthly',
      price: '$29/month',
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Priority support',
        'Certificate of completion',
      ],
      buttonText: 'Subscribe Now',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 3,
      name: 'Yearly',
      price: '$299/year',
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Priority support',
        'Certificate of completion',
        '2 months free',
      ],
      buttonText: 'Subscribe Now',
      buttonColor: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Subscription Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                plan.name === 'Yearly' ? 'border-4 border-green-500' : ''
              }`}
            >
              {plan.name === 'Yearly' && (
                <div className="bg-green-500 text-white text-center py-2">
                  <span className="font-semibold">Recommended</span>
                </div>
              )}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="text-left mb-8">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 mb-3 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/subscribe/${plan.name.toLowerCase()}`} // Replace with your subscription route
                  className={`block w-full ${plan.buttonColor} text-white py-3 px-6 rounded-full text-center transition duration-300`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
