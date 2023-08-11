import Container from "../containers/Container";

import styles from "./About.module.css";
import HorizontalLine from "../components/HorizontalLine";

export default function AboutPage() {
    return (
        <Container className={styles.AboutPage}>
            {/* Experience */}
            <div className={styles.AboutSection}>
                <h1>Experience</h1>
                <div>
                    <h3>Software Engineer, AI Team @ PwC</h3>
                    <p> Sept. 2021 - Present</p>
                </div>
            </div>

            <HorizontalLine />

            {/* Education */}
            <div className={styles.AboutSection}>
                <h1>Education</h1>
                <div>
                    <h3>MSc Data Science & AI @ University of Liverpool</h3>
                    <p>Distinction</p>
                </div>
                <div>
                    <h3>BSc Mathematics @ University of Liverpool</h3>
                    <p>1st Class</p>
                </div>
            </div>

            <HorizontalLine />

            {/* Contact */}
            <div className={styles.AboutSection}>
                <h1>Contact</h1>
                <div>
                    <h3>rexgreenway@gmail.com</h3>
                    <p>for all enquiries</p>
                </div>
            </div>
        </Container>
    );
}
