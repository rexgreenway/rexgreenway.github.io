import { NavLink } from "react-router-dom";

import RexLogo from "../assets/R-Logo.svg?react";

import Container from "../containers/Container";
import HorizontalLine from "./HorizontalLine";

import styles from "./Header.module.css";
import { ReactNode } from "react";

// NavLink Wrapper for CSS Module Use
function HeaderLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      {children}
    </NavLink>
  );
}

function Header() {
  return (
    <div id="header">
      <Container className={styles.Header}>
        {/* TODO: Make LOGO/TITLE Clickable */}
        <RexLogo className={styles.Logo} />
        <h1 className={styles.Title}>Rex Greenway</h1>
        <nav className={styles.NavBar}>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/projects">Projects</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
        </nav>
      </Container>
      <HorizontalLine />
    </div>
  );
}

export default Header;
