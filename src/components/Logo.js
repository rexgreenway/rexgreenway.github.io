import styles from './Logo.module.css';

import {ReactComponent as RexLogo} from '../assets/R-Logo.svg';


function Logo() {
    return (
        <div className={styles.Logo}>
            <RexLogo />
        </div>
    )
};

export default Logo;
