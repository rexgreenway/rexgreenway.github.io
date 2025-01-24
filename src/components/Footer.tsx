import Container from "../containers/Container";
import HorizontalLine from "./HorizontalLine";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div id="footer">
      <HorizontalLine />
      <Container className={styles.Footer}>
        <a href="https://rexgreenway.github.io/">
          Website designed and maintained by Rex Greenway
        </a>
        <div className={styles.Links}>
          <a href="https://github.com/RexGreenway/">
            <GitHubIcon className={styles.Link} />
          </a>
          <a href="https://www.linkedin.com/in/rexgreenway/">
            <LinkedInIcon className={styles.Link} />
          </a>
          <a href="https://www.instagram.com/rexgreenway/">
            <InstagramIcon className={styles.Link} />
          </a>
        </div>
      </Container>
    </div>
  );
}
