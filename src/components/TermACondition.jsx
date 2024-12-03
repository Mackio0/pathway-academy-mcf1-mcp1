import React from 'react'
import { BsDot } from 'react-icons/bs'

const TermACondition = ({title , description , number , lists}) => {
  return (
<li>
  <h2 className=' text-heading text-3xl font-semibold '>{number + 1}. {title}</h2>
  <p className=' text-para4 font-hind text-para'> {description}</p>
  {lists && <ul className=' ml-4 list-disc list-inside'>
    {lists.map(el => <li className=' font-hind text-para text-para4'>{el}</li>)}
  </ul>}

</li>
  )
}

export default TermACondition