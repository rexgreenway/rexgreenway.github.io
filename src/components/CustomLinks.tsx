import { Link, NavLink } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import styles from "./CustomLinks.module.css";

interface CustomLinkProps {
  to: string;
  text: string;
}

export const PagesLink = ({ to, text }: CustomLinkProps) => {
  return (
    <a className={`${styles.Links} ${styles.ExternalLink}`} href={to}>
      {text}
    </a>
  );
};

export const ExternalLink = ({ to, text }: CustomLinkProps) => {
  return (
    <Link
      className={`${styles.Links} ${styles.ExternalLink}`}
      to={to}
      target="_blank"
    >
      {text}
      <OpenInNewIcon />
    </Link>
  );
};

export const PDFLink = ({ to, text }: CustomLinkProps) => {
  const openPDF = () => {
    window.open(to, "_blank");
  };

  return (
    <button
      className={`${styles.Links} ${styles.ExternalLink} ${styles.Button}`}
      onClick={openPDF}
    >
      {text}
      <OpenInNewIcon />
    </button>
  );
};

export const SeeMore = ({ to, text }: CustomLinkProps) => {
  return (
    <NavLink className={`${styles.Links} ${styles.SeeMore}`} to={to}>
      {text}
      <ArrowForwardIosRoundedIcon />
    </NavLink>
  );
};
