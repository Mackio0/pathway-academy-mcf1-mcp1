import { useState } from "react";

function TopC({ course }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover object-top"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-sm rounded bg-primary-500 text-white">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-4 space-y-4 flex flex-col h-fit">
        <div className="flex flex-row justify-between items-center ">
          <span className="px-3 py-1 text-sm rounded bg-secondary text-white">
            {course.level}
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className=" p-2 rounded bg-stone-200 hover:bg-white transition-colors"
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
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M21 15V6" />
              <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M12 12H3" />
              <path d="M16 6H3" />
              <path d="M12 18H3" />
            </svg>
            {course.lessons} Lesson
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {course.duration}
          </div>
        </div>
        <h3 className="font-semibold min-h-[44px]  mt-auto text-xl leading-tight text-primary-500">
          {course.title}
        </h3>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-yellow-300"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          <span>{course.rating}/5.0</span>
          <span className="text-gray-600">({course.students} Students)</span>
        </div>
        <div className="flex items-center justify-between  pt-4 border-t">
          <div className="flex items-center gap-2">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded object-fit object-center"
            />
            <span className="font-medium">{course.instructor.name}</span>
          </div>
          <span className="text-lg font-bold text-emerald-600">
            {course.price === "Free" ? "Free" : `$${course.price}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopC;
