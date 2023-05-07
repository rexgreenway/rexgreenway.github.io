
import styles from './HorizontalLine.module.css'


function HorizontalLine() {
    return (
        <span className={styles.HorizontalLine}/>
    )
}

function Spacer() {
    return (
        <div className={styles.Spacer}>
        </div>
    );
};

export { HorizontalLine, Spacer }
