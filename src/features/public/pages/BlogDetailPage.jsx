import React from "react";
import useDateFormat from "../hooks/useDateFormat";
import { Link, useParams } from "react-router-dom";
import { useBlogStore } from "../../../store/useBlogStore";
import ContainerComponent from "../../../components/ContainerComponent";
import event1Img from "../../../assets/blog/events/event-1.png";
import { f } from "html2pdf.js";

const BlogDetailPage = () => {
  const { blogSlug } = useParams();
  const { blogs } = useBlogStore();
  const currentElementIndex = blogs.findIndex((el) => el.slug === blogSlug);

  const date = useDateFormat(blogs[currentElementIndex].date);
  console.log(date);

  // const formatDate = useDateFormat()
  return (
    <section className=" space-y-section-spacing mb-32">
      <section className="  grid-rows-[420px] items-center col-span-12 grid grid-cols-12  gap-5 bg-bg1">
        <div className=" col-span-8 col-start-3 px-9  space-y-4 mx-auto">
          <p className=" text-para4  ">{date}</p>
          <p className=" text-2xl text-para4 font-medium">
            Announcing 10 entry-level Professional Certificates from our biggest
            partners as digital transformation reshapes the labor market
          </p>
        </div>
      </section>
      <ContainerComponent className="grid grid-cols-12   items-center gap-x-5 gap-y-section-spacing ">
        <div className=" rounded-md space-y-6   col-span-7  ">
          <img src={event1Img} width="100%" alt="" />
          <h2 className="px-4 text-heading font-semibold text-2xl text-wrap w-[80%]">
            By Marni Baker , Chief Content Officer, Pathway Academy
          </h2>
          <p className="px-4 text-para2 text-para4  w-[80%]">
            We're excited to announce the expansion of our entry-level
            Professional Certificate portfolio with 10 new programs from
            industry partners. Pathway Academy now offers 80+ entry-level
            certificates across various job roles, with nearly half launched in
            2024. These programs are designed to equip learners for in-demand,
            entry-level jobs as technology reshapes the labor market.
          </p>
          <ul className=" px-4 space-y-6 pr-20  ">
            <li
              className="
          "
            >
              <div className=" space-y-5 inline">
                {" "}
                <div className="flex items-center gap-5">
                  {" "}
                  <div className="size-3 bg-black rounded-full inline-block"></div>
                  <h1 className="font-semibold inline-block text-heading text-3xl">
                    New Opportunities for Career Growth
                  </h1>{" "}
                </div>
                <p className=" pl-8   text-para font-hind text-para4">
                  In collaboration with our largest industry partners, Pathway
                  Academy is excited to offer 10 entry-level Professional
                  Certificates. As digital transformation reshapes the labor
                  market, these certificates are designed to equip you with
                  essential skills that are in high demand.
                </p>
              </div>
            </li>
            <li
              className="
       "
            >
              {" "}
              <div className="flex items-center gap-5">
                {" "}
                <div className="size-3 bg-black rounded-full inline-block"></div>
                <h1 className="font-semibold text-heading text-3xl">
                  Focus on In-Demand Skills
                </h1>
              </div>
              <p className=" pl-8   text-para font-hind text-para4">
                Our courses cover critical areas such as Data Analytics,
                Cybersecurity, Cloud Computing, Digital Marketing, and
                more—helping you build a strong foundation for a career in the
                ever-evolving digital workforce.
              </p>
            </li>
            <li
              className="
       "
            >
              <div className="flex items-center gap-5">
                {" "}
                <div className="size-3 bg-black rounded-full inline-block"></div>
                <h1 className="font-semibold text-heading text-3xl">
                  Industry-Recognized Credentials
                </h1>
              </div>{" "}
              <p className=" pl-8   text-para font-hind text-para4">
                Earn certifications backed by some of the biggest names in the
                tech and business sectors. These credentials are recognized by
                employers around the world, ensuring you have the skills they’re
                looking for.
              </p>
            </li>{" "}
            <li
              className="
        "
            >
              <div className="flex items-center gap-5">
                {" "}
                <div className="size-3 bg-black rounded-full inline-block"></div>
                <h1 className="font-semibold text-heading text-3xl">
                  For Beginners and Career Changers
                </h1>
              </div>{" "}
              <p className=" pl-8   text-para font-hind text-para4">
                Whether you're just starting your career or transitioning into a
                new field, these entry-level programs are designed to help you
                gain hands-on experience and valuable expertise, preparing you
                for high-demand roles across industries.
              </p>
            </li>{" "}
            <li
              className="
"
            >
              {" "}
              <div className="flex items-center gap-5">
                {" "}
                <div className="size-3 bg-black rounded-full inline-block"></div>
                <h1 className="font-semibold text-heading text-3xl">
                  Start Your Journey Today
                </h1>
              </div>{" "}
              <p className=" pl-8   text-para font-hind text-para4">
                Take control of your future with professional certificates that
                open doors to exciting career opportunities in a digital-first
                world.
              </p>
            </li>
          </ul>
        </div>
        <div className="   col-span-4 flex flex-col gap-2  p-2 shadow-sm border rounded">
          <h3 className=" font-medium text-2xl text-heading border-b border-borderBlog py-2">
            Keep Reading
          </h3>
          {blogs[currentElementIndex + 1] && (
            <Link
              to={`/blog/${blogs[currentElementIndex + 1].slug}`}
              className=" font-medium text-para text-paraBlue"
            >
              Introducing Pathway Academy’s 2024 Outstanding Enterprise Customer
              Achievement Award Winners
            </Link>
          )}
          {blogs[currentElementIndex + 2] && (
            <Link
              to={`/blog/${blogs[currentElementIndex + 2].slug}`}
              className=" font-medium text-para text-paraBlue"
            >
              AI Grading: Faster, Quality Feedback on Pathway Academy
            </Link>
          )}
        </div>
      </ContainerComponent>
    </section>
  );
};

export default BlogDetailPage;
