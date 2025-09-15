import { Endpoints } from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit();

export type listUserReposResponseData =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export async function fetchProjects(
  num_projects = 30
): Promise<listUserReposResponseData[]> {
  const response = await octokit.request(
    `GET /users/RexGreenway/repos?sort=pushed&per_page=${num_projects}`
  );
  return await response.data;
}

export type getRepoReadMe =
  Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"];

export async function fetchReadMe(repo: string): Promise<getRepoReadMe> {
  const response = await octokit.request(
    `GET /repos/RexGreenway/${repo}/contents/README.md`
  );
  return await response.data;
}
