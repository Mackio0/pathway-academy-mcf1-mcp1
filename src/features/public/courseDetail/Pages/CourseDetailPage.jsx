import React from 'react'
import TopLIstedCourses from '../components/TopLIstedCourses'




import ContainerComponent from '../../../../components/ContainerComponent'
import CourseDetail from '../components/CourseDetail'
import HeroSection from '../components/HeroSection'

const CourseDetailPage = () => {
  return (
   <>
   <HeroSection/>
   <ContainerComponent>
     <CourseDetail/>
      <TopLIstedCourses/>
      
      </ContainerComponent>
      </>
  )
}

export default CourseDetailPage
