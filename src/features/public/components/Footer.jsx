import React from "react";
import ContainerComponent from "../../../components/ContainerComponent";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";
import Cta from "./Cta";
import appStore from "../../../assets/appStore.svg";
import playStore from "../../../assets/googlePlaystore.svg";
import FollowUsOn from "./FollowUsOn";

const Footer = ({ isCtaOn = true }) => {
  return (
    <>
      <footer className="bg-footerColor dark:bg-gray-900 mt-auto">
        <ContainerComponent>{isCtaOn && <Cta />}</ContainerComponent>
        <div className=" py-10">
          <ContainerComponent>
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-3">
                <Link to="/">
                  <Logo className={"h-12"} />
                </Link>
                <p className="mt-4 text-heroPara text-sm ">
                  Pathway Academy provides the tools and guidance to turn your
                  goals into achievements
                </p>
              </div>
              <div className="col-span-2 text-heroPara">
                <p className=" font-bold">Our Service</p>
                <Link to="/" className="font-hind block mt-4  text-sm">
                  Business Strategy
                </Link>
                <Link to="/" className="font-hind block mt-1  text-sm">
                  Development
                </Link>
                <Link to="/" className="font-hind block mt-1  text-sm">
                  Web Design
                </Link>
                <Link to="/" className="font-hind block mt-1  text-sm">
                  Digital Marking
                </Link>
                <Link to="/" className="font-hind block mt-1  text-sm">
                  Content Writing
                </Link>
                <Link to="/" className="font-hind block mt-1  text-sm">
                  Language
                </Link>
              </div>
              <div className="col-span-2 text-heroPara">
                <p className=" font-bold">Quick links</p>
                <Link to="/about-us" className="block mt-4 font-hind text-sm">
                  About Us
                </Link>
                <Link to="/contact-us" className="block mt-1 font-hind text-sm">
                  Contact Us
                </Link>
                <Link to="/blogs" className="block mt-1 font-hind text-sm">
                  Blogs
                </Link>
                <Link to="/" className="block mt-1 font-hind text-sm">
                  Sign up Student
                </Link>
                <Link to="/" className="block mt-1 font-hind text-sm">
                  Sign up Instructor
                </Link>
              </div>
              <div className="col-span-2 text-heroPara">
                <p className="text-heroPara font-bold">Community</p>
                <Link to="/support" className="block mt-4 font-hind text-sm">
                  Supports
                </Link>
                <Link to="/faq" className="block mt-1 font-hind text-sm">
                  FAQs
                </Link>
                <Link
                  to="/privacy-policies"
                  className="block mt-1 font-hind text-sm"
                >
                  Privacy policy
                </Link>
                <Link to="/tos" className="block mt-1 font-hind text-sm">
                  Terms & condition
                </Link>
              </div>
              <div className="col-span-3 text-heroPara">
                <p className=" font-bold">App available on</p>
                <div className="flex items-center gap-3 mt-2">
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
      </footer>
    </>
  );
};

export default Footer;
