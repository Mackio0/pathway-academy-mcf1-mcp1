import React, { useState } from 'react'
import SupportCard from '../courseDetail/components/SupportCard'
import SupportFaq from '../courseDetail/components/SupportFaq'
import { Search } from 'lucide-react'
import Footer from '../components/Footer'

const SupportPage = () => {
  const [query, setQuery] = useState("")
  return (
    <div>
      
       <div className='flex-col gap-[12px] min-h-[359px] w-full bg-green-200 flex justify-center items-center '>
    <div>
    <h3 className='text-4xl font-bold text-center align-center items-center font-e'>How can we help you?</h3>
    </div>
      <div className="relative max-w-md w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search For Help..."
        className="w-full py-2 pl-9 pr-4 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-sm placeholder:text-gray-500"
      />
    </div>
      </div>
      <SupportCard/>
      <SupportFaq/>
      <Footer/>
    </div>
  )
}

export default SupportPage
