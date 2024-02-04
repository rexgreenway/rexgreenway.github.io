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
          A software engineer passionate about implementing elegant software
          solutions across the entire stack, from design to deployment.
        </p>
        <HorizontalLine />

        <h4>PYTHON - GO - TYPESCRIPT - K8S - SQL - GCP</h4>
      </div>
    </Container>
  );
}

export default About;
