
import styles from './Project.module.css'

import Container from "./Container";
import { HorizontalLine } from "./common/HorizontalLine";

function Project({ name, description}) {
    return (
        <Container className={styles.Project}>
            <h3>{name}</h3>
            <HorizontalLine />
            <p>{description}</p>
        </Container>
    )
}

export default Project
