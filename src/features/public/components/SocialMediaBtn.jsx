import React from "react";

const SocialMediaBtn = ({ iconSVG }) => {
  return (
    <>
      <button
        type="button"
        className="text-white bg-para4 hover:bg-para3 focus:ring-4 focus:outline-none focus:ring-para3 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:focus:ring-para4"
      >
        {iconSVG}
      </button>
    </>
  );
};

export default SocialMediaBtn;
