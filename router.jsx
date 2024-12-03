import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import NotFoundPage from "./src/pages/NotFoundPage";
import LandingPage from "./src/pages/LandingPage";
import AboutUsPage from "./src/pages/AboutUsPage";
import CourseListPage from "./src/pages/CourseListPage";
import CourseDetailPage from "./src/pages/CourseDetailPage";
import ContactUsPage from "./src/pages/ContactUsPage";
import BlogPage from "./src/pages/BlogPage";
import BlogDetailPage from "./src/pages/BlogDetailPage";
import FaqPage from "./src/pages/FaqPage";
import PrivacyPoliciesPage from "./src/pages/PrivacyPoliciesPage";
import TosPage from "./src/pages/TosPage";
import SupportPage from "./src/pages/SupportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/courses",
        element: <CourseListPage />,
      },
      {
        path: "/courses/:course-slug",
        element: <CourseDetailPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blog/:blog-slug",
        element: <BlogDetailPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/privacy-policies",
        element: <PrivacyPoliciesPage />,
      },
      {
        path: "/tos",
        element: <TosPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/login",
        element: <
      }
    ],
  },
]);

export default router;
