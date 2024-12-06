
import React, { useState } from 'react'


import { Clock, BookOpen, GraduationCap, Languages, Award, Heart, Badge } from 'lucide-react'


const Overview = () => {
    const skills = [
        "Web Development",
        "Problem-Solving",
        "Asynchronous Programming",
        "Programming Paradigms",
        "Frameworks/Libraries",
        "Version Control",
      ];
  return (
    <div className="mt-6 space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">Course Description</h1>
                  <p className="mb-4">
                    Welcome to the <span className="font-semibold">Getting start with Javascript course</span>{" "}
                    (Over 36 hours of content)
                  </p>
                  <p className="text-gray-600">
                    Pathway Academy offers a wide range of courses designed to help individuals unlock their full potential. 
                    Whether you're looking to learn new skills, enhance your expertise, or explore new passions, our expert 
                    instructors provide the knowledge, support, and resources to help you succeed. With flexible, engaging 
                    content and a focus on practical application, our courses are tailored to guide you on your personal 
                    and professional journey. Start your path to success today with Pathway Academy!
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">What you will learn</h2>
                  <ul className="space-y-3">
                    {[
                      "Extensive, informative and interesting video lecture",
                      "Complete Code demonstrated in lecture",
                      "Lab Exercises",
                      "All Powerpoint Demonstrations Used in Course",
                      "Instructor contact Email for questions and clarifications",
                      "Coverage of all important primary Javascript concepts",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-green-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Skills you will gain</h2>
                  <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
        <p key={skill} className=' border border-gray-300 px-4 py-2 ' >
          {skill}
        </p>
      ))}
                  </div>
                </div>
              </div>
  )
}

export default Overview
