import * as React from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationLinks() {
  const links = [
    { text: "Home", path: "/home" },
    { text: "About us", path: "/about-us" },
    { text: "Courses", path: "/courses" },
    { text: "Blogs", path: "/blogs" },
    { text: "Contact us", path: "/contact-us" }
  ];

  const location = useLocation();

  return (
    <div className="flex align-center gap-10 justify-between">
      {links.map((link, index) => (
        <Link
        key={index}
        to={link.path}
        className={`self-stretch my-auto ${location.pathname === link.path ? "font-bold text-primary-500" : ""}`}
        tabIndex="0"
      >
        {link.text}
      </Link>
      ))}
    </div>
  );
}

export default NavigationLinks;