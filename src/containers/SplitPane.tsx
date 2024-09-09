import { ReactElement } from "react";
import styles from "./SplitPane.module.css";

export default function SplitPane({
  className,
  left,
  right,
}: {
  className?: string;
  left: ReactElement;
  right: ReactElement;
}) {
  return (
    <div className={`${className} ${styles.SplitPane}`}>
      <div className={styles.Left}>{left}</div>
      <div className={styles.Right}>{right}</div>
    </div>
  );
}
