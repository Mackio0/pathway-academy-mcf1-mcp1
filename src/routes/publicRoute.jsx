import { lazy } from "react";

// const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
// const ContactUsPage = lazy(() =>
//   import("../features/public/pages/ContactUsPage")
// );

// import LandingPage from "../features/public/pages/LandingPage";
// import CourseListPage from "../features/public/pages/CourseListPage";
// import CourseDetailPage from "../features/public/pages/CourseDetailPage";
// import BlogPage from "../features/public/pages/BlogPage";
// import BlogDetailPage from "../features/public/pages/BlogDetailPage";
// import FaqPage from "../features/public/pages/FaqPage";
// import PrivacyPoliciesPage from "../features/public/pages/PrivacyPoliciesPage";
// import TosPage from "../features/public/pages/TosPage";
// import SupportPage from "../features/public/pages/SupportPage";

// import { lazy } from "react";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const LandingPage = lazy(() =>
  import("../features/public/pages/LandingPage")
);
const CourseListPage = lazy(() =>
  import("../features/public/pages/CourseListPage")
);
const CourseDetailPage = lazy(() =>
  import("../features/public/pages/CourseDetailPage")
);
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const BlogDetailPage = lazy(() =>
  import("../features/public/pages/BlogDetailPage")
);
const FaqPage = lazy(() => import("../features/public/pages/FaqPage"));
const PrivacyPoliciesPage = lazy(() =>
  import("../features/public/pages/PrivacyPoliciesPage")
);
const TosPage = lazy(() => import("../features/public/pages/TosPage"));
const SupportPage = lazy(() => import("../features/public/pages/SupportPage"));

// const publicRoute = [
//   {
//     index: true,
//     element: <HomePage />,
//   },
//   {
//     path: "about-us",
//     element: <AboutUsPage />,
//   },
//   {
//     path: "contact-us",
//     element: <ContactUsPage />,
//   },
// ];

const publicRoute = [
  {
    path: "home",
    element: <LandingPage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "courses",
    element: <CourseListPage />,
  },
  {
    path: "courses/:course-slug",
    element: <CourseDetailPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "blogs",
    element: <BlogPage />,
  },
  {
    path: "blog/:blog-slug",
    element: <BlogDetailPage />,
  },
  {
    path: "faq",
    element: <FaqPage />,
  },
  {
    path: "privacy-policies",
    element: <PrivacyPoliciesPage />,
  },
  {
    path: "tos",
    element: <TosPage />,
  },
  {
    path: "support",
    element: <SupportPage />,
  },
];

export default publicRoute;
