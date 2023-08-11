import Card from "../containers/Card";

import styles from "./Project.module.css";

import HorizontalLine from "./HorizontalLine";

import { ExternalLink } from "./CustomLinks";

function Tag({ name }) {
    // To lower case to ignore any input passed capitalisation
    const name_lower = name === undefined ? "no-tag" : name.toLowerCase();

    const colour_map = {
        python: "#4B8BBE",
        javascript: "#F0DB4F",
        typescript: "#007ACC",
        html: "#E34C26",
        go: "#29BEB0",
    };

    const tag_colour = colour_map[name_lower] || "#FF8300";

    return (
        <div
            className={styles.Tag}
            style={{ backgroundColor: tag_colour + "90" }}
        >
            <p>{name}</p>
        </div>
    );
}

function ProjectTitle({ text, tag }) {
    return (
        <div className={styles.ProjectTitle}>
            <h2>{text}</h2>
            <Tag name={tag} />
        </div>
    );
}

export default function Project({ name, description, html_url, language }) {
    return (
        <Card className={styles.Project}>
            <div>
                <ProjectTitle text={name} tag={language} />
                <HorizontalLine />
                <p>{description}</p>
            </div>

            <div className={styles.Links}>
                <ExternalLink to={html_url}>GitHub</ExternalLink>
            </div>
        </Card>
    );
}
