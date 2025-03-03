import React from 'react';

const FAQSupport = () => {
  // Dummy data for FAQs
  const faqs = [
    {
      id: 1,
      question: 'How do I enroll in a course?',
      answer:
        'You can enroll in a course by clicking the "Enroll Now" button on the course page. If the course is free, you’ll get immediate access. For paid courses, you’ll need to complete the payment process.',
    },
    {
      id: 2,
      question: 'Can I access courses offline?',
      answer:
        'Yes, you can download course materials for offline access if the instructor has enabled this feature.',
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer:
        'We accept credit/debit cards, PayPal, and other popular payment methods. You can view all options during checkout.',
    },
    {
      id: 4,
      question: 'Do you offer certificates of completion?',
      answer:
        'Yes, we offer certificates of completion for most courses. You can download them from your dashboard after finishing the course.',
    },
    {
      id: 5,
      question: 'How do I contact customer support?',
      answer:
        'You can reach out to our support team via the live chat below or by filling out the contact form. We typically respond within 24 hours.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          FAQ & Customer Support
        </h2>

        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSupport;
