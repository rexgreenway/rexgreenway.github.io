import { useState, useEffect } from "react";

import { Octokit } from "octokit";

import styles from './Projects.module.css'

import Container from "./Container";
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
            <Project name={r.name} description={r.description} link={r.html_url}/>
        )
    });

    return (
        <Container className={styles.Projects}>
            {projects}
        </Container>
    )
}

export default Projects
