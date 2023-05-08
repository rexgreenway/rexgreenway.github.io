
import styles from './ProjectTitle.module.css'

import Tag from "./Tag";


export default function ProjectTitle({ text, tag }) {
    return (
        <div className={styles.ProjectTitle}>
            <h2>
                {text}    
            </h2>
            <Tag name={tag} />
        </div>
    );
};
