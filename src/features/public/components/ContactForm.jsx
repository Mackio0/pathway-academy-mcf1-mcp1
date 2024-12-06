import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { FiSend } from "react-icons/fi";
import FBicon from "./FBicon";
import IGicon from "./IGicon";
import TwitterIcon from "./TwitterIcon";
import Linkedinicon from "./Linkedinicon";
import YTicon from "./YTicon";
import ContactInput from "./ContactInput";

const ContactForm = ({ handleSubmit, register, errors, reset }) => {
  const handleContactForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(handleContactForm)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-5 ">
          {" "}
          <div
            onSubmit={handleSubmit(handleContactForm)}
            className="flex flex-col gap-2 flex-grow"
          >
            <label className=" " htmlFor="nameForContactForm">
              Name
            </label>

            <ContactInput
              id="nameForContactForm"
              errors={errors}
              name="Name"
              register={register}
            />
            {errors.Name && (
              <p className=" text-red-500 font-bold italic  text-xs">
                {errors.Name.message}
              </p>
            )}
          </div>{" "}
          <div className="flex flex-col gap-2 flex-grow">
            <label className=" " htmlFor="emailForContactForm">
              Email
            </label>
            <ContactInput
              id="emailForContactForm"
              errors={errors}
              name="Email"
              register={register}
              type="email"
            />

            {errors.Email && (
              <p className=" text-red-500 font-bold italic  text-xs">
                {errors.Email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <label className=" " htmlFor="phoneForContactForm">
            Phone
          </label>
          <ContactInput
            id="phoneForContactForm"
            errors={errors}
            name="Phone"
            register={register}
          />

          {errors.Phone && (
            <p className=" text-red-500 font-bold italic  text-xs">
              {errors.Phone.message}
            </p>
          )}
        </div>
        <div className="flex flex-col flex-grow gap-2 ">
          <label className=" " htmlFor="messageForContactForm">
            Message
          </label>
          <textarea
            rows="4"
            {...register("Message")}
            className={` flex ${
              errors?.Message?.message && "border-red-500 "
            }   w-full rounded border border-paraTertiary  px-3 py-2
                          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                          placeholder:text-muted-foreground 
                            disabled:cursor-not-allowed disabled:opacity-50 
                          `}
            placeholder="Tell us a few words"
            name="Message"
            id="messageForContactForm"
          ></textarea>
          {errors.Message && (
            <p className=" text-red-500 font-bold italic  text-xs">
              {errors.Message.message}
            </p>
          )}
        </div>
        <PrimaryBtn type="submit" className="   w-40  px-3 py-2">
          <span className="flex items-center">Send message</span>
          <FiSend />
        </PrimaryBtn>
      </form>
      <div className="flex gap-5 items-center">
        {" "}
        <p className=" font-medium text-para text-footerColor">Follow us on</p>
        <div className=" flex gap-2 ">
          <a href="#">
            <FBicon
              className=" p-2 rounded  bg-para4 "
              width="32"
              height="32"
              iconColor="#525252"
            />
          </a>
          <a href="#">
            {" "}
            <IGicon
              className=" p-2 rounded  bg-para4 "
              width="32"
              height="32"
              iconColor="white"
            />
          </a>
          <a href="#">
            {" "}
            <TwitterIcon
              className=" p-2 rounded  bg-para4 "
              width="32"
              height="32"
              iconColor="white"
            />
          </a>{" "}
          <a href="#">
            {" "}
            <Linkedinicon
              className=" p-2 rounded  bg-para4 "
              width="32"
              height="32"
              iconColor="white"
            />
          </a>
          <a href="#">
            <YTicon
              className=" p-2 rounded  bg-para4 "
              width="32"
              height="32"
              iconColor="white"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
