import { NavLink, RouteObject } from "react-router-dom";

import RexLogo from "../assets/R-Logo.svg?react";

import Container from "../containers/Container";
import HorizontalLine from "./HorizontalLine";

import styles from "./Header.module.css";

const HeaderLink = ({ to }: { to: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : "")}
      end
    >
      {to || "home"}
    </NavLink>
  );
};

const Header = ({ navLinks }: { navLinks?: RouteObject }) => {
  return (
    <div id="header">
      <Container className={styles.Header}>
        {/* TODO: Make LOGO/TITLE Clickable */}
        <RexLogo className={styles.Logo} />
        <h1 className={styles.Title}>Rex Greenway</h1>

        {/* NAVIGATION: Based on passed contextual route hierarchy */}
        <nav className={styles.NavBar}>
          {navLinks?.children?.map((k) => (
            <HeaderLink key={k.path || "home"} to={k.path || ""} />
          ))}
        </nav>
      </Container>
      <HorizontalLine />
    </div>
  );
};

export default Header;
