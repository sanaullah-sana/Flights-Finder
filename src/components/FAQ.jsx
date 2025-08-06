import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I search for flights?",
    answer: "Simply enter your origin, destination, and travel dates, then click the 'Search Flights' button to view available flight options."
  },
  {
    question: "Is this flight search free to use?",
    answer: "Yes! Our flight search is completely free and designed to help you find the best deals for your journey."
  },
  {
    question: "How accurate is the flight information?",
    answer: "We fetch real-time flight data from Amadeus API, ensuring up-to-date and accurate flight details."
  },
  {
    question: "Can I book flights directly?",
    answer: "Currently, we only display available flight options. You can select a flight and proceed with booking through the airline's website."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-10 px-4 sm:px-6 md:px-8 py-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-3">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left text-base sm:text-lg md:text-xl font-semibold text-gray-800 focus:outline-none"
          >
            {faq.question}
            <FaChevronDown
              className={`ml-2 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""}`}
            />
          </button>
          {openIndex === index && (
            <p className="mt-2 text-sm sm:text-base text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
