import Card from "../containers/Card";
import HorizontalLine from "./HorizontalLine";
import { ExternalLink, PagesLink } from "./CustomLinks";

import styles from "./Project.module.css";

function Tag({ name, color }: { name: string; color?: string }) {
  const tag_color = color ? color : "#333333";

  return (
    <div className={styles.Tag} style={{ backgroundColor: tag_color + "90" }}>
      <p>{name}</p>
    </div>
  );
}

function Language({ name }: { name: string | null }) {
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
}

function Tags({
  language,
  topics,
}: {
  language: string | null;
  topics?: string[];
}) {
  let tags;
  if (topics !== undefined) {
    tags = topics.map((t) => <Tag key={t} name={t} />);
  }

  return (
    <div className={styles.Tags}>
      <Language name={language} />
      {tags}
    </div>
  );
}

function ProjectTitle({ text }: { text: string }) {
  return <h2 className={styles.ProjectTitle}>{text}</h2>;
}

function ProjectDescription({ text }: { text: string | null }) {
  return <p className={styles.ProjectDescription}>{text}</p>;
}

interface ProjectProps {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  has_pages: boolean;
}

export default function Project({
  name,
  description,
  html_url,
  language,
  topics,
  has_pages,
}: ProjectProps) {
  return (
    <Card className={styles.Project}>
      <div>
        <ProjectTitle text={name} />
        <HorizontalLine />
        <Tags language={language} topics={topics} />
        <ProjectDescription text={description} />
      </div>

      <div className={styles.Links}>
        {/* Could instead utilise 2 routers a hash router and a not hash router? */}
        {has_pages && name !== "rexgreenway.github.io" && (
          <PagesLink
            to={`https://rexgreenway.github.io/${name}/`}
            text="Website"
          />
        )}
        <ExternalLink to={html_url} text="GitHub" />
      </div>
    </Card>
  );
}
