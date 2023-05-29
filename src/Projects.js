import { useState, useEffect } from "react";

import { Octokit } from "octokit";

import styles from "./Projects.module.css";

import Project from "./Project";

function Projects() {
    let [repos, setRepos] = useState([]);

    // Non-authed GET request to GH for my Public Repo Info
    useEffect(() => {
        async function fetchData() {
            const octokit = new Octokit();
            const response = await octokit.request(
                "GET /users/RexGreenway/repos?sort=pushed"
            );
            const repos = await response.data;
            setRepos(repos);
        }

        fetchData();
    }, []);

    let projects = repos.map((r) => {
        return (
            <Project
                key={r.id} // ID needed for React rendering so components are unique
                name={r.name}
                description={r.description}
                link={r.html_url}
                language={r.language}
            />
        );
    });

    return (
        <div className={styles.Projects}>
            {projects}
            <Project
                key="inf"
                name="Coming Soon!"
                description="Keep a look-out for more projects coming soon..."
                link="https://github.com/RexGreenway"
                language="Any"
            />
        </div>
    );
}

export default Projects;
