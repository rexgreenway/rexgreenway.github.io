import { ReactNode } from "react";
import styles from "./Card.module.css";

import Container from "./Container";

interface CardProps {
  className: string;
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <Container className={`${styles.Card} ${className}`}>{children}</Container>
  );
}

interface CardWithImageProps extends CardProps {
  src: string;
  alt: string;
}

export function CardWithImage({
  src,
  alt,
  className,
  children,
}: CardWithImageProps) {
  return (
    <Container className={`${styles.Card} ${className}`}>
      <img className={styles.CardImage} src={src} alt={alt} />
      {children}
    </Container>
  );
}