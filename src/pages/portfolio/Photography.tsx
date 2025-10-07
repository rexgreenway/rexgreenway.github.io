import { NavLink } from "react-router-dom";

import headerImg from "../../assets/portfolio-header.jpg";

import styles from "./Photography.module.css";
import Photo from "../../components/Photo";

const Photography = () => {
  return (
    <div className={styles.Photography}>
      <Photo
        src={headerImg}
        description="Portstewart Photographer, Rex Greenway © 2025"
        alt="featured image of photographer on a stormy hill overlooking the sea"
        className={styles.HeaderPhoto}
      />
      <h4>
        Photography Archive can be found <NavLink to="./archive">here</NavLink>
      </h4>
    </div>
  );
};

export default Photography;
