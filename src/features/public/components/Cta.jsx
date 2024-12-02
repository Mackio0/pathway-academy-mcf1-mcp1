import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const Cta = () => {
  return (
    <div className="bg-cta rounded-lg mt-[-180px] h-80">
      <div className="w-full h-full flex justify-between items-center px-10">
        <div className="">
          <h1 className="text-h2 text-heroPara">Join our newsletter</h1>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <PrimaryBtn
              className={"absolute end-2.5 bottom-2.5 px-3 py-1"}
              isBlack={true}
            >
              Subscribe Now
            </PrimaryBtn>
          </div>
        </div>
        <div className="text-end text-heroPara text-paraTwo">
          <p className="">Call on: 0786 778 375 028</p>
          <p className="">Time: 9am to 5pm (Sunday close)</p>
          <p className="">789 Pine Drive, Apt 3B</p>
          <p className="">Pathway67@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
