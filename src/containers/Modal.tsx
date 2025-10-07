import { ReactNode, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CircularProgress } from "@mui/material";

import Photo from "../components/Photo";

import styles from "./Modal.module.css";

interface ModalProps {
  close: () => void;
  children?: ReactNode;
}

const Modal = ({ close, children }: ModalProps) => {
  // Close on Escape Key Press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [close]);

  return (
    <div onClick={close} className={styles.ModalBackground}>
      <CloseRoundedIcon
        fontSize="large"
        className={styles.CloseButton}
        onClick={close}
      />
      <div className={styles.Model}>{children}</div>
    </div>
  );
};

const ImageModal = ({
  src,
  isOpen,
  close,
}: {
  src?: string;
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    isOpen && (
      <Modal close={close}>
        {!src ? (
          <div className={styles.ImageModal}>
            <CircularProgress color="inherit" />
          </div>
        ) : src === "FAILED" ? (
          <div className={`${styles.ImageModal} ${styles.Failed}`}>
            Failed to load image.
          </div>
        ) : (
          <Photo src={src} className={styles.ImageModal} />
        )}
      </Modal>
    )
  );
};

export { Modal, ImageModal };
