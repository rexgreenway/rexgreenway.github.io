import styles from "./Tags.module.css";

export const Tag = ({ name, color }: { name: string; color?: string }) => {
  const tag_color = color ? color : "#333333";

  return (
    <div className={styles.Tag} style={{ backgroundColor: tag_color + "90" }}>
      <p>{name}</p>
    </div>
  );
};

export const Language = ({ name }: { name: string | null | undefined }) => {
  // To lower case to ignore any input passed capitalisation
  if (name === undefined || name === null) {
    name = "No Language";
  }

  const colour_map: { [key: string]: string } = {
    python: "#4B8BBE",
    javascript: "#F0DB4F",
    typescript: "#007ACC",
    html: "#E34C26",
    go: "#29BEB0",
  };

  const lang_colour = colour_map[name.toLowerCase()] || "#FF8300";

  return <Tag name={name} color={lang_colour} />;
};

export const Tags = ({
  languages,
  tags,
  className,
}: {
  languages?: string[] | string;
  tags?: string[];
  className?: string;
}) => {
  return (
    <div className={`${styles.Tags} ${className}`}>
      {languages &&
        (Array.isArray(languages) ? (
          languages.map((l) => <Language key={l} name={l} />)
        ) : (
          <Language name={languages} />
        ))}
      {tags && tags.map((t) => <Tag key={t} name={t} />)}
    </div>
  );
};
