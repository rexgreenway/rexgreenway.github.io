import Card from "../containers/Card";
import HorizontalLine from "./HorizontalLine";
import { ExternalLink, PagesLink } from "./CustomLinks";
import { Tags } from "./Tags";

import styles from "./Project.module.css";

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
  language?: string;
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
        <Tags languages={language} tags={topics} />
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
