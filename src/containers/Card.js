
import styles from './Card.module.css';

import Container from './Container';


export default function Card({ className, children }) {
    
    const classes = className + ' ' + styles.Card;

    return (
        <Container className={classes}>
            { children }
        </Container>
    );
};
