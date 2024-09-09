import { SeeMore } from "./CustomLinks";

import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  title,
  to,
}: {
  title: string;
  to?: string;
}) {
  let see_more;
  if (to) {
    see_more = <SeeMore to={to} text="See More" />;
  }

  return (
    <div className={styles.SectionTitle}>
      <h1>{title}</h1>
      {see_more}
    </div>
  );
}
