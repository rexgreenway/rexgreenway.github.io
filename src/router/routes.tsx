import { RouteObject } from "react-router-dom";

import App from "./App";
import { Theme } from "./Theme";

// Icons
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import TerminalIcon from "@mui/icons-material/Terminal";

// Pages
import Home from "../pages/software/Home";
import Projects from "../pages/software/Projects";
import AboutPage from "../pages/software/About";

import Photography from "../pages/portfolio/Photography";
import CollectionPage from "../pages/portfolio/Collection";
import Links from "../pages/links/Links";

// Extended Route Type
export type CustomRouteObject = RouteObject & {
  icon?: React.ReactNode | null;
};

// ROUTES
const softwareRoutes: CustomRouteObject = {
  path: "/software",
  element: <App theme={Theme.Dark} />,
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
  element: <App homeTitle="photography" theme={Theme.Light} />,
  icon: <CameraRollIcon />,
  children: [
    {
      index: true,
      element: <Photography />,
    },
    {
      path: ":collectionId",
      element: <CollectionPage />,
    },
  ],
};

const linkRoutes: CustomRouteObject = {
  path: "/links",
  element: <App homeTitle="links" simple={true} />,
  children: [
    {
      index: true,
      element: <Links />,
    },
  ],
};

// 1st element is the default home page
const routes = [linkRoutes, softwareRoutes, portfolioRoutes];

export default routes;
