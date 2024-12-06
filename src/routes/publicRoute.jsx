import { lazy } from "react";
const CourseListPage = lazy(() => import("../features/public/courseDetail/Pages/CourseListPage"));
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const LandingPage = lazy(() => import("../features/public/pages/LandingPage"));
// const CourseListPage = lazy(() =>
//   import("../features/public/pages/CourseListPage")
// );
const CourseDetailPage = lazy(() =>
  import("../features/public/courseDetail/Pages/CourseDetailPage")
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

const publicRoute = [
  {
    path: "/",
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
    path: "courses/course-detail",
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
    path: "blog/:blogSlug",
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
