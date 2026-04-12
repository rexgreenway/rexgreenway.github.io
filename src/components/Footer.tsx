import { GitHub, Instagram, LinkedIn, ViewStream } from "@mui/icons-material";

import Container from "../containers/Container";
import { ToggleThemeButton } from "./elements";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container id="footer" className={styles.Footer}>
      <ToggleThemeButton />
      <p className={styles.Credits}>Designed and maintained by Rex Greenway</p>
      <div className={styles.Links}>
        <a href="https://links.rexgreenway.me">
          <ViewStream className={styles.Link} />
        </a>
        <a href="https://github.com/RexGreenway/">
          <GitHub className={styles.Link} />
        </a>
        <a href="https://www.linkedin.com/in/rexgreenway/">
          <LinkedIn className={styles.Link} />
        </a>
        <a href="https://www.instagram.com/rexgreenway/">
          <Instagram className={styles.Link} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
