import { NavLink } from "react-router-dom";

import RexLogo from "../assets/R-Logo.svg?react";

import { CustomRouteObject } from "../router/routes";

import Container from "../containers/Container";
import HorizontalLine from "./HorizontalLine";

import styles from "./Header.module.css";
import { capitalize } from "@mui/material";

const Header = ({
  homeTitle,
  navLinks,
  adjacentLinks,
}: {
  homeTitle: string;
  navLinks?: CustomRouteObject;
  adjacentLinks?: CustomRouteObject[];
}) => {
  console.log(adjacentLinks);

  return (
    <div id="header">
      <Container className={styles.Header}>
        <NavLink to="" className={styles.Logo}>
          <RexLogo />
        </NavLink>

        <NavLink to="" className={styles.Title}>
          <h1>Rex Greenway</h1>
        </NavLink>

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
      <HorizontalLine />
    </div>
  );
};

export default Header;
