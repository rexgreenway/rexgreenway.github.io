import Logo from "./Logo"
import Title from "./Title"

import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.Header}>
            <Logo size='small'/>
            <Title>
                Rex Greenway
            </Title>
        </div>
    )
}

export default Header