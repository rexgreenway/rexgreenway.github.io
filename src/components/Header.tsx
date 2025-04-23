import { NavLink } from "react-router-dom";
import { capitalize } from "@mui/material";

import RexLogo from "../assets/R-Logo.svg?react";

import { CustomRouteObject } from "../router/routes";

import Container from "../containers/Container";

import styles from "./Header.module.css";

interface HeaderProps {
  homeTitle: string;
  navLinks?: CustomRouteObject;
  adjacentLinks?: CustomRouteObject[];
}

const Header = ({ homeTitle, navLinks, adjacentLinks }: HeaderProps) => {
  return (
    <Container id="header" className={styles.Header}>
      {/* LOGO : Separate to Title as to sit next to navLinks */}
      <NavLink to="" className={styles.Logo}>
        <RexLogo />
      </NavLink>

      {/* TITLE / NAME : Nested in div to control link styling */}
      <div className={styles.Title}>
        <NavLink to="">
          <h1>Rex Greenway</h1>
        </NavLink>
      </div>

      {/* ADJACENT LINKS */}
      <div className={styles.Adjacent}>
        {adjacentLinks?.map((l) => {
          return (
            <NavLink
              to={l.path || ""}
              key={l.path}
              title={capitalize(l.path?.slice(1)!)}
            >
              {l.icon}
            </NavLink>
          );
        })}
      </div>

      {/* NAVIGATION: Based on passed contextual route hierarchy */}
      <nav className={styles.NavBar}>
        {navLinks?.children?.map((k) => {
          // Only include nav links to non dynamic segments
          if (!k.path?.includes(":")) {
            return (
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
            );
          }
        })}
      </nav>
    </Container>
  );
};

export const SimpleHeader = () => {
  return (
    <Container id="header" className={styles.SimpleHeader}>
      <NavLink to="" className={styles.Logo}>
        <RexLogo />
      </NavLink>
      <NavLink to="">
        <h1>Rex Greenway</h1>
      </NavLink>
    </Container>
  );
};

export default Header;
