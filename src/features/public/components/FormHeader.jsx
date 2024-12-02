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
      <ContainerComponent className={"flex justify-between items-center py-3"}>
        <div className="">
          <Link to="/">
            <Logo className={"h-12"} />
          </Link>
        </div>
        
        <div className="flex items-center justify-between shrink-0 gap-3">
          <Link to={"/register"}>
            <SecondaryBtn className={"px-4 py-2"} isBorderGreen={true}>
              Sign up
            </SecondaryBtn>
          </Link>
          <Link to={"/apply-form"}>
            <PrimaryBtn className={"px-4 py-2"} >
              Apply Now
            </PrimaryBtn>
          </Link>
        </div>
      </ContainerComponent>
    </header>
  );
};

export default FormHeader;
