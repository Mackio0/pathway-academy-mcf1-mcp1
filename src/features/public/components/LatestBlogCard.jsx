import React from 'react'
import { Link } from 'react-router-dom'

const LatestBlogCard = React.forwardRef (( { img, href, title, author, description, date } , ref  ) => {
  return (
    <Link
    ref={ref}
    to={href}
    className=" col-span-full lg:col-span-4  flex flex-col rounded shadow gap-5 border  border-borderBlog"
  >
    <img
      className=""
      width="100%"
      src={img}
      alt="eventPhoto1"
    />

    <div className=" space-y-5 sm:px-3 px-4 flex flex-col flex-grow justify-center ">
      <p className=" text-xl text-para3   font-semibold">
       {title}
      </p>
      <div className="flex-grow flex flex-col justify-end">
        <p className=" font-hind text-para1 line-clamp-2 ">
      {description}
        </p>
      </div>

      <div className="flex justify-between border-t items-center border-para2 py-2">
        <h3 className=" text-heading font-hind font-medium text-2xl">
    {author}   
        </h3>
        <p className=" text-para1 font-hind">{date}</p>
      </div>
    </div>
  </Link>
  )
})

export default LatestBlogCard