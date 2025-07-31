import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: 'What are your opening hours?',
      answer: 'Our restaurant is open from 9AM to 9PM every day. Please note our kitchen may close earlier.'
    },
    {
      question: 'Do you offer vegetarian/vegan/gluten-free options?',
      answer: 'Yes, we have a variety of options for vegetarians, vegans, and gluten-free dietary needs.'
    },
    {
      question: 'Can I track the status of my online order?',
      answer: 'Yes! You’ll receive an order confirmation email and real-time tracking through our site or app.'
    },
    {
      question: 'Do you offer contactless delivery and curbside pickup options?',
      answer: 'Absolutely! You can select your preferred delivery method during checkout for a safe experience.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-blue-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-purple-700">FAQs</h2>
          <p className="text-lg text-gray-500 mt-2">Frequently Asked Questions</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b pb-4">
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                <span>{faq.question}</span>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                     fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
