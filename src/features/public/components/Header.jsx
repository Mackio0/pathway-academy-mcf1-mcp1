import React, { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import Logo from "../../../components/Logo";
import { HiAcademicCap } from "react-icons/hi2";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { Link } from "react-router-dom";
import ContainerComponent from "../../../components/ContainerComponent";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="">
      <ContainerComponent className={"flex justify-between items-center"}>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
          <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto py-2 gap-5">
            <Link to="/">
              <Logo className={"h-12"} />
            </Link>
            <button
              onClick={toggleDropdown}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isDropdownOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={` ${
                isDropdownOpen ? "block" : "hidden"
              } w-full md:flex lg:flex md: justify-center items-center md:w-auto gap-10`}
              id="navbar-default"
            >
              <NavigationLinks closeDropdown={closeDropdown} />
              <div className="hidden md:hidden lg:flex">
                <label htmlFor="search-courses" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <HiAcademicCap className="size-4" />
                  </div>
                  <input
                    type="text"
                    id="search-courses"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Courses..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-primary-500 rounded border border-primary-500 hover:border-primary-700 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-600 dark:focus:ring-primary-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between shrink-0 gap-3 mt-3 md:mt-0 lg:mt-0">
                <SecondaryBtn
                  className={"px-4 py-2 w-full lg:w-auto"}
                  isBorderGreen={true}
                >
                  <Link to={"/register"}>Sign up</Link>
                </SecondaryBtn>
                <PrimaryBtn
                  className={"px-4 py-2 w-full lg:w-auto whitespace-nowrap"}
                >
                  <Link to={"/apply-form"}>Apply Now</Link>
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </nav>
      </ContainerComponent>
    </header>
  );
};

export default Header;
