import React from 'react'

import Privacy from '../courseDetail/components/Privacy'
import ContainerComponent from '../../../components/ContainerComponent'

const PrivacyPoliciesPage = () => {
  return (
    <>
    <div className=' lg:h-[420px] sm:h-[220px] md:h-[274px] h-[200px] w-full bg-bg2 flex justify-center items-center '>
      <h3 className='text-heading sm:text-3xl text-2xl lg:text-h1 md:text-h2 font-bold'>Privacy & Policy</h3>
      
      </div>
      <ContainerComponent>
        <Privacy/>
      </ContainerComponent>
   </>
  )
}

export default PrivacyPoliciesPage