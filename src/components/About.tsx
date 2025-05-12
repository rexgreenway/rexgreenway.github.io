import PlaceIcon from "@mui/icons-material/Place";

import Container from "../containers/Container";
import { PDFLink } from "./CustomLinks";
import { Tags } from "./Tags";

import PDF from "../documents/2024-06-01-CV.pdf";

import styles from "./About.module.css";

function About() {
  return (
    <Container className={styles.About}>
      <div className={styles.Main}>
        <div>
          <h2>
            <PlaceIcon /> London, UK
          </h2>
          <h1>Software Engineer </h1>
        </div>
        <Tags
          languages={["Python", "Go", "TypeScript"]}
          tags={["Kubernetes", "FastAPI", "React", "Flask", "GCP", "Docker"]}
          className={styles.Tags}
        />
        <span className={styles.Break} />

        {/* CV Download */}
        <PDFLink to={PDF} text="Download CV" />
      </div>
    </Container>
  );
}

export default About;
