import React from "react";
import useFormStore from "../../../store/useFormStore";
import { useForm } from "react-hook-form";
import FormHeader from "../components/FormHeader";
import Footer from "../components/Footer";
import ContainerComponent from "../../../components/ContainerComponent";
import Input from "../../../components/Input";
import SecondaryBtn from "../components/SecondaryBtn";
import PrimaryBtn from "../components/PrimaryBtn";

import { useNavigate } from "react-router-dom";
import FollowUsOn from "../components/FollowUsOn";

const ApplyFormPage = () => {
  const { isLogin, setIsLogin, setUser } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    // BACKEND
    setUser(data);
    navigate("/complete-form");
  };

  const courses = [
    "Computer Science",
    "Business Administration",
    "Engineering",
    "Arts & Design",
    "Medicine",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <FormHeader />
      <div className="bg-applyForm ">
        <ContainerComponent
          className={
            "h-full flex justify-center items-center mb-section-spacing"
          }
        >
          <div className="flex justify-center flex-col h-full w-[662px]">
            <h1 className="text-h1 font-bold text-heading my-20 text-center">
              School Application Form
            </h1>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input className={"h-8"} label={"First Name"} />
                </div>
                <div className="space-y-2">
                  <Input className={"h-8"} label={"Last Name"} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input className={"h-8"} label={"Email"} />
                </div>

                <div className="space-y-2">
                  <Input className={"h-8"} label={"Phone"} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="dob">Date of birth</label>
                  <input
                    type="date"
                    className="bg-background border border-gray-300 h-8 text-heading text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="">
                  <label className={"text-headingPrimary text-sm"}>
                    Gender
                  </label>
                  <select
                    id="courses"
                    className="bg-background border border-gray-300 h-8 text-heading text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Input className={"h-8"} label={"Address"} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="courses"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="courses"
                    className="bg-background h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tell us a few words"
                  ></textarea>
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
            <FollowUsOn className={"flex items-center gap-5"}/>
          </div>
        </ContainerComponent>
        <Footer isCtaOn={false} />
      </div>
    </div>
  );
};

export default ApplyFormPage;
