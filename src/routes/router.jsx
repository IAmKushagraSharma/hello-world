import App from "../App";
import { createBrowserRouter } from "react-router-dom";

// from here
import ErrorPage from "../pages/error-page";
import AboutPage from "../pages/about-page";
import HireMePage from "../pages/hire-me-page";
import ContactPage from "../pages/contact-page";
import HomePage from "../pages/home-page";
import PortfolioPage from "../pages/portfolio-page";
// to hrer

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
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

export default router;
