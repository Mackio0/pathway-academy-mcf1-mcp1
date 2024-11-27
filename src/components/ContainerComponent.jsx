import React from "react";

const ContainerComponent = ({ children, className }) => {
  return (
    <div
      className={`w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
