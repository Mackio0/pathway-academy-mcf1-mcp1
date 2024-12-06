import * as React from "react";
import { NavLink } from "react-router-dom";

function NavigationLinks({ closeDropdown }) {
  const links = [
    { text: "Home", path: "/" },
    { text: "About us", path: "/about-us" },
    { text: "Courses", path: "/courses" },
    { text: "Blogs", path: "/blogs" },
    { text: "Contact us", path: "/contact-us" },
  ];

  return (
    <ul className="font-medium flex flex-col p-4 gap-0   md:p-0 mt-4 border border-gray-100 rounded bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 whitespace-nowrap">
      {links.map((link, index) => (
        <li>
          <NavLink
            key={index}
            to={link.path}
            className="block py-2 px-3 text-center rounded md:bg-transparent md:text-para1 md:p-0 dark:text-white"
            onClick={closeDropdown}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavigationLinks;
