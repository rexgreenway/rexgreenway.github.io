import { RouteObject } from "react-router-dom";

import App from "./App";
import { Theme } from "./Theme";

// Pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutPage from "../pages/About";
import Photography from "../pages/Photography";

const softwareRoutes: RouteObject = {
  path: "/software",
  element: <App theme={Theme.Dark} />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
  ],
};

const portfolioRoutes: RouteObject = {
  path: "/portfolio",
  element: <App homeTitle="photography" theme={Theme.Light} />,
  children: [
    {
      index: true,
      element: <Photography />,
    },
  ],
};

const routes = [softwareRoutes, portfolioRoutes];

export default routes;
