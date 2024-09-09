import { ReactNode } from "react";

import styles from "./Container.module.css";

export interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

// Containers accept passthrough classes
const Container = ({ className, children }: ContainerProps) => {
  return <div className={`${className} ${styles.Container}`}>{children}</div>;
};

export default Container;
