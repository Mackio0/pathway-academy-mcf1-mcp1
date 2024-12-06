import React from "react";
import useFormStore from "../../../store/useFormStore";
import { useForm } from "react-hook-form";
import FormHeader from "../components/FormHeader";
import Footer from "../components/Footer";
import ContainerComponent from "../../../components/ContainerComponent";
import Input from "../../../components/Input";
import SecondaryBtn from "../components/SecondaryBtn";
import PrimaryBtn from "../components/PrimaryBtn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import FollowUsOn from "../components/FollowUsOn";

const ApplyFormPage = () => {
  const schema = yup.object({
    FirstName: yup.string().min(2).max(30).required(),
    LastName: yup.string().min(2).max(30).required(),
    Email: yup.string().email().required(),
    Phone: yup.string().min(7).max(12).required(),
    Message: yup.string().required(),
    DateOfBirth: yup.string().required(),
    Gender: yup.string().required(),
    Address: yup.string().required(),
    Courses: yup.string().required(),
  });
  const { isLogin, setIsLogin, setUser } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    // BACKEND
    setUser(data);
    navigate("/complete-form");
  };

  const courses = [
    "Business Startegy",
    "Development",
    "Web Design",
    "Digital Marketing",
    "Content Writing",
    "Language",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <FormHeader />
      <div className="bg-applyForm bg-cover">
        <ContainerComponent
          className={
            "h-full flex justify-center items-center mb-section-spacing px-5 lg:px-0"
          }
        >
          <div className="flex justify-center flex-col h-full w-[662px]">
            <h1 className="text-h1 font-bold text-heading my-20 text-center">
              School Application Form
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <div className="flex flex-col gap-5 mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <Input
                      className={"h-8"}
                      name="FirstName"
                      register={{ ...register("FirstName") }}
                      label={"First Name"}
                    />
                    {errors.FirstName && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.FirstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-5">
                    <Input
                      className={"h-8"}
                      name="LastName"
                      register={{ ...register("LastName") }}
                      label={"Last Name"}
                    />
                    {errors.LastName && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.LastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <Input
                      className={"h-8"}
                      name="Email"
                      register={{ ...register("Email") }}
                      label={"Email"}
                    />
                    {errors.Email && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.Email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-5">
                    <Input
                      className={"h-8"}
                      name="Phone"
                      register={{ ...register("Phone") }}
                      label={"Phone"}
                    />
                    {errors.Phone && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.Phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="dob"
                      className="text-headingPrimary text-sm"
                    >
                      Date of birth
                    </label>
                    <input
                      type="date"
                      placeholder="Heheh"
                      name="DateOfBirth"
                      {...register("DateOfBirth")}
                      className="bg-background border ps-3 border-gray-300 h-8 text-heading text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-hind"
                    />
                    {errors.DateOfBirth && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.DateOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-headingPrimary text-sm">
                      Gender
                    </label>
                    <select
                      id="courses"
                      name="Gender"
                      {...register("Gender")}
                      className="bg-background border ps-3 border-gray-300 h-8 text-heading text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-hind"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.Gender && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.Gender.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-5">
                    <Input
                      className={"h-8"}
                      name="Address"
                      register={{ ...register("Address") }}
                      label={"Address"}
                    />
                    {errors.Address && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.Address.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="courses"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select an option
                    </label>
                    <select
                      name="Courses"
                      {...register("Courses")}
                      id="courses"
                      className="bg-background h-8 border ps-3 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-hind"
                      defaultValue={""}
                    >
                      <option value="" disabled>
                        Choose a course
                      </option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    {errors.Courses && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.Courses.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      name="Message"
                      {...register("Message")}
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-hind"
                      placeholder="Tell us a few words"
                    ></textarea>
                    {errors.Message && (
                      <p className=" text-red-500 font-bold italic font-kite text-xs">
                        {errors.Message.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center  mt-20">
                <SecondaryBtn
                  className={"px-14 py-2"}
                  onClick={() => {
                    reset();
                  }}
                  isBorderGreen={true}
                  type={"reset"}
                >
                  Cancel
                </SecondaryBtn>
                <PrimaryBtn className={"px-14 py-2"} type={"submit"}>
                  Submit
                </PrimaryBtn>
              </div>
            </form>
            <FollowUsOn className={"flex items-center gap-5"} />
          </div>
        </ContainerComponent>
        <Footer isCtaOn={false} />
      </div>
    </div>
  );
};

export default ApplyFormPage;
