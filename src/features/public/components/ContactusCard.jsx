import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";

const ContactusCard = ({ title, email, address, phone }) => {
  return (
    <>
      <div className=" lg:col-span-4 col-span-full  sm:col-span-4 sm:col-start-3  bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
        <h3 className=" lg:text-3xl text-2xl sm:text-2xl  font-semibold text-heading text-center ">
          {title}
        </h3>
        <p className="flex  items-start justify-center">
          {" "}
          <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
          <span className="font-hind text-para text-para4 text-wrap text-center">
            {address}
          </span>{" "}
        </p>
        <p className="flex gap-2 items-stretch justify-center">
          {" "}
          <LuPhoneCall className=" size-5 mt-1" />{" "}
          <span className="font-hind text-para text-para4 text-wrap text-center">
            {phone}
          </span>{" "}
        </p>
        <p className="flex gap-2 items-stretch justify-center">
          {" "}
          <HiOutlineMail className=" size-5 mt-1 " />{" "}
          <span className="font-hind text-para  text-para4 text-wrap text-center">
            {email}
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default ContactusCard;
