import React, { useState } from "react";
import {
  Clock,
  BookOpen,
  GraduationCap,
  Languages,
  Award,
  Heart,
} from "lucide-react";

import courseDetail from "../../../../assets/courseDetail.mp4";
import CourseCard from "./CourseCard";

const TabButton = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 font-medium text-primary-400 ${
      isActive
        ? "border border-primary-300 bg-primary-400 rounded !text-white"
        : "text-gray-500 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Badge = ({ children, variant = "default" }) => {
  const baseClasses =
    "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium";
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    outline: "bg-white text-gray-700 border border-gray-300",
  };
  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = ["Overview", "Curriculum", "Instructor", "Reviews", "FAQs"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
        <div className="lg:col-span-7">
          {/* Tabs */}
          <div className="mb-8">
            <div className=" mb-[30px]">
              {tabs.map((tab) => (
                <TabButton
                  key={tab}
                  isActive={activeTab === tab.toLowerCase()}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </TabButton>
              ))}
            </div>
            <CourseCard activeTab={activeTab} />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="">
            <div className="aspect-video relative mb-4 rounded overflow-hidden">
              <video
                src={`${courseDetail}`}
                alt="Course preview"
                fill
                className="object-cover"
                controls
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-600">$18.00</span>
                <span className="text-sm text-gray-500 line-through">
                  $20.00
                </span>
              </div>
              <Badge variant="secondary">10% off</Badge>
            </div>

            <div className=" mb-6 flex flex-row justify-between items-center gap-4">
              <button className="w-full px-4 py-2 text-black border border-primary-500 rounded hover:bg-blue-50 transition-colors">
                Try for free
              </button>
              <button className="w-full px-4 py-2 bg-primary-500 text-white rounded hover:bg-blue-700 transition-colors">
                Apply now
              </button>
            </div>

            <div className="space-y-4 border border-b-gray-300 p-[10px]">
              <h3 className="text-xl font-bold">This course included</h3>
              <div className="space-y-3">
                {[
                  { icon: BookOpen, label: "Lesson", value: "18" },
                  { icon: Clock, label: "Duration", value: "2hr 30min" },
                  { icon: GraduationCap, label: "Level", value: "Beginner" },
                  { icon: Languages, label: "Language", value: "English" },
                  { icon: Award, label: "Certificate", value: "Yes" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4  text-orange-500" />
                      <span>{label}</span>
                    </div>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 border border-b-gray-300 p-[10px]">
              <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Business",
                  "Web development",
                  "Data science",
                  "Machine learning",
                  "Python",
                  "Html",
                  "CSS",
                ].map((tag) => (
                  <button
                    className=" border border-gray-300 px-4 py-2 rounded-sm"
                    key={tag}
                    variant="outline"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
