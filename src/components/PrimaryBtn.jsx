import React from "react";

const PrimaryBtn = ({className, children, onClick}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick && onClick}
        class={`text-white bg-primary-500 hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;
