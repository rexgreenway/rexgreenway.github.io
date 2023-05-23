
import styles from './Tag.module.css';


export default function Tag({ name }) {
    // To lower case to ignore any input passed capitalisation
    const name_lower = (name === undefined) ?  'no-tag' : name.toLowerCase()
    
    // Replace these colors with colour picked hex codes!
    const colour_map = {
        'python': '#4B8BBE',
        'javascript': '#F0DB4F',
        'typescript': '#007ACC',
        'html': '#E34C26',
        'go': '#29BEB0'
    };

    // Pre-unknown tag uses site's feature colour... Currently Orange
    const unknown = '#FF8300';

    const tag_colour = colour_map[name_lower] || unknown

    return (
        <div className={styles.Tag} style={{backgroundColor: tag_colour + '90'}}>
            <p>{name}</p>
        </div>
    );
};
