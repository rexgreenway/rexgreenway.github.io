import { useState } from "react";

import Card from "../containers/Card";
import HorizontalLine from "./HorizontalLine";
import ReadMeModal from "./ReadMeModal";
import { ExternalLink, PagesLink } from "./CustomLinks";
import { Tags } from "./Tags";

import ArticleIcon from "@mui/icons-material/Article";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

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
  const [readMeModal, setReadMeModal] = useState<boolean>(false);

  return (
    <>
      <Card className={styles.Project}>
        <div>
          <div className={styles.ProjectHeader}>
            <ProjectTitle text={name} />
            {name !== "rexgreenway" && (
              <a
                title="README"
                className={styles.IconLink}
                onClick={() => setReadMeModal(true)}
              >
                <span className={styles.IconStack}>
                  <ArticleOutlinedIcon className={styles.IconOutlined} />
                  <ArticleIcon className={styles.IconFilled} />
                </span>
              </a>
            )}
          </div>
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

      {readMeModal && (
        <ReadMeModal
          repo={name}
          isOpen={readMeModal}
          close={() => setReadMeModal(false)}
        />
      )}
    </>
  );
}
