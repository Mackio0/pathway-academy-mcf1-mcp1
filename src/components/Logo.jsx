import React from "react";
import logo from "../assets/logo.svg";

const Logo = ({ className }) => {
  return (
    <>
      <img src={logo} alt="Pathway Academy Logo" className={className} />
    </>
  );
};

export default Logo;
