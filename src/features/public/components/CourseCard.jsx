import React from 'react'
import {BookOpen, Clock, Heart, Star} from "lucide-react";

const CourseCard = ({course}) => {
    return (
        <div
            className="bg-white rounded-[6px] border border-[#E5E5E5] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                />
                <div
                    className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                    <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded">
                      {course.category}
                    </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'px-2 py-2'}>
                <div className={'flex items-center justify-between'}>
                     <span
                         className="px-2 py-1 bg-secondary text-white text-xs font-semibold rounded">
                      {course.level}
                    </span>
                    <button
                        className="p-1.5 rounded-full border border-para2 hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Add to favorites"
                    >
                        <Heart className="w-5 h-5 text-heading"/>
                    </button>
                </div>

                <div className="">
                    <h3 className="text-lg font-bold text-primary-600 mb-2 line-clamp-2">
                        {course.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-500 mb-4 justify-between">
                        <div className="flex items-center mr-4">
                            <BookOpen className="w-4 h-4 mr-1"/>
                            <span>{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1"/>
                            <span>{course.duration}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                            <span className="ml-1 text-sm font-semibold">{course.rating}/5.0</span>

                        </div>
                        <span className="ml-1 text-xs text-gray-500">
                    ({course.students.toLocaleString()} students)
                  </span>

                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className={'flex items-center'}>
                            <img
                                src={course.instructor.avatar}
                                alt={course.instructor.name}
                                className="w-10 h-10 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{course.instructor.name}</p>
                            </div>
                        </div>

                        <span className="text-lg font-bold text-emerald-600">
                  ${course.price.toFixed(2)}
                </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard
