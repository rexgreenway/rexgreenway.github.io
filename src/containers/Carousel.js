import styles from "./Carousel.module.css";

export default function Carousel({ children }) {
    return (
        <div className={styles.Carousel}>
            <div className={styles.Slider}>
                <div className={styles.Content}>{children}</div>
                <div className={styles.Content}>{children}</div>
            </div>
        </div>
    );
}
