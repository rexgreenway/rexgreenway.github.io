import styles from "./SplitPane.module.css";

export default function SplitPane({ className, left, right }) {
    return (
        <div className={`${className} ${styles.SplitPane}`}>
            <div className={styles.Left}>{left}</div>
            <div className={styles.Right}>{right}</div>
        </div>
    );
}
