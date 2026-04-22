import { CircularProgress } from "@mui/material";
import { Download, NavigateBefore, NavigateNext } from "@mui/icons-material";

import Modal from "./Modal";

import styles from "./ImageModal.module.css";

interface ImageModalProps {
  close: () => void;
  src?: string;
  download?: () => void;
  prev?: () => void;
  next?: () => void;
}

const ImageModal = ({ close, src, download, prev, next }: ImageModalProps) => {
  return (
    <Modal close={close}>
      {!src ? (
        <div className={styles.Background}>
          <CircularProgress color="inherit" />
        </div>
      ) : src === "FAILED" ? (
        <div className={styles.Background}>
          <h3 className={styles.Failed}>Failed to load image</h3>
        </div>
      ) : (
        <>
          <img src={src} className={styles.Background} />
          {/* Div with  */}
          {src && (
            <div className={`${styles.Footer} ${styles.Background}`}>
              {prev && (
                <NavigateBefore
                  className={styles.Icon}
                  onClick={() => prev()}
                />
              )}

              {download && (
                <Download className={styles.Icon} onClick={() => download()} />
              )}

              {next && (
                <NavigateNext className={styles.Icon} onClick={() => next()} />
              )}
            </div>
          )}
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
