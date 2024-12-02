import React from 'react';
import { ChevronRight, Star, Users, BarChart, Globe } from 'lucide-react';

import ContainerComponent from '../../../../components/ContainerComponent';

export default function HeroSection2() {
  return (
    <ContainerComponent className="custom-class">
    <div className="bg-primary-50 mx-auto p-6">
     {/* Breadcrumb */}
     <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
       <a href="#" className="hover:text-gray-900">Course</a>
       <ChevronRight className="h-4 w-4" />
       <span className="font-medium text-gray-900">Course detail</span>
     </nav>

     {/* Course Title */}
     <h1 className="text-4xl font-bold text-gray-900 mb-4">
       JavaScript for Beginner
     </h1>

     {/* Course Description */}
     <p className="text-gray-600 mb-8 text-lg">
       JavaScript is the popular programming language which powers web pages and web
       applications. This course will get you started coding in JavaScript.
     </p>

     {/* Course Meta Info */}
     <div className="flex flex-wrap gap-6">
       <div className="flex items-center gap-2">
         <BarChart className="h-5 w-5 text-orange-500" />
         <span className="text-gray-700">Beginner</span>
       </div>

       <div className="flex items-center gap-2">
         <Users className="h-5 w-5 text-orange-500" />
         <span className="text-gray-700">1200 Enrolled</span>
       </div>

       <div className="flex items-center gap-2">
         <Star className="h-5 w-5 text-orange-500" />
         <span className="text-gray-700">4.5 / 5.0</span>
       </div>

       <div className="flex items-center gap-2">
         <Globe className="h-5 w-5 text-orange-500" />
         <span className="text-gray-700">English</span>
       </div>
     </div>
   </div>
  </ContainerComponent>
  );
}

