import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ContainerComponent from "../../../components/ContainerComponent.jsx";

const tabs = [
    { id: 'general', label: 'General' },
    { id: 'courses', label: 'Courses' },
    { id: 'subscription', label: 'Subscription' },
    { id: 'pricing', label: 'Pricing & Plan' }
]

const faqsByCategory = {
    general: [
        {
            id: 'g1',
            question: "What is your platform about?",
            answer: "Our platform offers a wide range of online courses to help you learn new skills and advance your career."
        },
        {
            id: 'g2',
            question: "How do I create an account?",
            answer: "You can create an account by clicking the 'Sign Up' button on the top right corner of our homepage and following the registration process."
        },
        {
            id: 'g3',
            question: "Can I sign up for a trial?",
            answer: "Yes, you can sign up for a trial by clicking the 'Sign Up' button on the top right corner of our homepage and following the registration process."
        },
        {
            id: 'g4',
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password."
        },
        {
            id: 'g5',
            question: "Are there any discounts or promotions for courses?",
            answer: "Yes, we regularly offer discounts and promotional deals. Sign up for our newsletter to stay updated on the latest offers and course bundles."
        },
        {
            id: 'g6',
            question: "How can I contact my instructor if I have questions?",
            answer: "You can contact your instructor directly through the course dashboard using our messaging system. Most instructors respond within 24-48 hours."
        }
    ],
    courses: [
        {
            id: 'c1',
            question: "What types of courses do you offer?",
            answer: "We offer courses in various fields including programming, design, business, marketing, and personal development."
        },
        {
            id: 'c2',
            question: "Can I access courses on my mobile device?",
            answer: "Yes, all our courses are fully responsive and can be accessed on any device including smartphones and tablets."
        }
    ],
    subscription: [
        {
            id: 's1',
            question: "What subscription plans do you offer?",
            answer: "We offer monthly and annual subscription plans. The annual plan comes with a significant discount compared to the monthly plan."
        },
        {
            id: 's2',
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
        }
    ],
    pricing: [
        {
            id: 'p1',
            question: "How much does a subscription cost?",
            answer: "Our subscription prices vary depending on the plan. Please check our pricing page for the most up-to-date information."
        },
        {
            id: 'p2',
            question: "Are there any discounts or promotions for courses?",
            answer: "Yes, we regularly offer discounts and promotional offers. Subscribe to our newsletter to stay updated about upcoming deals."
        }
    ]
}

const DynamicFAQSection = () => {
    const [activeTab, setActiveTab] = useState('general')
    const [openItem, setOpenItem] = useState(null)

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <ContainerComponent>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Popular Frequently Asked Questions
            </h2>

           <div className={'max-w-[1000px] mx-auto'}>
               {/* Tabs */}
               <div className="flex flex-wrap justify-center gap-2 mb-8">
                   {tabs.map((tab) => (
                       <button
                           key={tab.id}
                           onClick={() => setActiveTab(tab.id)}
                           className={`px-4 py-2 rounded-[6px] text-sm font-medium transition-colors
              ${activeTab === tab.id
                               ? 'bg-gray-900 text-white'
                               : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                       >
                           {tab.label}
                       </button>
                   ))}
               </div>

               {/* FAQ Items */}
               <div className="space-y-4 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mx-auto">
                   {faqsByCategory[activeTab].map((faq) => (
                       <div
                           key={faq.id}
                           className="border border-gray-200 rounded-lg overflow-hidden col-span-full"
                       >
                           <button
                               onClick={() => toggleItem(faq.id)}
                               className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                           >
                               <span className="font-medium text-gray-900">{faq.question}</span>
                               <ChevronDown
                                   className={`w-5 h-5 text-gray-500 transition-transform duration-200
                  ${openItem === faq.id ? 'transform rotate-180' : ''}`}
                               />
                           </button>

                           <div
                               className={`overflow-hidden transition-all duration-200 ease-in-out
                ${openItem === faq.id ? 'max-h-48' : 'max-h-0'}`}
                           >
                               <div className="p-4 pt-0 text-gray-600 text-sm">
                                   {faq.answer}
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
        </ContainerComponent>
    )
}

export default DynamicFAQSection