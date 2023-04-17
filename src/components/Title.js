
import styles from './Title.module.css'

function Title({ children }) {

    return (
        <div className={styles.Title}>
            <h2>
                {children}
            </h2>
            <h1>
                Software Engineer
            </h1>
        </div>
    )
}

export default Title
