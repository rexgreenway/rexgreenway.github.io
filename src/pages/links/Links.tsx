// Icons
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import TerminalIcon from "@mui/icons-material/Terminal";

import Container from "../../containers/Container";

import styles from "./Links.module.css";

interface TileProps {
  title: string;
  url: string;
  subtitle?: string;
  icon?: React.ReactNode | null;
}

const Tile = ({ title, url, subtitle, icon }: TileProps) => {
  return (
    <a href={`/#/${url}`} className={styles.Tile}>
      <Container className={styles.TileLayout}>
        <div>
          <h1>{title.toLocaleUpperCase()}</h1>
          <p className={styles.Subtitle}>{subtitle?.toLocaleLowerCase()}</p>
        </div>
        {icon}
      </Container>
    </a>
  );
};

const Links = () => {
  const links: TileProps[] = [
    {
      title: "Software",
      url: "software",
      subtitle: "tools and projects",
      icon: <TerminalIcon />,
    },
    {
      title: "Photography",
      url: "portfolio",
      subtitle: "film photography portfolio",
      icon: <CameraRollIcon />,
    },
  ];

  return (
    <Container className={styles.Links}>
      {links.map((l) => (
        <Tile
          key={l.url}
          title={l.title}
          url={l.url}
          subtitle={l.subtitle}
          icon={l.icon}
        />
      ))}
    </Container>
  );
};

export default Links;
