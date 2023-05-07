
import styles from './Tag.module.css';


export default function Tag({ name }) {
    const name_lower = name.toLowerCase()
    
    // Replace these colors with colour picked hex codes!
    const colour_map = {
        'python': 'cyan',
        'javascript': 'yellow',
        'typescript': 'blue',
        'html': 'red',
        'go': 'green'
    };

    // Pre-unknown tag uses site's feature colour...
    const unknown = 'orange';

    const tag_colour = colour_map[name_lower] || unknown

    return (
        <p className={styles.Tag} style={{border: '2px solid ' + tag_colour}}>
            {name}
        </p>
    );
};
