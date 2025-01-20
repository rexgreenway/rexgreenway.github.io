import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { Theme, ThemeMap } from "./Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import routes from "./routes";

import styles from "./App.module.css";

const App = ({
  homeTitle = "home",
  theme,
}: {
  homeTitle?: string;
  theme?: Theme;
}) => {
  const location = useLocation();
  const subRoute = routes.find(
    (route) => route.path && location.pathname.startsWith(route.path)
  );

  // Set Theme
  if (theme) {
    ThemeMap[theme]();
  }

  const navigation = useNavigation();

  return (
    <div className={styles.Layout}>
      <Header homeTitle={homeTitle} navLinks={subRoute} />
      {navigation.state == "loading" ? (
        <CircularProgress color="inherit" />
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default App;
