import styles from "./CardContainers.module.css";

export function Grid({ children }) {
    return <div className={styles.Grid}>{children}</div>;
}

export function CentredFlex({ children }) {
    return <div className={styles.Flex}>{children}</div>;
}
