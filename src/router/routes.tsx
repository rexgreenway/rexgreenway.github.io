import { RouteObject } from "react-router-dom";

import { DARK_THEME, LIGHT_THEME } from "@contexts";

// App Layouts
import App, { PortfolioApp } from "./App";

// Icons
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import TerminalIcon from "@mui/icons-material/Terminal";

// Pages
import Home from "../pages/software/Home";
import Projects from "../pages/software/Projects";
import AboutPage from "../pages/software/About";

import Photography from "../pages/portfolio/Photography";
import CollectionPage from "../pages/portfolio/Collection";
import Archive from "../pages/portfolio/Archive";

// Extended Route Type
export type CustomRouteObject = RouteObject & {
  icon?: React.ReactNode | null;
};

// ROUTES
const softwareRoutes: CustomRouteObject = {
  path: "/software",
  element: <App theme={DARK_THEME} />,
  icon: <TerminalIcon />,
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

const portfolioRoutes: CustomRouteObject = {
  path: "/portfolio",
  element: <PortfolioApp homeTitle="photography" theme={LIGHT_THEME} />,
  icon: <CameraRollIcon />,
  children: [
    {
      index: true,
      element: <Photography />,
    },
    {
      path: "archive",
      children: [
        {
          index: true,
          element: <Archive />,
        },
        {
          path: ":collectionId",
          element: <CollectionPage />,
        },
      ],
    },
  ],
};

// 1st element is the default home page
const routes = [softwareRoutes, portfolioRoutes];

export default routes;
