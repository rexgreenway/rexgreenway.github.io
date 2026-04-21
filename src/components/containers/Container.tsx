import { ReactNode } from "react";

import styles from "./Container.module.css";

export interface ContainerProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

// Containers accept passthrough classes
const Container = ({ id, className, children }: ContainerProps) => {
  return (
    <div id={id} className={`${className} ${styles.Container}`}>
      {children}
    </div>
  );
};

export default Container;
