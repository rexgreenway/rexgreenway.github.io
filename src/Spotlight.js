
import Lattice from './assets/PolyLatLib-Header.png'

import styles from './Spotlight.module.css'

import Card from './containers/Card';
import TextBox from './text/TextBox';
import HorizontalLine from './utils/HorizontalLine';


export default function Spotlight() {
    return (
        <Card className={styles.Spotlight}>
            <img className={styles.Image}
                src={Lattice}
                alt='Geometric Lattices'
            />
            <h2>PolyLatLib</h2>
            <HorizontalLine />
            <TextBox>
                A Python library for the generation and manipulation
                of Lattices (Please See Project Link Below)
            </TextBox>
        </Card>
    )
}
