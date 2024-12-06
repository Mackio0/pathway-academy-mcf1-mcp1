import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegClock, FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Cta = () => {
  return (
    <div className="bg-cta bg-auto rounded -mt-[180px] h-[290px] lg:h-80 w-full">
      <div className="w-full h-full flex flex-col lg:flex-row justify-around lg:justify-between items-center px-5 lg:px-10">
        <div className="w-full">
          <h1 className="text-[30px] lg:text-h2 font-bold text-heroPara mb-3">
            Join our newsletter
          </h1>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
              required
            />
            <PrimaryBtn
              className={"absolute end-2.5 bottom-2 px-3 py-1"}
              isBlack={true}
            >
              Subscribe Now
            </PrimaryBtn>
          </div>
        </div>
        <div className="text-start lg:text-end text-heroPara text-paraTwo w-full">
          <p className="font-bold text-para">Contact Us</p>
          <p className="">
            <span className="inline-block align-middle me-2">
              <LuPhoneCall className="size-4" />
            </span>
            Call on: 0786 778 375 028
          </p>
          <p className="">
            <span className="inline-block align-middle me-2">
              <FaRegClock className="size-4" />
            </span>
            Time: 9am to 5pm (Sunday close)
          </p>
          <p className="">
            <span className="inline-block align-middle me-1">
              <IoLocationOutline className="size-5" />
            </span>
            789 Pine Drive, Apt 3B
          </p>
          <p className="">
            <span className="inline-block align-middle me-2">
              <FaRegEnvelope className="size-4" />
            </span>
            Pathway67@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
