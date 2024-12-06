import React from "react";
import notFoundPic from "../assets/notFoundPic.svg";
import rightArrow from "../assets/rightArrow.svg";
import PrimaryBtn from "../features/public/components/PrimaryBtn";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen p-10">
      <main className="flex flex-col flex-grow items-center justify-center text-center">
        <img src={notFoundPic} alt="" className=" lg:size-1/4" />
        <h2 className="text-h1 font-bold">Something’s wrong here...</h2>
        <p className="text-paraTwo text-para4 mb-3">
          We can’t find the page you’re looking for. Check out our help center
          or head back to home.
        </p>
        <div className="flex items-center gap-3">
          <Link to={"/contact-us"}>
            <PrimaryBtn className={"px-3 py-1.5"} isBlack={true}>
              Help Center
              <span className="ms-2">
                <img src={rightArrow} />
              </span>
            </PrimaryBtn>
          </Link>
          <Link to={"/"}>
            <PrimaryBtn className={"px-3 py-1.5"}>Back to Home</PrimaryBtn>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;