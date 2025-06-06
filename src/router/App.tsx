import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

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
      <div className={styles.LayoutSimple}>
        <SimpleHeader />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={styles.Layout}>
        <div>
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
        <div>
          <HorizontalLine />
          <Footer />
        </div>
      </div>
    );
  }
};

export default App;
