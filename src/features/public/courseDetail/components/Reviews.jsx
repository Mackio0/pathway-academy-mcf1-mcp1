import React from 'react'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import avatar3 from '../../../../assets/avatar/avatar3.jpg'
import avatar4 from '../../../../assets/avatar/avatar4.jpg'


const Reviews = () => {
  const reviews = [
    {
      name: "Nix Maxwell",
      date: "Nov 12, 2024",
      content: "The course content is well-organized that makes students easy to follow, but there is limited amount of examples and exercises for students to learn how to apply the knowledge in real world situation.",
      likes: 23,
      dislikes: 4,
      avatar: avatar3
    },
    {
      name: "Nix Maxwell",
      date: "Nov 12, 2024",
      content: "I loved it! Dr. Chuck is extraordinary in his explanations. A great way to start on Javascript programming. As a person that hasn't programmed in years it was an encouraging and educational experience :-)",
      likes: 23,
      dislikes: 4,
      avatar: avatar4
    }
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our student reviews</h1>
      
      <div className="flex gap-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">4.5</div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
            <Star
  key={i}
  className={`w-5 h-5 ${
    i < 4
      ? 'fill-yellow-400 text-yellow-400'
      : i === 4
      ? 'fill-yellow-400/50 text-yellow-400' // Half star condition
      : 'fill-gray-100 text-gray-100'
  }`}
/>
            ))}
          </div>
          <div className="text-sm text-gray-600">(Based on today reviews)</div>
        </div>

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((stars, index) => (
            <div key={stars} className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded">
                <div 
                  className="h-2 bg-yellow-400 rounded" 
                  style={{width: `${[75, 60, 45, 30, 15][index]}%`}} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-4">
            <img 
              src={review.avatar} 
              alt={review.name}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-600">Reviewed on {review.date}</span>
              </div>
              <p className="text-gray-700 mb-3">{review.content}</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                  <ThumbsUp className="w-4 h-4" />
                  {review.likes}
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                  <ThumbsDown className="w-4 h-4" />
                  {review.dislikes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews

