import App from "../App";
import ErrorPage from "../pages/error-page";
import AboutPage from "../pages/about-page";
import { createBrowserRouter } from "react-router-dom";
import HireMePage from "../pages/hire-me-page";
import ContactPage from "../pages/contact-page";
import HomePage from "../pages/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/hire-me",
        element: <HireMePage />,
      },
    ],
  },
]);

export default router;
