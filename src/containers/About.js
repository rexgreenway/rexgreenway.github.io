import PlaceIcon from "@mui/icons-material/Place";

import HorizontalLine from "../utils/HorizontalLine";
import Container from "./Container";

import styles from "./About.module.css";

function About() {
    return (
        <Container className={styles.About}>
            <div>
                <h2>
                    <PlaceIcon /> London, UK
                </h2>
                <h1>Software Engineer</h1>
            </div>
            <HorizontalLine />
            <p>
                Specialising in AI Software Development, I have a passion for
                object oriented elegant programming solutions.
            </p>
            <HorizontalLine />
            <h3>PYTHON - JAVASCRIPT - GCP - K8S - DOCKER - & MORE</h3>
        </Container>
    );
}

export default About;
