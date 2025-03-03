import React from 'react';

const PaymentHistoryPage = () => {
  // Dummy data for payment history
  const paymentHistory = [
    {
      id: 1,
      date: '2023-10-01',
      description: 'Monthly Subscription',
      amount: '$29.99',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2023-09-01',
      description: 'Monthly Subscription',
      amount: '$29.99',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2023-08-01',
      description: 'Yearly Subscription',
      amount: '$299.99',
      status: 'Completed',
    },
  ];

  // Dummy data for subscription plans
  const subscriptionPlans = [
    {
      id: 1,
      name: 'Monthly Subscription',
      price: '$29.99/month',
      status: 'Active',
      nextBillingDate: '2023-11-01',
    },
    {
      id: 2,
      name: 'Yearly Subscription',
      price: '$299.99/year',
      status: 'Inactive',
      nextBillingDate: 'N/A',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Payment & Order History
        </h1>

        {/* Payment History Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Payment History</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map(payment => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4">{payment.date}</td>
                    <td className="p-4">{payment.description}</td>
                    <td className="p-4">{payment.amount}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          payment.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subscription Plans Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptionPlans.map(plan => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Price:</span> {plan.price}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Status:</span>{' '}
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      plan.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {plan.status}
                  </span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Next Billing Date:</span>{' '}
                  {plan.nextBillingDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
