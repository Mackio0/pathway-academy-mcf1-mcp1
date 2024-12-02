
import React from 'react'
import { User, AlertTriangle, ShoppingCart, Newspaper, Lock, Rocket } from 'lucide-react'

const SupportCard = () => {
  const helpItems = [
    {
      icon: <User className="w-8 h-8" />,
      title: "My account",
      description: "Create and manage your pathway acadamy account"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Troubleshooting",
      description: "Experiencing a technical issue? Check Here"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Purchase/ Refund",
      description: "Learn about purchasing courses ,how to send gifts and refunds."
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Enrollment",
      description: "Find courses to take and learn about enrollment options."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Trust & Safety",
      description: "trust & safety information and reporting."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Getting Start",
      description: "Learn how our education works and how to start learning."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpItems.map((item, index) => (
          <div 
            key={index}
            className="bg-[#f5fbf9] p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SupportCard

