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
import { useBlogStore } from "../../../store/useBlogStore";
import LandingSection from "../components/LandingSection";
import hero from "../../../assets/blog/heroSection.png";
import CardBlog from "../components/CardBlog";
import { motion } from "framer-motion";
import LatestBlogCard from "../components/LatestBlogCard";
import HeroSection from "../components/HeroSection";

const BlogPage = () => {
  const { blogs } = useBlogStore();
  const CardBlogMotion = motion.create(CardBlog);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 50,
      },
    },
  };

  return (
    <main className="flex flex-col gap-10 sm:gap-[20px] lg:gap-[50px] sm:mb-20 mb-10 lg:mb-32 ">
      <HeroSection image={hero} title={"Blog"} />
      <h2 className="  font-semibold text-heading sm:text-4xl text-2xl self-center ">
        {" "}
        Events and announcements
      </h2>

      <ContainerComponent
        className={"flex flex-col gpa-10 sm:gap-20  "}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.1 }}
          className=" grid grid-cols-4 lg:grid-cols-12 sm:grid-cols-8 gap-x-5 gap-y-10  auto-rows-min "
        >
      
          <CardBlogMotion
            className="cardMotion"
            variants={listItem}
            img={event1Img}
            href={`/blog/${blogs[0].slug}`}
            title="10 entry-level Professional Certificates for the digital job
                market"
            description="We're excited to announce the expansion of our entry-level
                  Professional Certificate portfolio with 10 new programs from
                  industry partners. Pathway"
            date="Mar 23, 2024"
          />
          <CardBlogMotion
            className="cardMotion"
            variants={listItem}
            img={event2Img}
            href={`/blog/${blogs[0].slug}`}
            title=" Introducing Pathway Academy’s 2024 Outstanding Enterprise
                Customer Achievement Award Winners"
            description="   Ready to dive into the world of development? Whether you're
                  aiming to build websites, mobile apps, or software, this guide
                  ......."
            date="Mar 23, 2024"
          />
          <CardBlogMotion
            className="cardMotion"
            variants={listItem}
            img={event3Img}
            href={`/blog/${blogs[0].slug}`}
            title="AI Grading: Faster, Quality Feedback on Pathway Academy"
            description=" Ready to dive into the world of development? Whether you're
                  aiming to build websites, mobile apps, or software, this guide
                  ......."
            date="July 1, 2024"
          />
        </motion.div>
        <div className=" space-y-10 ">
          <h1 className=" font-semibold text-2xl sm:text-4xl text-center text-heading">
            Our Latest Blogs
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ amount: 0.1, once: true }}
            className=" grid grid-cols-4  sm:grid-cols-8 lg:grid-cols-12 gap-y-10 gap-x-5"
          >
            <LatestBlogCard
              img={LatestBlog1}
              href={`/blog/${blogs[0].slug}`}
              title="Essential Skills to Kickstart Your Development Journey"
              description="Ready to dive into the world of development? Whether you're
                    aiming to build websites, mobile apps, or software, this
                    guide"
              author="Ms.Ella"
              date="Nov 13 2024"
            />

            <LatestBlogCard
              img={LatestBlog2}
              href={`/blog/${blogs[0].slug}`}
              title=" Revolutionizing the Business Landscape"
              description="Ready to dive into the world of development? Whether you're
                    aiming to build websites, mobile apps, or software, this
                    guide"
              author="Ms. Sophia Martinez"
              date="Nov 13 2024"
            />

            <LatestBlogCard
              img={LatestBlog3}
              href={`/blog/${blogs[0].slug}`}
              title="Finding Work-Life Balance in Online Learning"
              description="Struggling to balance work, family, and learning? Discover
                    practical ways to stay productive and stress-free."
              author="Mr. Alex"
              date="Nov 13 2024"
            />

            <LatestBlogCard
              img={LatestBlog4}
              href={`/blog/${blogs[0].slug}`}
              title="Designing Your First Portfolio Website"
              description="Learn the essential steps to design a professional portfolio
                    that highlights your expertise and attracts opportunities."
              author="Ms. Olivia Parker"
              date="Nov 13 2024"
            />

            <LatestBlogCard
              img={LatestBlog5}
              href={`/blog/${blogs[0].slug}`}
              title="Web Development Trends to Watch"
              description="Stay ahead in the fast-paced tech industry with this guide
                    to the top tools and frameworks for 2024."
              author="Mr.Ethan"
              date="Nov 13 2024"
            />

            <LatestBlogCard
              img={LatestBlog6}
              href={`/blog/${blogs[0].slug}`}
              title="Unlocking Creativity Through Photography"
              description="Unlocking Creativity Through Photography."
              author="Ms. Sophia"
              date="Nov 13 2024"
            />
          </motion.div>
        </div>
      </ContainerComponent>
    </main>
  );
};

export default BlogPage;
