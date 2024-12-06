import React from "react";

const BlogDeatailFactsLi = ({subtitle, para}) => {
  return (
    <li
      className=" lg:space-y-2 space-y-1
"
    >
      {" "}
      <div className="flex items-center gap-5">
        {" "}
        <div className="lg:size-3 bg-black rounded inline-block size-1"></div>
        <h1 className="font-semibold text-heading text-base sm:text-para lg:text-2xl">
        {subtitle}
        </h1>
      </div>
      <p className=" lg:pl-8 pl-6 leading-5 sm:leading-6 md:leading-7   lg:text-para font-hind text-sm  text-para4">
{para}
      </p>
    </li>
  );
};

export default BlogDeatailFactsLi;
