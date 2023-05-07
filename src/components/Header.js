
import styles from './Header.module.css'

import Container from '../Container'
import { HorizontalLine } from '../common/HorizontalLine'


function Header({ children }) {
    return (
        <div>
            <Container className={styles.Header}>
                { children }
            </Container>
            <HorizontalLine />
        </div>
    )
}

export default Header
