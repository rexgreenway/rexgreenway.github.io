import { NavLink } from "react-router-dom";

import { ReactComponent as RexLogo } from "../assets/R-Logo.svg";

import Container from "../containers/Container";

import styles from "./Header.module.css";
import HorizontalLine from "./HorizontalLine";

// NavLink Wrapper for CSS Module Use
function HeaderLink({ to, children }) {
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
