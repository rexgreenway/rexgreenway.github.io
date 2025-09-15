import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import { fetchReadMe, getRepoReadMe } from "../api/gh/api";

import { Modal } from "../containers/Modal";

import styles from "./ReadMeModal.module.css";

export default function ReadMeModal({
  repo,
  isOpen,
  close,
}: {
  repo: string;
  isOpen: boolean;
  close: () => void;
}) {
  const [readmeContent, setReadmeContent] = useState<string>("Loading...");

  // Fetch README
  useEffect(() => {
    fetchReadMe(repo).then((result: getRepoReadMe) => {
      if (!Array.isArray(result) && result.type === "file") {
        const decoded = atob(result.content);
        if (decoded === "") {
          setReadmeContent("No README.md found");
          return;
        } else {
          setReadmeContent(decoded);
        }
      } else {
        setReadmeContent("Failed to fetch README.md");
      }
    });
  }, [repo]);

  return (
    isOpen && (
      <Modal close={close}>
        <div className={styles.ReadMeModal}>
          <Markdown
            components={{
              a: ({ ...props }) => (
                <a {...props} style={{ color: "inherit" }} />
              ),
            }}
          >
            {readmeContent}
          </Markdown>
        </div>
      </Modal>
    )
  );
}
