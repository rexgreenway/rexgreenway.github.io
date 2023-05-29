import styles from "./Project.module.css";

import Card from "./containers/Card";
import ProjectTitle from "./text/ProjectTitle";
import HorizontalLine from "./utils/HorizontalLine";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "./Link";

function Project({ name, description, link, language }) {
    return (
        <Card className={styles.Project}>
            <div className={styles.ProjectContent}>
                <ProjectTitle text={name} tag={language} />
                <HorizontalLine />
                <p>{description}</p>
            </div>

            <div className={styles.ProjectLinks}>
                <Link url={link} text="GitHub" icon={<OpenInNewIcon />} />
            </div>
        </Card>
    );
}

export default Project;
