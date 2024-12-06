import React, { useState } from "react";
import { ChevronDown, Play } from "lucide-react";

const courseContent = [
  {
    title: "JavaScript Basics",
    lessons: [
      {
        title: "Intro to JavaScript: Overview, setup, and running code",
        duration: "30min 10sec",
      },
      {
        title:
          "Variables and Data Types: let, const, strings, numbers, booleans",
        duration: "1hr 10sec",
      },
      {
        title: "Loops: for, while, and do...while loops",
        duration: "15min 4sec",
      },
    ],
  },
  {
    title: "Functions and Scope",
    lessons: [
      {
        title: "Functions: Declaration, expressions, arrow functions..",
        duration: "30min 10sec",
      },
      {
        title: "Parameters and Return Values: Passing and returning values.",
        duration: "1hr 10sec",
      },
      {
        title:
          "Scope: Block scope, function scope, global scope, and closures.",
        duration: "15min 4sec",
      },
    ],
  },
  {
    title: "Arrays and Objects",
    lessons: [
      {
        title:
          "Creating arrays, accessing, modifying, and looping through elements.",
        duration: "30min 10sec",
      },
      {
        title: "Properties, methods, adding and accessing data.",
        duration: "1hr 10sec",
      },
      {
        title:
          "Array and Object Methods: map, filter, reduce, forEach, Object.keys.....",
        duration: "15min 4sec",
      },
    ],
  },
  {
    title: "The Document Object Model (DOM)",
    lessons: [
      {
        title: "DOM Basics: Understanding the DOM and selecting elements.",
        duration: "30min 10sec",
      },
      {
        title:
          "Manipulating the DOM: Adding, removing, and modifying HTML elements.",
        duration: "1hr 10sec",
      },
      {
        title: "Event Listeners: Handling user events like clicks, input, etc.",
        duration: "15min 4sec",
      },
    ],
  },
];

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div className="border rounded bg-white shadow-sm mb-4">
      <button
        className="w-full px-4 py-2 text-left focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-medium">{section.title}</span>
            <span className="text-sm text-gray-500">
              {section.lessons.length} lessons
            </span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2">
          {section.lessons.map((lesson, lessonIndex) => (
            <div
              key={lessonIndex}
              className="flex items-center justify-between py-2 hover:bg-gray-50 rounded -mx-2 px-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4 text-blue-500" />
                <span className="text-sm">{lesson.title}</span>
              </div>
              <span className="text-sm text-gray-500">{lesson.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === index ? null : index
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {courseContent.map((section, index) => (
        <AccordionItem
          key={index}
          section={section}
          isOpen={openSection === index}
          onToggle={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}
