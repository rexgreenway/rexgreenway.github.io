
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from './NavBar.module.css'


function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <a href='../' className={styles.Button}>Home</a>
            <a href='../projects' className={styles.Button}>Projects</a>
            <a href='../test' className={styles.Button}>Contact</a>
            <a href='https://github.com/RexGreenway/'>
                <GitHubIcon className={styles.Button}/>
            </a>
            <a href='https://www.linkedin.com/in/rexgreenway/'>
                <LinkedInIcon className={styles.Button}/>
            </a>
        </nav>
    )
}

export default NavBar