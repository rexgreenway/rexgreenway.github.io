import { useState, useEffect } from "react";

import { Octokit } from "octokit";

import styles from './Projects.module.css'

import Container from "./containers/Container";
import Project from "./Project";


function Projects() {
    let [repos, setRepos] = useState([])

    // Non-authed GET request to GH for my Public Repo Info 
    useEffect(() => {
        async function fetchData() {
            const octokit = new Octokit({userAgent: 'test/v0.0.1'});
            const response = await octokit.request(
                'GET /users/RexGreenway/repos'
            )
            const repos = await response.data
            setRepos(repos);
        }

        fetchData()
        
    }, []);

    let projects = repos.map(r => {
        return (
            <Project
                key={r.id}  // ID Field needed for React rendering so that components are treated as unique
                name={r.name}
                description={r.description}
                link={r.html_url}
                language={r.language}
            />
        )
    });

    return (
        <Container className={styles.Projects}>
            <h1>Projects</h1>
            {projects}
        </Container>
    )
}

export default Projects
