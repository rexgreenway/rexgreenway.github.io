import { ReactNode } from "react";

import styles from "./Thumbnail.module.css";

const Thumbnail = ({ src, onClick }: { src: string; onClick: () => void }) => {
  return <img className={styles.Thumbnail} onClick={onClick} src={src} />;
};

const ThumbnailGrid = ({ children }: { children: ReactNode }) => {
  return <div className={styles.ThumbnailGrid}>{children}</div>;
};

export { Thumbnail, ThumbnailGrid };
