import React from "react";

const SecondaryBtn = ({
  className,
  children,
  onClick,
  isBorderGreen = false,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick && onClick}
        className={
          isBorderGreen
            ? `text-heading bg-transparent hover:bg-para2 flex justify-center items-center border-2 border-primary-500 focus:ring-2 focus:ring-primary-300 font-medium rounded text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${className}`
            : `text-heading bg-transparent hover:bg-para2 flex justify-center items-center border-2 border-stokeColor focus:ring-2 focus:ring-primary-300 font-medium rounded text-sm dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${className}`
        }
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryBtn;
