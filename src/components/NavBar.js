
import Links from '../Links'
import styles from './NavBar.module.css'


function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <button className={styles.Button}>Home</button>
            <button className={styles.Button}>Projects</button>
            <button className={styles.Button}>Contact</button>
            <Links />
        </nav>
    )
}

export default NavBar