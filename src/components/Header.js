
import styles from './Header.module.css'

import Container from '../containers/Container'
import Logo from './Logo'
import Links from '../Links'
// import NavBar from "../components/NavBar";


function Header() {
    return (
        <div>
            <Container className={styles.Header}>
                <div className={styles.Title}>
                    <Logo />
                    <h1>Rex Greenway</h1>
                </div>
                <Links />
                {/* <NavBar /> */}
            </Container>
        </div>
    )
}

export default Header
