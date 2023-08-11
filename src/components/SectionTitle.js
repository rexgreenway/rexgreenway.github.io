import { SeeMore } from "./CustomLinks";

import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title, to = false }) {
    let see_more;
    if (to) {
        see_more = <SeeMore to={to}>See More</SeeMore>;
    }

    return (
        <div className={styles.SectionTitle}>
            <h1>{title}</h1>
            {see_more}
        </div>
    );
}
