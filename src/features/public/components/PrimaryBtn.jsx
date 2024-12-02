import React from "react";

const PrimaryBtn = ({ className, children, onClick, isBlack = false }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick && onClick}
        className={
          isBlack
            ? `text-white flex justify-center items-center border-2 border-heading hover:border-para3 bg-heading hover:bg-para3 focus:ring-2 focus:ring-primary-500 font-medium rounded text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${className}`
            : `text-white flex justify-center items-center border-2 border-primary-500 hover:border-primary-700 bg-primary-500 hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 font-medium rounded text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${className}`
        }
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;
