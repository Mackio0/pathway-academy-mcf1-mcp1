import { BookOpen, Clock, MoreVertical, Star, Users } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseLIstCard = ({ course }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="bg-white md:grid flex flex-col h-fit  md:grid-cols-12   rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative col-span-5">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full md:h-[300px]  object-cover"
        />
        <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded text-sm">
          {course.tag}
        </span>
      </div>

      <div className="p-5  md:col-span-7 flex flex-col gap-2 ">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span>{course.lessons} Lesson</span>
          </div>
          <div className="flex items-center gap-1 ">
            <Clock className="w-4 h-4  text-secondary" />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <span className="px-3 py-1 text-sm rounded bg-secondary text-white">
            Beginner
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className=" p-2 rounded border-solid border-stone-900 hover:bg-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 md:line-clamp-2">
          {course.description}
        </p>

        <div className=" gap-2 mb-4">
          <div className="flex items-center  justify-between flex-row">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm ml-1">{course.rating}/5.0v</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm ml-1">{course.students} Students</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t ">
          <div className="flex flex-row gap-[12px] items-center justify-center">
            <img
              src={course.instructorUrl}
              alt={course.instructorUrl}
              className="w-8 h-8 rounded"
            />
            <span className="text-sm font-medium">{course.instructor}</span>
          </div>
          <div className="text-right">
            <span className="text-emerald-500 font-bold">
              {course.price === 0 ? "Free" : `$${course.price.toFixed(2)}`}
            </span>
          </div>
        </div>

        <Link
          to={"course-detail"}
          className="w-[128px] text-[14px] md:text-base text-center mt-4 bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition-colors"
        >
          Know Detail
        </Link>
      </div>
    </div>
  );
};

export default CourseLIstCard;
