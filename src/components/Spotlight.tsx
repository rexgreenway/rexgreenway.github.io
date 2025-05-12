import { CardWithImage } from "../containers/Card";
import Lattice from "../assets/PolyLatLib-Header.png";
import { ExternalLink } from "./CustomLinks";
import HorizontalLine from "./HorizontalLine";

import styles from "./Spotlight.module.css";

export default function Spotlight() {
  return (
    <CardWithImage
      src={Lattice}
      alt="Geometric Lattice"
      className={styles.Spotlight}
    >
      <h2>PolyLatLib</h2>
      <HorizontalLine />
      <p>A Python library for the generation and manipulation of Lattices.</p>
      <div className={styles.Links}>
        <ExternalLink
          to="https://github.com/RexGreenway/PolyLatLib"
          text="GitHub"
        />
      </div>
    </CardWithImage>
  );
}
