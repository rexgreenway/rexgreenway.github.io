import { ReactNode } from "react";

import styles from "./CardContainers.module.css";

export function Grid({ children }: { children: ReactNode }) {
  return <div className={styles.Grid}>{children}</div>;
}

export function CentredFlex({ children }: { children: ReactNode }) {
  return <div className={styles.Flex}>{children}</div>;
}
