import React from "react";
import applyFormCompleteGIF from "../../../assets/login-signup-applyForm/applyFormCompletionIcon.gif";
import { Link } from "react-router-dom";
import PrimaryBtn from "../components/PrimaryBtn";
import FollowUsOn from "../components/FollowUsOn";

const ApplyFormCompletePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow items-center justify-center">
        <img
          src={applyFormCompleteGIF}
          alt="Check mark gif"
          className="size-52"
        />
        <div className="flex flex-col justify-center items-center  gap-10 ">
          <h2 className="text-h1 font-bold text-primary-500">Thank You</h2>
          <p className="text-para text-para4 font-hind w-3/4 text-center">
            Thank you for submitting your application to our Pathway Academy
            Education. We will be touch and contact you soon.
          </p>
          <Link to={"/"}>
            <PrimaryBtn className={"px-3 py-1.5"}>Back to Home</PrimaryBtn>
          </Link>
          <FollowUsOn className={"flex items-center gap-5"} />
        </div>
      </main>
    </div>
  );
};

export default ApplyFormCompletePage;
