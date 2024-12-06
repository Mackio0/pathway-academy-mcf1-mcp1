import React from 'react'
import { BsDot } from 'react-icons/bs'

const TermACondition = ({title , description , number , lists}) => {
  return (
<li className=' sm:space-y-4 space-y-2 '>
  <h2 className=' text-heading  sm:text-xl lg:text-3xl font-semibold '>{number + 1}. {title}</h2>
  <div className=' text-para4 text-sm  font-hind sm:text-paraTwo lg:text-para'> {description} <span> {lists && <ul className=' ml-2 sm:ml-4 list-disc list-inside'>
    {lists.map((el,index) => <li key={index} className=' font-hind lg:text-para text-sm sm:text-base text-para4'>{el}</li>)}
  </ul>}</span></div>


</li>
  )
}

export default TermACondition