import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { wakeUp } from "../api/rex-api/fetchPhotography";

import setTheme, { Theme } from "./Theme";

import Header, { SimpleHeader } from "../components/Header";
import Footer from "../components/Footer";
import HorizontalLine from "../components/HorizontalLine";

import routes from "./routes";

import styles from "./App.module.css";

interface AppProps {
  homeTitle?: string;
  theme?: Theme;
  simple?: boolean;
}

const App = ({ homeTitle = "home", theme, simple }: AppProps) => {
  // Get current route path
  const location = useLocation();

  // Get sub routes of current location
  const subRoute = routes.find(
    (route) => route.path && location.pathname.startsWith(route.path)
  );

  // Filter for other top level routes (i.e. the adjacent pages)
  const adjacentRoutes = routes.filter((route) => {
    return route.path && !location.pathname.startsWith(route.path);
  });

  // Set Theme
  setTheme(theme);

  const navigation = useNavigation();

  if (simple) {
    return (
      <div id="layoutSimple" className={styles.Layout}>
        <SimpleHeader />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return (
      <div id="layout" className={styles.Layout}>
        <div id="headerWithLine">
          <Header
            homeTitle={homeTitle}
            navLinks={subRoute}
            adjacentLinks={adjacentRoutes}
          />
          <HorizontalLine />
        </div>
        {navigation.state == "loading" ? (
          <CircularProgress color="inherit" />
        ) : (
          <Outlet />
        )}
        <div id="footerWithLine">
          <HorizontalLine />
          <Footer />
        </div>
      </div>
    );
  }
};

export const PortfolioApp = ({
  homeTitle = "photography",
  theme,
  simple,
}: AppProps) => {
  const location = useLocation();

  // Call on every route change under /portfolio
  useEffect(() => {
    wakeUp();
  }, [location.pathname]);

  return <App homeTitle={homeTitle} theme={theme} simple={simple} />;
};

export default App;
