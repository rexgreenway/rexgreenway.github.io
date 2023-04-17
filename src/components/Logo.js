import styles from './Logo.module.css'
import logo from '../assets/R-Logo.svg'

function Logo({ size }) {
    // Logo can have its size defined
    const size_map = {
        'small': 100,
        'medium': 200,
        'large': 400
    };

    if ( !(size in size_map) ) {
        size = 'small';
    };

    return (
        <img
            className={styles.Logo}
            src={logo}
            alt='logo'
            width={size_map[size]}
            height={size_map[size]}
        />
    );
};

export default Logo;
