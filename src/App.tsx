import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.Layout}>
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
