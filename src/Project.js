
import styles from './Project.module.css'

import TextBox from './text/TextBox';
import HorizontalLine from "./utils/HorizontalLine";

function Project({ name, description, link}) {
    return (
        <a href={link}>
            <div className={styles.Project}>
                <h4>{name}</h4>
                <HorizontalLine />
                <TextBox>{description}</TextBox>
            </div>
        </a>
    )
}

export default Project
