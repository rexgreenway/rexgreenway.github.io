import styles from "./Link.module.css";

// Wrapper for the a tag to allow the inclusion of Icons and consistent styling/ alignment
// New Tab is the default...
export default function Link({ url, text = "", icon = <></> }) {
    return (
        <a className={styles.Link} href={url} target="_blank" rel="noreferrer">
            {text}
            {icon}
        </a>
    );
}
