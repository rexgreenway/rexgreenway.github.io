import { ReactNode, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CircularProgress } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import Photo from "../components/Photo";

import styles from "./Modal.module.css";

interface ModalProps {
  close: () => void;
  allowEscape?: boolean;
  allowClickOut?: boolean;
  children?: ReactNode;
}

const Modal = ({
  close,
  allowEscape = true,
  allowClickOut = true,
  children,
}: ModalProps) => {
  // Close on Escape Key Press
  if (allowEscape) {
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
  }

  return (
    <div
      onClick={() => (allowClickOut ? close() : null)}
      className={styles.ModalBackground}
    >
      {allowClickOut && (
        <CloseRoundedIcon
          fontSize="large"
          className={styles.CloseButton}
          onClick={close}
        />
      )}
      <div className={styles.Modal}>{children}</div>
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
          <>
            <Photo src={src} className={styles.ImageModal} />
            <DownloadIcon className={styles.Download} />
          </>
        )}
      </Modal>
    )
  );
};

export { Modal, ImageModal };
