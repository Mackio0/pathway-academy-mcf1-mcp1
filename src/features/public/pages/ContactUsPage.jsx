import React from "react";
import ContainerComponent from "../../../components/ContainerComponent";
import LandingSection from "../components/LandingSection";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import getInTouchImg from "../../../assets/contact-us/getInTouch.png";

import hero from "../../../assets/contact-us/heroSection.png";
import PrimaryBtn from "../components/PrimaryBtn";
import { FiSend } from "react-icons/fi";

import FBicon from "../components/FBicon";
import YTicon from "../components/YTicon";
import TwitterIcon from "../components/TwitterIcon";
import Linkedinicon from "../components/Linkedinicon";
import IGicon from "../components/IGicon";
import { Link } from "react-router-dom";
const ContactUsPage = () => {
  return (
    <section className=" lg:space-y-32  sm:mb-20  mb-10 space-y-10 lg:mb-32">
      <LandingSection name="Contact us" imgPath={hero} />

      <ContainerComponent className=" mx-auto lg:space-y-32 sm:space-y-20 space-y-10 ">
        <div className="grid grid-cols-4  lg:grid-cols-12 sm:grid-cols-8 md:grid-cols-8 justify-center  gap-x-5  gap-y-10">
          <h1 className=" font-semibold sm:text-3xl lg:text-h1 md:text-4xl text-heading col-span-full text-center ">
            We’re here to Help You
          </h1>
          <div className=" lg:col-span-4 col-span-full sm:col-span-4 sm:col-start-3   bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
            <h3 className=" lg:text-3xl md:text-2xl sm:text-2xl  font-semibold text-heading text-center ">
              Customer Support
            </h3>
            <p className="flex  items-start justify-center">
              {" "}
              <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                789 Pine Drive, Apt 3B Greenwood, NY 10920 United States{" "}
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <LuPhoneCall className=" size-5 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                +1 (800) 123-4567
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <HiOutlineMail className=" size-5 mt-1 " />{" "}
              <span className="font-hind text-para  text-para4 text-wrap text-center">
                Pathway67@gmail.com
              </span>{" "}
            </p>
          </div>
          <div className=" lg:col-span-4 col-span-full  sm:col-span-4 sm:col-start-3  bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
            <h3 className=" text-3xl md:text-2xl sm:text-2xl  font-semibold text-heading text-center ">
              Contact Address
            </h3>
            <p className="flex  items-start justify-center">
              {" "}
              <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                P.O. Box 3456 Ocean City, FL 33121 United States
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <LuPhoneCall className=" size-5 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                +1 (415) 987-6543
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <HiOutlineMail className=" size-5 mt-1 " />{" "}
              <span className="font-hind text-para  text-para4 text-wrap text-center">
                Pathway67@gmail.com
              </span>{" "}
            </p>
          </div>{" "}
          <div className=" lg:col-span-4 col-span-full  sm:col-span-4 sm:col-start-3  bg-bg1 rounded-sm flex flex-col gap-4 justify-center p-5">
            <h3 className=" text-3xl md:text-2xl sm:text-2xl  font-semibold text-heading text-center ">
              Main Office Address
            </h3>
            <p className="flex  items-start justify-center">
              {" "}
              <HiOutlineMapPin className=" w-10 -mr-2 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                Suite 200 Rivertown, CA 90210 United States{" "}
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <LuPhoneCall className=" size-5 mt-1" />{" "}
              <span className="font-hind text-para text-para4 text-wrap text-center">
                +1 (555) 123-4567
              </span>{" "}
            </p>
            <p className="flex gap-2 items-stretch justify-center">
              {" "}
              <HiOutlineMail className=" size-5 mt-1 " />{" "}
              <span className="font-hind text-para  text-para4 text-wrap text-center">
                Pathway67@gmail.com
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-8 lg:grid-cols-12 sm:gap-y-8 px-3  gap-x-5 items-stretch lg:gap-y-10">
          <h1 className=" lg:text-h1  sm:text-h2 font-semibold col-span-full sm:col-span-full  text-center  text-heading">
            Get In Touch
          </h1>
          <div className=" lg:col-span-5 sm:col-span-6 sm:justify-self-center sm:col-start-2">
            <img src={getInTouchImg} width="100%" alt="getInTouchImg" />
          </div>
         <div className=" flex flex-col sm:col-span-full gap-5 py-2 lg:col-span-6 sm:px-12 md:px-14   lg:col-start-7">
            <div className="flex gap-5 ">
              {" "}
              <div className="flex flex-col gap-2 flex-grow">
                <label className=" font-kite" htmlFor="nameForContactForm">Name</label>
                <input
                  id="nameForContactForm"
                  className="  flex    w-full rounded-lg border border-paraTertiary  px-3 py-2
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  name="nameForContactForm"
                  type="text"
                />
              </div>{" "}
              <div className="flex flex-col gap-2 flex-grow">
                <label className=" font-kite" htmlFor="emailForContactForm">Email</label>
                <input
                  id="emailForContactForm"
                  className="  flex    w-full rounded-md border border-paraTertiary  px-3 py-2
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  name="emailForContactForm"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className=" font-kite" htmlFor="phoneForContactForm">Phone</label>
              <input
                id="phoneForContactForm"
                className="  flex     w-full rounded-lg border border-paraTertiary  px-3 py-2
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                name="phoneForContactForm"
                type="text"
              />
            </div>
            <div className="flex flex-col flex-grow gap-2 ">
              <label className=" font-kite" htmlFor="messageForContactForm">Message</label>
              <textarea
              rows="4"
              
                className=" flex-grow rounded-lg px-4 py-3 w-full flex border border-paraTertiary
                            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-stokeColor focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us a few words"
                name="messageForContactForm"
                id="messageForContactForm"
              ></textarea>
            </div>
            <PrimaryBtn className="   w-40  px-3 py-2">
              <span
                className="flex items-center
              "
              >
                {" "}
                Send message
              </span>
              <FiSend />
            </PrimaryBtn>
            <div className="flex gap-5 items-center">
              {" "}
              <p className=" font-medium text-para text-footerColor">
                Follow us on
              </p>
              <div className=" flex gap-2 ">
                <a href="#">
                  {" "}
                  <FBicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="#525252"
                  />
                </a>
                <a href="#">
                  {" "}
                  <IGicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>
                <a href="#">
                  {" "}
                  <TwitterIcon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>{" "}
                <a href="#">
                  {" "}
                  <Linkedinicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>
                <a href="#">
               
                  <YTicon
                    className=" p-2 rounded-md  bg-para4 "
                    width="32"
                    height="32"
                    iconColor="white"
                  />
                </a>
              </div>
            </div>
          </div> 
        </div>
        <div className=" col-span-full  lg:h-[478px] h-[250px] sm:h-[337px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.763498671471!2d96.13149100963174!3d16.838084783891443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edbb8a89416d%3A0x64420f52367032b9!2sMMS%20IT!5e0!3m2!1sen!2smm!4v1732870842557!5m2!1sen!2smm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default ContactUsPage;
