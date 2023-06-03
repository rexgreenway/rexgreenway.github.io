import PlaceIcon from "@mui/icons-material/Place";

import HorizontalLine from "../utils/HorizontalLine";
import Container from "./Container";

import styles from "./About.module.css";
import SplitPane from "./SplitPane";

function About() {
    return (
        <SplitPane
            left={
                <Container className={styles.About}>
                    <div>
                        <h2>
                            <PlaceIcon /> London, UK
                        </h2>
                        <h1>Software Engineer</h1>
                    </div>
                    <HorizontalLine />
                    <p>
                        Specialising in AI Software Development, I have a
                        passion for object oriented elegant programming
                        solutions.
                    </p>
                </Container>
            }
            right={
                <Container>
                    <h3>Experience</h3>
                    <p>Software Engineer @ PwC (Sept. 2021 - Present)</p>
                    <h3>Education</h3>
                    <p>MSc Data Science & Artificial Intelligence</p>
                    <p>BSc Mathematics</p>
                </Container>
            }
        />
    );
}

export default About;
