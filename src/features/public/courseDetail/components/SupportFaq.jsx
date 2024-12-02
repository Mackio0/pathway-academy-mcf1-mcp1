import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const SupportFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: "What types of courses do you offer?",
      answer: "We offer a wide range of courses including programming, design, business, and more. Our courses are designed for all skill levels, from beginners to advanced learners."
    },
    {
      question: "Can I access courses on my mobile device?",
      answer: "Yes, all our courses are fully accessible on mobile devices through our responsive web platform. You can learn anytime, anywhere."
    },
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password."
    },
    {
      question: "Are there any discounts or promotions for courses?",
      answer: "Yes, we regularly offer discounts and promotional deals. Sign up for our newsletter to stay updated on the latest offers and course bundles."
    },
    {
      question: "How can I contact my instructor if I have questions?",
      answer: "You can contact your instructor directly through the course dashboard using our messaging system. Most instructors respond within 24-48 hours."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied, you can request a full refund within this period."
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-[31px]  font-bold text-center mb-8">
        Popular Frequently Ask Questions
      </h1>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-[16px] font-medium">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="p-4  bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SupportFaq

