import { NavLink, RouteObject } from "react-router-dom";

import RexLogo from "../assets/R-Logo.svg?react";

import Container from "../containers/Container";
import HorizontalLine from "./HorizontalLine";

import styles from "./Header.module.css";

const Header = ({
  homeTitle,
  navLinks,
}: {
  homeTitle: string;
  navLinks?: RouteObject;
}) => {
  return (
    <div id="header">
      <Container className={styles.Header}>
        <NavLink to="" className={styles.Logo}>
          <RexLogo />
        </NavLink>
        <NavLink to="" className={styles.Title}>
          <h1>Rex Greenway</h1>
        </NavLink>

        {/* NAVIGATION: Based on passed contextual route hierarchy */}
        <nav className={styles.NavBar}>
          {navLinks?.children?.map((k) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              key={k.path || "home"}
              to={k.path || ""}
              end
            >
              {k.path || homeTitle}
            </NavLink>
          ))}
        </nav>
      </Container>
      <HorizontalLine />
    </div>
  );
};

export default Header;
