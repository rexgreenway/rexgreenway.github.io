import Container from "../containers/Container";
import { CardWithImage } from "../containers/Card";
import Lattice from "../assets/PolyLatLib-Header.png";
import { ExternalLink } from "./CustomLinks";
import HorizontalLine from "./HorizontalLine";

import styles from "./Spotlight.module.css";

export default function Spotlight() {
    return (
        <Container className={styles.Spotlight}>
            <CardWithImage src={Lattice} alt="Geometric Lattice">
                <h2>PolyLatLib</h2>
                <HorizontalLine />
                <p>
                    A Python library for the generation and manipulation of
                    Lattices (Please See Project Link Below)
                </p>
                <div className={styles.Links}>
                    <ExternalLink to="https://github.com/RexGreenway/PolyLatLib">
                        GitHub
                    </ExternalLink>
                </div>
            </CardWithImage>
        </Container>
    );
}
