
import styles from './Header.module.css'

import Container from '../containers/Container'


function Header({ children }) {
    return (
        <div>
            <Container className={styles.Header}>
                { children }
            </Container>
        </div>
    )
}

export default Header
