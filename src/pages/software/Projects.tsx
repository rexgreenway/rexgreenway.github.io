import { useState, useEffect, ReactElement } from "react";
import {
  listUserReposResponseData,
  fetchProjects,
} from "../api/gh/fetchProjects";
import Project from "../components/Project";

import { Grid } from "../containers/CardContainers";

export default function Projects() {
  const [projects, setProjects] = useState<ReactElement[]>();

  // Fetch First N Projects
  useEffect(() => {
    fetchProjects().then((result) => {
      setProjects(
        result.map((repo: listUserReposResponseData) => (
          <Project
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            language={repo.language}
            topics={repo.topics}
            has_pages={repo.has_pages}
          />
        ))
      );
    });
  }, []);

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>Ongoing personal projects covering a wider range of interests.</p>
      <Grid>{projects}</Grid>
    </div>
  );
}
