import { useState, useEffect } from "react";
import { fetchProjects } from "../api/fetchProjects";
import Project from "../components/Project";

import SplitPane from "../containers/SplitPane";
import About from "../components/About";

import HorizontalLine from "../components/HorizontalLine";
import Spotlight from "../components/Spotlight";
import { CentredFlex } from "../containers/CardContainers";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  let [projects, setProjects] = useState([]);

  // Fetch First N Projects
  useEffect(() => {
    fetchProjects(3).then((result) => {
      setProjects(result.map((repo) => <Project key={repo.id} {...repo} />));
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
