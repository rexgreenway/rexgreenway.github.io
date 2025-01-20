import { ReactNode } from "react";

import styles from "./Thumbnail.module.css";

interface ThumbnailProps {
  imageSrc: string;
  onClick: () => void;
  title?: string;
}

/**
 * Image Thumbnail Component
 */
const Thumbnail = ({ imageSrc, onClick, title }: ThumbnailProps) => {
  const imageClasses = `${styles.Thumbnail} ${
    title == undefined ? "" : styles.ThumbnailGrey
  }`;
  // Add text overlay title on image if present and grey out image
  return (
    <div className={styles.ThumbnailContainer} onClick={onClick}>
      <img className={imageClasses} src={imageSrc} />
      {title && <p className={styles.ThumbnailTitle}>{title}</p>}
    </div>
  );
};

const ThumbnailGrid = ({ children }: { children: ReactNode }) => {
  return <div className={styles.ThumbnailGrid}>{children}</div>;
};

export { Thumbnail, ThumbnailGrid };
