import React from 'react'

const SecondaryBtn = ({className, children, onClick}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick && onClick}
        class={`text-primary-500 hover:text-primary-700 bg-transparent hover:bg-paraTertiary focus:ring-2 focus:ring-primary-300 font-medium rounded-lg border-2 border-paraTertiary text-sm px-5 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${className}`}
      >
        {children}
      </button>
    </>
  )
}

export default SecondaryBtn
