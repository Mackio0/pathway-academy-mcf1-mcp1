import React from "react";
import ContainerComponent from "../../../components/ContainerComponent";
import Logo from "../../../components/Logo";
import { Link, NavLink } from "react-router-dom";
import Cta from "./Cta";
import appStore from "../../../assets/appStore.svg";
import playStore from "../../../assets/googlePlaystore.svg";
import FollowUsOn from "./FollowUsOn";

const Footer = ({ isCtaOn = true }) => {
  return (
    <div className=" mt-auto">
      <div className=" mt-[180px]">
        <footer className=" bg-footerColor  dark:bg-gray-900 ">
          <ContainerComponent>
            <div className=" relative py-10">
              {isCtaOn && <Cta />}
              <ContainerComponent>
                <div className=" w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 pt-5 lg:pt-28">
                  <div className="col-span-4 md:col-span-8 lg:col-span-3">
                    <Link to="/">
                      <Logo className={"h-12"} />
                    </Link>
                    <p className="mt-4 text-heroPara text-sm ">
                      Pathway Academy provides the tools and guidance to turn
                      your goals into achievements.
                    </p>
                  </div>
                  <div className="col-span-2 text-heroPara mt-5 lg:mt-0">
                    <p className=" font-bold">Our Service</p>
                    <Link to="#" className="font-hind block mt-3  text-sm">
                      Business Strategy
                    </Link>
                    <Link to="#" className="font-hind block mt-1  text-sm">
                      Development
                    </Link>
                    <Link to="#" className="font-hind block mt-1  text-sm">
                      Web Design
                    </Link>
                    <Link to="#" className="font-hind block mt-1  text-sm">
                      Digital Marking
                    </Link>
                    <Link to="#" className="font-hind block mt-1  text-sm">
                      Content Writing
                    </Link>
                    <Link to="#" className="font-hind block mt-1  text-sm">
                      Language
                    </Link>
                  </div>
                  <div className="col-span-2 text-heroPara mt-5 lg:mt-0">
                    <p className=" font-bold">Quick NavLinks</p>
                    <NavLink
                      to="/about-us"
                      className="block mt-3 font-hind text-sm"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/contact-us"
                      className="block mt-1 font-hind text-sm"
                    >
                      Contact Us
                    </NavLink>
                    <NavLink to="/blogs" className="block mt-1 font-hind text-sm">
                      Blogs
                    </NavLink>
                    <Link to="/register" className="block mt-1 font-hind text-sm">
                      Sign up Student
                    </Link>
                    <Link to="/register" className="block mt-1 font-hind text-sm">
                      Sign up Instructor
                    </Link>
                  </div>
                  <div className="col-span-2 text-heroPara mt-5 lg:mt-0">
                    <p className="text-heroPara font-bold">Community</p>
                    <NavLink
                      to="/support"
                      className="block mt-3 font-hind text-sm"
                    >
                      Supports
                    </NavLink>
                    <NavLink to="/faq" className="block mt-1 font-hind text-sm">
                      FAQs
                    </NavLink>
                    <NavLink
                      to="/privacy-policies"
                      className="block mt-1 font-hind text-sm"
                    >
                      Privacy policy
                    </NavLink>
                    <NavLink to="/tos" className="block mt-1 font-hind text-sm">
                      Terms & condition
                    </NavLink>
                  </div>
                  <div className="col-span-2 lg:col-span-3 text-heroPara mt-5 lg:mt-0">
                    <p className=" font-bold">App available on</p>
                    <div className="flex flex-col lg:flex-row justify-center md:justify-start items-start lg:items-center gap-3 mt-3">
                      <img src={playStore} alt="Get it on Google Playstore" />
                      <img src={appStore} alt="Get it on Apple Appstore" />
                    </div>
                    <FollowUsOn
                      className={"flex flex-col gap-2"}
                      isTextWhite={true}
                    />
                  </div>
                </div>
              </ContainerComponent>
            </div>
          </ContainerComponent>
        </footer>
      </div>
    </div>
  );
};

export default Footer;