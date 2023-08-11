import { Octokit } from "octokit";

export async function fetchProjects(num_projects = 30) {
    const octokit = new Octokit();
    const response = await octokit.request(
        `GET /users/RexGreenway/repos?sort=pushed&per_page=${num_projects}`
    );
    return await response.data;
}
