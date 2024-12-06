import React from "react";
import useDateFormat from "../hooks/useDateFormat";

const ShowDate = ({ date }) => {

  const Date = useDateFormat(date);

  return <p className=" text-para4 md:text-base text-center lg:text-start text-sm ">{Date}</p>;
};

export default ShowDate;
