import React from "react";
import TermACondition from "../components/TermACondition";
import ContainerComponent from '../../../components/ContainerComponent'

const TosPage = () => {
  const TAC = [
    {
      title: "Introduction",
      description:
        "By using Pathway Academy’s services, including enrolling in courses, you agree to these Terms and Conditions. We reserve the right to modify these terms at any time. For questions, contact us to pathway67@gmail.com",
    },
    {
      title: "Eligibility",
      description:
        "You must be at least 16 years old to enroll. If under 18, you need parental consent. You are responsible for ensuring your information is accurate and up-to-date ",
    },
    {
      title: "Services Provided",
      description:
        "Pathway Academy offers online courses, workshops, and educational programs. Course materials are provided for personal use and access is limited to the duration of your enrollment.",
    },
    {
      title: "Account Creation",
      description:
        "To enroll, you must create an account. You are responsible for keeping your login information secure. Do not share your account or misuse the platform.",
    },
    {
      title: "Course Enrollment and Fees",
      description:
        "Enrollment requires payment. We accept [KPZ Pay, AYA Pay, Wave Pay]. A refund is available within 7 days of enrollment if you haven't accessed the course. After 7 days, no refund is provided unless under exceptional circumstances.",
    },
    {
      title: "Intellectual Property",
      description:
        "All content (videos, materials, etc.) is owned by Pathway Academy. You are granted a non-transferable, non-commercial license to access and use course materials.",
    },
    {
      title: "Code of Conduct",
      description:
        "Respectful behavior is expected in all interactions. We reserve the right to suspend or terminate your access for misconduct. No refunds are given if your access is terminated for violations.",
    },
    {
      title: "Privacy and Data Collection",
      description:
        "We collect personal information to process your enrollment, payments, and improve services. Your data will be protected but shared with trusted third parties for payment processing or communication purposes.",
    },
    {
      title: "Limitation of Liability",
      description:
        "Pathway Academy is not liable for any damages or losses related to course access or use. Our liability is limited to the amount you paid for the course.",
    },
    {
      title: "Termination",
      description:
        "You can terminate your account by contacting us. We may suspend or terminate your access for failure to comply with these Terms. Fees will not be refunded if your access is terminated due to violations.",
    },
    {
      title: "Amendments",
      description:
        "We may update these Terms at any time. Continued use of our services after changes means you accept the updated Terms.",
    },
    {
      title: "Contact Information",
      description: "For support or inquiries, contact us at:",
      lists: ["Email: [Pathway67@gmail.com]", "Phone: [+1 (555) 123-4567]"],
    },
  ];
  return (
    <section className=" flex flex-col gap-10 sm:gap-20 lg:gap-section-spacing mb-10 sm:mb-20 lg:mb-section-spacing">
      <div
        className={` lg:h-[420px] sm:h-[220px] md:h-[274px] h-[200px]   flex  justify-center bg-bg2 items-center  `}
      >
        <h1 className=" text-heading sm:text-3xl text-2xl lg:text-h1 md:text-h2 font-bold ">Terms & Condition</h1>
      </div>
      <ContainerComponent className=" grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-5  ">
      <ul className=" col-span-full lg:col-span-8 lg:col-start-2 md:space-y-6 sm:space-y-4 space-y-3 ">
        {TAC.map((el, index) => (
          <TermACondition
            key={index}
            number={index}
            title={el.title}
            description={el.description}
            lists={el.lists}
          />
        ))}
      </ul>
      </ContainerComponent>
    </section>
  );
};

export default TosPage;
