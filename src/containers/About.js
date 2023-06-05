import PlaceIcon from "@mui/icons-material/Place";

import styles from "./About.module.css";

import HorizontalLine from "../utils/HorizontalLine";
import Container from "./Container";

function About() {
    return (
        <Container className={styles.About}>
            <div className={styles.Main}>
                <h2>
                    <PlaceIcon /> London, UK
                </h2>
                <h1>Software Engineer </h1>
                <HorizontalLine />
                <p>
                    Specialising in AI Software Development, I have a passion
                    for object oriented elegant programming solutions.
                </p>
                <HorizontalLine />

                <h4>PYTHON - GO - GCP - K8S - DOCKER - JAVASCRIPT</h4>
            </div>
            <div className={styles.ExEd}>
                <div>
                    <h5>AI Software Engineer, PwC</h5>
                    <p>Sept. 2021 - Present</p>
                </div>
                <br />
                <div>
                    <h5>MSc Data Science & AI</h5>
                    <p>Distinction</p>
                </div>
                <div>
                    <h5>BSc Mathematics</h5>
                    <p>1st Class</p>
                </div>
            </div>
        </Container>
    );
}

export default About;
