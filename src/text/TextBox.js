
import styles from './TextBox.module.css';


export default function TextBox({ children }) {
    return (
        <p className={styles.TextBox}>
            {children}
        </p>
    );
};
