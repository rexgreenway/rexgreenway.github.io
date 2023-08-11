import { useState, useEffect } from "react";
import { fetchProjects } from "../api/fetchProjects";
import Project from "../components/Project";

import { Grid } from "../containers/CardContainers";

export default function Projects() {
    let [projects, setProjects] = useState([]);

    // Fetch First N Projects
    useEffect(() => {
        fetchProjects().then((result) => {
            setProjects(
                result.map((repo) => <Project key={repo.id} {...repo} />)
            );
        });
    }, []);

    return (
        <div className="page">
            <h1>Projects</h1>
            <p>
                Ongoing personal projects covering a wider range of interests.
            </p>
            <Grid>
                {projects}
                <Project
                    name="Coming Soon!"
                    description="Keep a look-out for more projects coming soon..."
                    link="https://github.com/RexGreenway"
                    language="Any"
                />
            </Grid>
        </div>
    );
}
