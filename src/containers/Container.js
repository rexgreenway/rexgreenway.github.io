import styles from "./Container.module.css";

// Containers accept passthrough classes
export default function Container({ className, children }) {
    return <div className={`${className} ${styles.Container}`}>{children}</div>;
}
