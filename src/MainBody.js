
import styles from './MainBody.module.css'

import Container from './Container';


function MainBody({ children }) {
    return (
        <Container className={styles.MainBody}>
            { children }
        </Container>
    );
};

export default MainBody;
