import React from "react";

const FBicon = ({width , height , className ,  iconColor , }) => {
  return (
    <svg
      width={width}
      className={className}
      height={height}
      viewBox="0 0 16 16"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6 0H2.4C1.07452 0 0 1.07452 0 2.4V13.6C0 14.9255 1.07452 16 2.4 16H13.6C14.9255 16 16 14.9255 16 13.6V2.4C16 1.07452 14.9255 0 13.6 0Z"
        fill={iconColor}
      />
      <path
        d="M11.1125 10.3125L11.4688 8H9.25V6.5C9.25 5.86875 9.55938 5.25 10.5531 5.25H11.5625V3.28125C11.5625 3.28125 10.6469 3.125 9.77188 3.125C7.94375 3.125 6.75 4.23125 6.75 6.2375V8H4.71875V10.3125H6.75V16H9.25V10.3125H11.1125Z"
        fill="white"
      />
    </svg>
  );
};

export default FBicon;
