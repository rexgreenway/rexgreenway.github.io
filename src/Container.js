
import styles from './Container.module.css';


export default function Container({ className, children }) {
    // Containers accept passthrough classes
    const classes = className + ' ' + styles.Container;
    
    return (
        <div className={classes}>
            { children }
        </div>
    );
};
