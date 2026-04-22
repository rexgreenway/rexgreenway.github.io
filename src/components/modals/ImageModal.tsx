import { CircularProgress } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Modal from "./Modal";

import styles from "./ImageModal.module.css";

interface ImageModalProps {
  close: () => void;
  src?: string;
  download?: () => void;
}

const ImageModal = ({ close, download, src }: ImageModalProps) => {
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
          <div className={`${styles.Footer} ${styles.Background}`}>
            {/* <NavigateBeforeIcon /> */}
            {download && src && <DownloadIcon onClick={() => download()} />}
            {/* <NavigateNextIcon /> */}
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
