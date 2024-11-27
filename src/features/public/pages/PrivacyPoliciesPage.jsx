import React from "react";
import Privacy from "../courseDetail/components/Privacy";

const PrivacyPoliciesPage = () => {
  return (
    <>
      <div className=" min-h-[359px] w-full bg-green-200 flex justify-center items-center ">
        <h3 className="text-4xl font-bold text-center align-center items-center font-e">
          Privacy & Policy
        </h3>
      </div>

      <Privacy />
    </>
  );
};

export default PrivacyPoliciesPage;
