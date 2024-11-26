import { PDFLink } from "../../components/CustomLinks";
import HorizontalLine from "../../components/HorizontalLine";
import Container from "../../containers/Container";

import PDF from "../../documents/2024-06-01-CV.pdf";

import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <Container className={styles.AboutPage}>
      {/* CV Download */}
      <PDFLink to={PDF} text="Download CV" />

      <br />

      {/* Experience */}
      <div className={styles.AboutSection}>
        <h1>Experience</h1>
        <div>
          <h3>Full Stack Software Engineer, Console Team @ Neo4j</h3>
          <p> May. 2024 - Present</p>
        </div>
        <div>
          <h3>Software Engineer, AI Team @ PwC</h3>
          <p> Sept. 2021 - Apr. 2024</p>
        </div>
      </div>

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
          <h3>rexgreenway@proton.me</h3>
          <p>for all enquiries</p>
        </div>
      </div>
    </Container>
  );
}
