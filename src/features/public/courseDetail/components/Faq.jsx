import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Example FAQ data
const faqContent = [
  {
    title: "What will I learn in this course?",
    details:
      "You’ll learn JavaScript fundamentals, including variables, functions, arrays, objects, DOM manipulation, and asynchronous programming. By the end, you’ll be able to build interactive, dynamic web pages and small projects.",
  },
  {
    title: "How long will it take to complete?",
    details:
      "The course typically takes around [X hours or weeks], depending on your pace. You’ll have access to materials so you can learn at your own speed.",
  },
  {
    title: "Are there any projects?",
    details:
      "Yes! You’ll work on hands-on projects, like a to-do list app and a simple calculator, to apply your JavaScript skills in real-world scenarios.",
  },
  {
    title: "Will I receive a certificate?",
    details:
      "Yes, upon completion of the course, you’ll receive a certificate of completion.",
  },
  {
    title: "What’s the next step after this course?",
    details:
      "After completing this course, you’ll be ready to explore more advanced JavaScript topics or dive into frameworks like React, Vue, or backend development with Node.js.",
  },
];

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border rounded bg-white shadow-sm mb-4">
      <button
        className="w-full px-4 py-2 text-left focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{faq.title}</span>
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {isOpen && <div className="px-4 py-2 text-gray-600">{faq.details}</div>}
    </div>
  );
}

export default function FAQAccordion() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === index ? null : index
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqContent.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          isOpen={openSection === index}
          onToggle={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}
