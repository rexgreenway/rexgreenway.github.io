import { Link, NavLink } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import styles from "./CustomLinks.module.css";

export function PagesLink({ to, children }) {
  return (
    <Link className={`${styles.Links} ${styles.ExternalLink}`} to={to}>
      {children}
    </Link>
  );
}

export function ExternalLink({ to, children }) {
  return (
    <Link
      className={`${styles.Links} ${styles.ExternalLink}`}
      to={to}
      target="_blank"
    >
      {children}
      <OpenInNewIcon />
    </Link>
  );
}

export function PDFLink({ pdfUrl, children }) {
  const openPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <button
      className={`${styles.Links} ${styles.ExternalLink} ${styles.Button}`}
      onClick={openPDF}
      target="_blank"
    >
      {children}
      <OpenInNewIcon />
    </button>
  );
}

export function SeeMore({ to, children }) {
  return (
    <NavLink className={`${styles.Links} ${styles.SeeMore}`} to={to}>
      {children}
      <ArrowForwardIosRoundedIcon />
    </NavLink>
  );
}
