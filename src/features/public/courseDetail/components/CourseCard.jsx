import React from 'react'

import Instructor from './Instructor'
import Reviews from './Reviews'
import Faq from './Faq'
import Curriculum from './Curriculum'
import Overview from './Overview'
const CourseCard = ({activeTab}) => {
    console.log(activeTab)
  return (
    <>
   
 
        {activeTab === "overview" && (

<Overview/>
)}
{activeTab === "curriculum" && (
<Curriculum/>
)}
{activeTab === "instructor" && (
<Instructor/>
)}
{activeTab === "reviews" && (
<Reviews/>
)}
{activeTab === "faqs" && (
<Faq/>
)}
    </>
  )
}

export default CourseCard
