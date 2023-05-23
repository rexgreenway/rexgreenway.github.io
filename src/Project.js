
import styles from './Project.module.css'

import Card from './containers/Card'
import ProjectTitle from './text/ProjectTitle';
import HorizontalLine from "./utils/HorizontalLine";

function Project({ name, description, link, language}) {
    return (
        <Card className={styles.Project}>
            <a href={link}>
                <ProjectTitle
                    text={name}
                    tag={language}
                />
                <HorizontalLine />
                <p>{description}</p>
            </a>
        </Card>
    )
}

export default Project
