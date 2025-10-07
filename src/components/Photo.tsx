import styles from "./Photo.module.css";

const Photo = ({
  src,
  alt,
  description,
  className,
}: {
  src: string;
  alt: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={styles.Photo}>
      <img src={src} alt={alt} className={className} />
      {description && <p className={styles.Description}>{description}</p>}
    </div>
  );
};

export default Photo;
