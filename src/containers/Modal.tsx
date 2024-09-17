import { ReactNode } from "react";

import styles from "./Modal.module.css";

interface ModalProps {
  close: () => void;
  children?: ReactNode;
}

const Modal = ({ close, children }: ModalProps) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.ModelContent}>
        <h1>MODAL</h1>
        <button onClick={close}>CLOSE</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
