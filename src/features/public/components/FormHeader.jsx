import React from "react";
import NavigationLinks from "./NavigationLinks";
import Logo from "../../../components/Logo";
import { HiAcademicCap, HiMiniMagnifyingGlass } from "react-icons/hi2";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { Link } from "react-router-dom";
import ContainerComponent from "../../../components/ContainerComponent";

const FormHeader = () => {
  return (
    <header className="">
      <ContainerComponent
        className={"flex justify-between items-center px-5 py-3"}
      >
        <div className="">
          <Link to="/">
            <Logo className={"h-12"} />
          </Link>
        </div>

        <div className="flex items-center justify-between shrink-0 gap-3">
          <SecondaryBtn className={"px-4 py-2"} isBorderGreen={true}>
            <Link to={"/login"}>Log In</Link>
          </SecondaryBtn>
        </div>
      </ContainerComponent>
    </header>
  );
};

export default FormHeader;
