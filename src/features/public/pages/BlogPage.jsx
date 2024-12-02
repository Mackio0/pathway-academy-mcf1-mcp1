import React from "react";
import event1Img from "../../../assets/blog/events/event-1.png";
import event2Img from "../../../assets/blog/events/event-2.png";
import event3Img from "../../../assets/blog/events/event-3.png";
import LatestBlog1 from "../../../assets/blog/latestBlog/blog-1.png";
import LatestBlog2 from "../../../assets/blog/latestBlog/blog-2.png";
import LatestBlog3 from "../../../assets/blog/latestBlog/blog-3.png";
import LatestBlog4 from "../../../assets/blog/latestBlog/blog-4.png";
import LatestBlog5 from "../../../assets/blog/latestBlog/blog-5.png";
import LatestBlog6 from "../../../assets/blog/latestBlog/blog-6.png";
import ContainerComponent from "../../../components/ContainerComponent";
import { Link } from "react-router-dom";
import { useBlogStore } from "../../../store/useBlogStore";
import LandingSection from "../components/LandingSection";
import hero from "../../../assets/blog/heroSection.png";

const BlogPage = () => {
  const { blogs } = useBlogStore();
  return (
    <main className="flex flex-col gap-section-spacing mb-28">
      <LandingSection name="Blog" imgPath={hero} />

      <ContainerComponent className={"flex flex-col gap-section-spacing"}>
        <div className=" grid grid-cols-12  gap-x-5 gap-y-10  auto-rows-min ">
          <h2 className=" col-span-full font-semibold text-heading text-4xl justify-self-center self-center ">
            {" "}
            Events and announcements
          </h2>
          <div className="  col-span-6 shadow border border-borderBlog rounded ">
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" cursor-pointer flex flex-col gap-5 pb-4"
            >
              <img className="" src={event1Img} alt="eventPhoto1" />

              <div className=" px-4 space-y-4">
                <p className=" text-2xl text-para4 font-medium">
                  Announcing 10 entry-level Professional Certificates from our
                  biggest partners as digital transformation reshapes the labor
                  market
                </p>
                <p className=" text-para4  ">July 28, 2024</p>
              </div>
            </Link>
          </div>

          <div className=" flex flex-col  col-span-6     gap-5">
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" cursor-pointer flex gap-5 shadow rounded border border-borderBlog items-center"
            >
              <img src={event2Img} alt="eventPhoto2" />
              <div className="flex flex-col gap-4">
                <p className=" font-medium text-2xl text-para4 ">
                  Introducing Pathway Academy’s 2024 Outstanding Enterprise
                  Customer Achievement Award Winners
                </p>
                <p className=" text-para4 ">Mar 23, 2024</p>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" cursor-pointer flex gap-5 shadow rounded border border-borderBlog items-center"
            >
              <img src={event3Img} alt="eventPhoto3" />
              <div className="flex flex-col gap-4">
                <p className=" font-medium text-2xl text-para4 ">
                  "AI Grading: Faster, Quality Feedback on Pathway Academy
                </p>
                <p className=" text-para4 ">July 1, 2024</p>
              </div>
            </Link>
          </div>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-semibold text-4xl text-center text-heading">
            Our Latest Blogs
          </h1>
          <div className=" grid grid-cols-12 gap-y-10 gap-x-5">
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog1} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] text-para3  mb-2 font-semibold">
                  Essential Skills to Kickstart Your Development Journey
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Ready to dive into the world of development? Whether you're
                    aiming to build websites, mobile apps, or software, this
                    guide
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms.Ella
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog2} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] font-sans text-para3 mb-2 font-semibold">
                  Revolutionizing the Business Landscape
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Discover the latest trends shaping the business world and
                    learn how to adapt your strategy to stay ahead in 2024.
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms. Sophia Martinez
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog3} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] text-para3 mb-2 font-semibold">
                  Finding Work-Life Balance in Online Learning
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Struggling to balance work, family, and learning? Discover
                    practical ways to stay productive and stress-free.
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Mr. Alex
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog4} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] text-para3 mb-2 font-semibold">
                  Designing Your First Portfolio Website{" "}
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Learn the essential steps to design a professional portfolio
                    that highlights your expertise and attracts opportunities.
                  </p>
                </div>
                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms. Olivia Parker
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog5} alt="eventPhoto1" />

              <div className=" flex flex-col gap-5 flex-grow   px-1 ">
                <p className=" text-[1.4rem] font-sans text-para3 mb-2 font-semibold">
                  Web Development Trends to Watch{" "}
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className="font-hind mt-auto text-para1 line-clamp-2 ">
                    Stay ahead in the fast-paced tech industry with this guide
                    to the top tools and frameworks for 2024.
                  </p>
                </div>

                <div className="flex justify-between  border-t border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Mr. Ethan
                  </h3>
                  <p className=" text-para1 font-hind">March 10 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog6} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] text-para3 mb-2 font-semibold">
                  Unlocking Creativity Through Photography{" "}
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Master the art of photography with practical tips on
                    composition, lighting, and storytelling for breathtaking
                    images.
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms. Sophia
                  </h3>
                  <p className=" text-para1 font-hind">Feb 13 2024</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ContainerComponent>
    </main>
  );
};

export default BlogPage;
