import React from "react";
import { Link } from "react-router-dom";

const CardBlog = React.forwardRef(({ img, href, title, descripton, date } , ref) => {
  return (
    <Link
    ref={ref}
      to={href}
      className={`cursor-pointer flex flex-col gap-5 pb-4 col-span-full  lg:col-span-4  shadow border border-borderBlog rounded `}
    >
      <img className="" width="100%" src={img} alt="eventPhoto1" />

      <div className=" px-4 space-y-4 flex flex-col justify-between flex-grow  ">
        <p className=" lg:text-xl font-semibold text-para4 ">{title}</p>
        <div>
          {" "}
          <p className=" font-hind leading-6 text-para1 xl:block hidden line-clamp-3  ">
            {descripton}
          </p>
          <p className=" text-para4 ">
            {date}
            {/* <ShowDate date={date} /> */}
          </p>
        </div>
      </div>
    </Link>
  );
});

export default CardBlog;
