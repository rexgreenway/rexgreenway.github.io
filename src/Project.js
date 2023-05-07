
import styles from './Project.module.css'

import ProjectTitle from './text/ProjectTitle';
import TextBox from './text/TextBox';
import HorizontalLine from "./utils/HorizontalLine";

function Project({ name, description, link, language}) {

    const lang_lower = language.toLowerCase()

    return (
        <a href={link}>
            <div className={styles.Project}>
                <ProjectTitle text={name} tag={lang_lower} />
                <HorizontalLine />
                <TextBox>{description}</TextBox>
            </div>
        </a>
    )
}

export default Project
