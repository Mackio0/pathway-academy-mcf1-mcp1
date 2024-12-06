import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
// import ApplyFormCompletePage from "../features/public/pages/ApplyFormCompletePage";
const ApplyFormPage = lazy(() => import("../features/public/pages/ApplyFormPage"));
const ApplyFormCompletePage = lazy(() => import("../features/public/pages/ApplyFormCompletePage"))

const formRoute = [
  {
    path: "apply-form",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ApplyFormPage />
      </Suspense>
    ),
  },
  {
    path: "complete-form",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ApplyFormCompletePage />
      </Suspense>
    ),
  }
];

export default formRoute;
