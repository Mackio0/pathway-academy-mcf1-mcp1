import React from "react";
import NavigationLinks from "./NavigationLinks";
import Logo from "../../../components/Logo";
import { HiAcademicCap, HiMiniMagnifyingGlass } from "react-icons/hi2";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { Link } from "react-router-dom";
import ContainerComponent from "../../../components/ContainerComponent";

const Header = () => {
  return (
    <header className="">
      <ContainerComponent className={"flex justify-between items-center py-3"}>
        <div className="">
          <Link to="/home">
            <Logo className={"h-12"} />
          </Link>
        </div>
        <div className="">
          <NavigationLinks />
        </div>
        <div className="flex">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiAcademicCap className="size-4" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Courses..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-primary-500 rounded-lg border border-primary-500 hover:border-primary-700 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-600 dark:focus:ring-primary-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div className="flex items-center justify-between shrink-0 gap-3">
          <Link to={"/register"}>
            <SecondaryBtn className={"px-4 py-2"} isBorderGreen={true}>
              Sign up
            </SecondaryBtn>
          </Link>
          <Link to={"/login"}>
            <PrimaryBtn className={"px-4 py-2"} isBlack={true}>
              Sign in
            </PrimaryBtn>
          </Link>
        </div>
      </ContainerComponent>
    </header>
  );
};

export default Header;
