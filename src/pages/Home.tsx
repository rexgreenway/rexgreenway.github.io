import { useState, useEffect, ReactElement } from "react";

import {
  fetchProjects,
  listUserReposResponseData,
} from "../api/gh/fetchProjects";
import Project from "../components/Project";
import SplitPane from "../containers/SplitPane";
import About from "../components/About";
import HorizontalLine from "../components/HorizontalLine";
import Spotlight from "../components/Spotlight";
import { CentredFlex } from "../containers/CardContainers";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const [projects, setProjects] = useState<ReactElement[]>();

  // Fetch First N Projects
  useEffect(() => {
    fetchProjects(3).then((result) => {
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
    <>
      {/* INTRODUCTION */}
      <SplitPane left={<About />} right={<></>} />

      <HorizontalLine />

      {/* SPOTLIGHT */}
      <h1>Featured Project</h1>
      <Spotlight />

      <HorizontalLine />

      {/* PROJECT SNAPSHOT */}
      <SectionTitle title="Projects" to="projects" />
      <CentredFlex>{projects}</CentredFlex>
    </>
  );
}
