import { useState, useEffect, ReactElement } from "react";

import { ghApi } from "@api";

import { CentredFlex } from "@components/containers";
import {
  About,
  HorizontalLine,
  Project,
  SectionTitle,
  Spotlight,
} from "@components";

export default function Home() {
  const [projects, setProjects] = useState<ReactElement[]>();

  // Fetch First N Projects
  useEffect(() => {
    ghApi.fetchProjects(3).then((result) => {
      setProjects(
        result.map((repo) => (
          <Project
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            language={repo.language ? repo.language : undefined}
            topics={repo.topics}
            has_pages={repo.has_pages}
          />
        )),
      );
    });
  }, []);

  return (
    <>
      {/* INTRODUCTION */}
      <About />

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
