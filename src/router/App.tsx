import { Outlet, useLocation } from "react-router-dom";

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

  return (
    <div className={styles.Layout}>
      <Header homeTitle={homeTitle} navLinks={subRoute} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
