import React from 'react'
import TopLIstedCourses from '../components/TopLIstedCourses'
import HeroSection from '../components/HeroSection'


import HeroSection2 from '../components/HeroSection2'
import ContainerComponent from '../../../../components/ContainerComponent'

const CourseDetailPage = () => {
  return (
    <ContainerComponent>
   <HeroSection2/>
     <HeroSection/>
      <TopLIstedCourses/>
      
      </ContainerComponent>
    
  )
}

export default CourseDetailPage
