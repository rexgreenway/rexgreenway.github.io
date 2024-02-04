import Container from "../containers/Container";

import styles from "./About.module.css";
import HorizontalLine from "../components/HorizontalLine";

import PDF from "../documents/2024-02-04-CV.pdf";
import { PDFLink } from "../components/CustomLinks";

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

      {/* CV Download */}
      <PDFLink pdfUrl={PDF}>Download CV</PDFLink>

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
