import React from "react";

import CourseLIstCard from "../components/CourseLIstCard";
import aboutImg from "../../../../assets/course/heroSection.png";
import { courses } from "../components/Courses";
const CourseListPage = () => {
  return (
    <section>
      {/* "hero section" */}

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover">
        <img
          src={aboutImg}
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Courses
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between flex-col md:flex-row items-start gap-2 md:items-center mb-8">
            <h2 className="text-[16px]   md:text-xl font-semibold">
              Showing 1-8 of 32 result
            </h2>
            <select className="border text-[14px] md:text-base rounded px-4 py-2 bg-white">
              <option>Sort by New</option>
              <option>Sort by Popular</option>
              <option>Sort by Price</option>
            </select>
          </div>

          <div className="grid grid-cols-1  gap-6 ">
            {courses.map((course) => (
              <CourseLIstCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseListPage;
