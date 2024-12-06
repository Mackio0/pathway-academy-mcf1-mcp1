import React from "react";
import ContainerComponent from "../../../components/ContainerComponent.jsx";
import LandingImage from "../../../assets/home/heroOther/heroSection.png";
import PrimaryBtn from "../components/PrimaryBtn.jsx";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Video,
  Pencil,
  Hotel,
  Globe,
  Code,
  Camera,
  Figma,
  BadgeCheck,
  Star,
} from "lucide-react";
import WelcomeComponent from "../components/WelcomeComponent.jsx";
import AchievementStats from "../components/AchievementStats.jsx";
import Empowering from "../../../assets/about-us/heroOther/empowering.png";
import Facilities from "../../../assets/about-us/heroOther/Facilities.png";
import FeedBackSlide from "../components/FeedBackSlide.jsx";
import { useFacilitieDataStore } from "../../../store/useFacilitieDataStore.js";
import LogoCarousel from "../../../components/LogoCarousel.jsx";
import { useCourseStore } from "../../../store/useCourseStore.js";
import CourseCard from "../components/CourseCard.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { useFaqStore } from "../../../store/useFaqStore.js";

const LandingPage = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Digital Marketing",
      courses: 5,
      icon: <BarChart3 />,
    },
    {
      id: 2,
      title: "Video Editor",
      courses: 10,
      icon: <Video />,
    },
    {
      id: 3,
      title: "Content Writing",
      courses: 5,
      icon: <Pencil />,
    },
    {
      id: 4,
      title: "Business",
      courses: 10,
      icon: <Hotel />,
    },
    {
      id: 5,
      title: "Language",
      courses: 5,
      icon: <Globe />,
    },
    {
      id: 6,
      title: "Web Development",
      courses: 5,
      icon: <Code />,
    },
    {
      id: 7,
      title: "Photography",
      courses: 10,
      icon: <Camera />,
    },
    {
      id: 8,
      title: "UI UX",
      courses: 12,
      icon: <Figma />,
    },
  ];

  const { courses } = useCourseStore();

  const { data: FacilitiesData } = useFacilitieDataStore();

  const { faqs } = useFaqStore();

  return (
    <section className={""}>
      <div className="relative">
        <div className="w-full">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            src={LandingImage}
            alt="landing-image"
          />

          {/*stars card*/}
          <div className="hidden md:flex flex-col absolute bottom-10 right-10 bg-white rounded-xl shadow-lg p-5 items-center gap-2">
            <div className={"flex items-center gap-2"}>
              <Star className="w-6 h-6 text-primary-500 fill-current" />
              <span className="font-semibold text-gray-900">Trust pilot</span>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-full h-full text-primary-500 border border-primary-500 p-1 bg-primary-500 fill-white"
                />
              ))}
              <span className="font-semibold text-gray-900">4.8/5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Reviewed by 365 users
              </span>
            </div>
          </div>
        </div>
        <ContainerComponent className="px-4  py-8 md:absolute md:top-1/2 md:left-0 md:right-0 md:transform md:-translate-y-1/2">
          <div className="md:max-w-3xl">
            <span className="text-sm sm:text-base font-kite text-secondary">
              Your path to knowledge, made simple
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-headingPrimary md:text-heroPara mt-4">
              Your Journey to Knowledge Starts{" "}
              <span className="md:text-primary-400">Here</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg md:text-para2 my-6 md:max-w-2xl">
              Whether you're here to learn something new, enhance your skills,
              or explore your passions, Pathway Academy provides the tools and
              guidance to turn your goals into achievements
            </p>

            <div className="flex flex-row items-start gap-4">
              <Link to="/about-us" className="">
                <PrimaryBtn className="w-full sm:w-auto px-6 py-3 rounded text-center">
                  Learn more
                </PrimaryBtn>
              </Link>
              <Link to="/courses" className="">
                <button className="w-full sm:w-auto border border-para1 px-6 py-3 text-heading rounded text-center hover:bg-para1 hover:text-white md:text-para2 transition-colors duration-300">
                  Our courses
                </button>
              </Link>
            </div>
          </div>
        </ContainerComponent>
      </div>
      <ContainerComponent>
        {/*hero section*/}

        <div
          className={
            "mt-[40px] space-y-[40px] md:space-y-[80px] lg:space-y-[120px] mb-[120px]"
          }
        >
          {/*categories section*/}
          <div>
            <div className={"text-center"}>
              <p className={"text-[16px] font-kite text-secondary"}>
                Categories
              </p>

              <h1 className={"text-[25px] font-bold"}>Our Course Categories</h1>
            </div>

            <div className={"mb-[40px]"}>
              <div
                className={
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[20px] lg:mt-[40px]"
                }
              >
                {categoriesData.map((category) => {
                  return (
                    <div key={category.id}>
                      <div
                        className={
                          "flex items-center gap-4 border-2 border-para2 rounded-[6px] p-4 shadow-md"
                        }
                      >
                        <div className={"w-[20px] h-[20px] text-primary-500"}>
                          {category.icon}
                        </div>
                        <div className={"flex flex-col items-start space-y-2"}>
                          <h1
                            className={
                              "text-[16px] font-semibold text-headingPrimary"
                            }
                          >
                            {category.title}
                          </h1>
                          <p className={"text-[16px] font-hind text-para1"}>
                            {category.courses} Courses
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to={"/courses"}>
                <PrimaryBtn
                  className={
                    "py-2 px-2 rounded-[6px] mx-auto mt-[20px] lg:mt-[40px]"
                  }
                >
                  See Course List
                </PrimaryBtn>
              </Link>
            </div>
          </div>

          {/*empowering section*/}
          <div className="grid grid-cols-1 md:grid-cols-11 md:gap-8 lg:gap-12 items-center">
            <img
              src={Empowering}
              alt="empowering"
              className="w-full h-auto max-h-[316px] md:max-h-none md:w-full md:h-auto mx-auto md:mx-0 object-contain col-span-full md:col-span-5 mb-8 md:mb-0"
            />
            <div className="col-span-full md:col-span-6">
              <WelcomeComponent />
            </div>
          </div>

          {/*achievement stats*/}
          <AchievementStats />

          {/*card section*/}
          <div>
            <div className={"mb-[20px] text-center"}>
              <p className={"text-[16px] font-kite text-secondary mb-2"}>
                Discover News
              </p>

              <h1 className={"text-[25px] font-bold"}>
                Our Top Listed Courses
              </h1>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          {/*facilities*/}
          <div className="grid grid-cols-1 md:grid-cols-11 md:gap-8 lg:gap-12 items-center">
            <div className="col-span-full md:col-span-5 mb-8 md:mb-0">
              <img
                src={Facilities}
                alt="Facilities"
                className="w-full max-w-[388px] md:max-w-[525px] h-auto mx-auto object-contain"
              />
            </div>
            <div className="col-span-full md:col-span-6 space-y-6 md:space-y-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold text-heading">
                Our Facilities
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-para1">
                Our platform is designed for learners with busy schedules,
                allowing you to learn whenever it's convenient for you
              </p>
              <ul className="space-y-6 md:space-y-4">
                {FacilitiesData.map((facility) => (
                  <li key={facility.id}>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <BadgeCheck className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-primary-600" />
                      <span className="text-base md:text-lg lg:text-xl font-semibold text-heading">
                        {facility.title}
                      </span>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-para1 leading-relaxed">
                      {facility.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <LogoCarousel />

          {/*    feedback*/}
          <div>
            <h1
              className={
                "font-bold text-heading text-[25px] md:text-[31px] text-center mb-[30px]"
              }
            >
              Some valuable feedback from our students
            </h1>

            <FeedBackSlide />
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </ContainerComponent>
    </section>
  );
};

export default LandingPage;
