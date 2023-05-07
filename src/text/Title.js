
import styles from './Title.module.css'

import Logo from "../components/Logo";


export default function Title() {
    return (
        <div className={styles.Title}>
            <Logo />
            <h3>Rex Greenway</h3>
        </div>
    );
};
