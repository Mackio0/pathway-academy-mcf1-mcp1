import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'



export default function FAQAccordion({faqs}) {
    const [openId, setOpenId] = useState(null)

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="max-w-[391px] md:max-w-[700px] mx-auto lg:max-w-[1000px]">
            <div className="text-center mb-8">
                <span className="text-orange-500 font-medium mb-2 block">FAQ</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Popular Frequently Ask Questions
                </h2>
            </div>

            <div className="space-y-[8px]">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => toggleAccordion(faq.id)}
                            className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                        >
              <span className="text-sm sm:text-base font-medium text-gray-900">
                {faq.question}
              </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 
                  ${openId === faq.id ? 'transform rotate-180' : ''}`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-200 ease-in-out
                ${openId === faq.id ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <div className="p-4 sm:p-6 pt-0 text-sm sm:text-base text-gray-600 bg-white">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}