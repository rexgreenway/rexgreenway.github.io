import styles from "./Card.module.css";

import Container from "./Container";

export default function Card({ className, children }) {
    return (
        <Container className={`${styles.Card} ${className}`}>
            {children}
        </Container>
    );
}

export function CardWithImage({ src, alt, className, children }) {
    return (
        <Container className={`${styles.Card} ${className}`}>
            <img className={styles.CardImage} src={src} alt={alt} />
            {children}
        </Container>
    );
}
