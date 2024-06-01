import PlaceIcon from "@mui/icons-material/Place";

import styles from "./About.module.css";

import Container from "../containers/Container";
import { PDFLink } from "./CustomLinks";

import PDF from "../documents/2024-06-01-CV.pdf";

function About() {
  return (
    <Container className={styles.About}>
      <div className={styles.Main}>
        <h2>
          <PlaceIcon /> London, UK
        </h2>
        <h1>Software Engineer </h1>
        <p>
          A software engineer passionate about implementing elegant software
          solutions across the entire stack, from design to deployment.
        </p>
        <br />

        {/* CV Download */}
        <PDFLink pdfUrl={PDF}>Download CV</PDFLink>
      </div>
    </Container>
  );
}

export default About;
