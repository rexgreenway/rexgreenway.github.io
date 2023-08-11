import PlaceIcon from "@mui/icons-material/Place";

import styles from "./About.module.css";

import HorizontalLine from "./HorizontalLine";
import Container from "../containers/Container";

function About() {
    return (
        <Container className={styles.About}>
            <div className={styles.Main}>
                <h2>
                    <PlaceIcon /> London, UK
                </h2>
                <h1>Software Engineer </h1>
                <p>
                    Specialising in AI Software Development, I have a passion
                    for object oriented elegant programming solutions.
                </p>
                <HorizontalLine />

                <h4>PYTHON - GO - GCP - K8S - DOCKER - JAVASCRIPT</h4>
            </div>
        </Container>
    );
}

export default About;
