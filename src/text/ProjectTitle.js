
import styles from './ProjectTitle.module.css'

import Tag from "./Tag";


export default function ProjectTitle({ text, tag }) {
    return (
        <div className={styles.ProjectTitle}>
            <h4>
                {text}    
            </h4>
            <Tag name={tag} />
        </div>
    );
};
