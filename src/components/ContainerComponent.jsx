import React from "react";

const ContainerComponent = ({ children, className }) => {
  return (
    <div
      className={`w-full   mx-auto md:w-[720px] lg:w-[1000px] xl:w-[1200px]  ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
