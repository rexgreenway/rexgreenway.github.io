import { PDFLink } from "../../components/CustomLinks";
import { HorizontalLine } from "../../components/elements";
import Container from "../../containers/Container";

import PDF from "../../documents/2024-06-01-CV.pdf";

import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <Container className={styles.AboutPage}>
      {/* Experience */}
      <div className={styles.AboutSection}>
        <h1>Experience</h1>
        <div id="neo4j">
          <h2>Neo4j</h2>
          <div>
            <h3>Senior Software Engineer</h3>
            <h4>Instances Team, Aura</h4>
            <p> Apr. 2026 - Present</p>
          </div>
          <div>
            <h3>Software Engineer</h3>
            <h4>Console Team, Aura</h4>
            <p> May. 2024 - Apr. 2026</p>
          </div>
        </div>
        <div id="pwc">
          <h2>PWC</h2>
          <div>
            <h3>Full Stack Software Engineer</h3>
            <h4>AI Team, Tech Central</h4>
            <p> Sept. 2022 - May. 2024</p>
          </div>
          <div>
            <h3>Python Developer</h3>
            <h4>Internal Firm Services</h4>
            <p> Sept. 2021 - Sept. 2022</p>
          </div>
        </div>

        <br />

        {/* CV Download */}
        <PDFLink to={PDF} text="Download CV" />
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
          <h3>rexgreenway@proton.me</h3>
          <p>for all enquiries</p>
        </div>
      </div>
    </Container>
  );
}
