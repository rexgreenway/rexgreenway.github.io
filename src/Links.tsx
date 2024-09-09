import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./Links.module.css";

export default function Links() {
    return (
        <div className={styles.Links}>
            <a href="https://github.com/RexGreenway/">
                <GitHubIcon className={styles.Link} />
            </a>
            <a href="https://www.linkedin.com/in/rexgreenway/">
                <LinkedInIcon className={styles.Link} />
            </a>
        </div>
    );
}
