import React from "react";
import ContainerComponent from "../../../components/ContainerComponent";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footerColor dark:bg-gray-900 mt-auto">
      <div className="py-20">
        <ContainerComponent className="grid grid-cols-12 gap-10 relative">
          <div className="p-32 absolute bg-slate-600 w-full top-[-300px] rounded-lg text-center">
            CTA Test
          </div>
          <div className="col-span-3">
            <Link to="/home">
              <Logo className={"h-12"} />
            </Link>
            <p className="mt-4 text-heroPara text-sm ">
              Pathway Academy provides the tools and guidance to turn your goals
              into achievements
            </p>
          </div>
          <div className="col-span-2 text-heroPara">
            <p className=" font-bold">Our Service</p>
            <Link
              to="/home"
              className="font-hind block mt-4  text-sm"
            >
              Business Strategy
            </Link>
            <Link
              to="/home"
              className="font-hind block mt-1  text-sm"
            >
              Development
            </Link>
            <Link
              to="/home"
              className="font-hind block mt-1  text-sm"
            >
              Web Design
            </Link>
            <Link
              to="/home"
              className="font-hind block mt-1  text-sm"
            >
              Digital Marking
            </Link>
            <Link
              to="/home"
              className="font-hind block mt-1  text-sm"
            >
              Content Writing
            </Link>
            <Link
              to="/home"
              className="font-hind block mt-1  text-sm"
            >
              Language
            </Link>
          </div>
          <div className="col-span-2 text-heroPara">
            <p className=" font-bold">Quick links</p>
            <Link
              to="/about-us"
              className="block mt-4 font-hind text-sm"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block mt-1 font-hind text-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/blogs"
              className="block mt-1 font-hind text-sm"
            >
              Blogs
            </Link>
            <Link
              to="/home"
              className="block mt-1 font-hind text-sm"
            >
              Sign up Student
            </Link>
            <Link
              to="/home"
              className="block mt-1 font-hind text-sm"
            >
              Sign up Instructor
            </Link>
          </div>
          <div className="col-span-2 text-heroPara">
            <p className="text-heroPara font-bold">Community</p>
            <Link
              to="/support"
              className="block mt-4 font-hind text-sm"
            >
              Supports
            </Link>
            <Link
              to="/faq"
              className="block mt-1 font-hind text-sm"
            >
              FAQs
            </Link>
            <Link
              to="/privacy-policies"
              className="block mt-1 font-hind text-sm"
            >
              Privacy policy
            </Link>
            <Link
              to="/tos"
              className="block mt-1 font-hind text-sm"
            >
              Terms & condition
            </Link>
          </div>
          <div className="col-span-3 bg-primary-50">Test</div>
        </ContainerComponent>
      </div>
    </footer>
  );
};

export default Footer;
