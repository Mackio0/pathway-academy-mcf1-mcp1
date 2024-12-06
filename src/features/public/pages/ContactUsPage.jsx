import React from "react";
import ContainerComponent from "../../../components/ContainerComponent";
import LandingSection from "../components/LandingSection";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import getInTouchImg from "../../../assets/contact-us/getInTouch.png";
import hero from "../../../assets/contact-us/heroSection.png";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactForm from "../components/ContactForm";
import ContactusCard from "../components/ContactusCard";
import HeroSection from "../components/HeroSection";

const ContactUsPage = () => {
  const schema = yup.object({
    Name: yup.string().min(2).max(30).required(),
    Email: yup.string().email().required(),
    Phone: yup.string().min(7).max(12).required(),
    Message: yup.string().optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  return (
    <section className=" lg:space-y-32  sm:mb-20  mb-10 space-y-10 lg:mb-32">
      {/* <LandingSection name="Contact us" imgPath={hero} /> */}
      <HeroSection image={hero} title={"Contact us"} />


      <ContainerComponent className=" mx-auto lg:space-y-32 sm:space-y-20 space-y-10 ">
        <div className="grid grid-cols-4  lg:grid-cols-12 sm:grid-cols-8 md:grid-cols-8 justify-center  gap-x-5 gap-y-5 lg:gap-y-10">
          <div
            className="hidden lg:block mb-10 col-span-full"
            style={{ perspective: "1000px" }}
          >
            <h1 className=" font-semibold sm:text-3xl lg:text-h1 md:text-4xl text-heading text-2xl col-span-full text-center absolute w-full h-full flex justify-center items-center bg-white">
              We’re here to Help You
            </h1>
          </div>
          <h1 className=" lg:hidden col-span-full sm:text-3xl  md:text-4xl  font-semibold    text-heading text-2xl text-center  w-full h-full bg-white">
            We’re here to Help You
          </h1>

          <ContactusCard
            title={"Customer Support"}
            email={"Pathway67@gmail.com"}
            phone={"+1 (800) 123-4567"}
            address={"789 Pine Drive, Apt 3B Greenwood, NY 10920 United States"}
          />

          <ContactusCard
            title={"Contact Address"}
            email={"Pathway67@gmail.com"}
            phone={"+1 (415) 987-6543"}
            address={"P.O. Box 3456 Ocean City, FL 33121 United States"}
          />

          <ContactusCard
            title={" Main Office Address"}
            email={"Pathway67@gmail.com"}
            phone={"+1 (555) 123-4567"}
            address={"Suite 200 Rivertown, CA 90210 United States"}
          />
        </div>
        <div className="grid sm:grid-cols-8 lg:grid-cols-12 sm:gap-y-8 px-3  gap-x-5 items-stretch lg:gap-y-10">
          <h1 className=" lg:text-h1  text-2xl sm:text-h2 font-semibold col-span-full sm:col-span-full  text-center  text-heading">
            Get In Touch
          </h1>
          <div className=" lg:col-span-5 sm:col-span-6 sm:justify-self-center sm:col-start-2">
            <img src={getInTouchImg} width="100%" alt="getInTouchImg" />
          </div>
          <div className=" flex flex-col sm:col-span-full gap-5 py-2 lg:col-span-6 sm:px-12 md:px-14   lg:col-start-7">
            <ContactForm
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              reset={reset}
            />
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
