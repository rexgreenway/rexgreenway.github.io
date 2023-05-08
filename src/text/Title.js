
import styles from './Title.module.css'

import Logo from "../components/Logo";


export default function Title() {
    return (
        <div className={styles.Title}>
            <Logo />
            <h1>Rex Greenway</h1>
        </div>
    );
};
