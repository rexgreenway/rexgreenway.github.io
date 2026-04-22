import { Octokit } from "octokit";

import { getRepoReadMe, listUserReposResponseData } from "./types";

const octokit = new Octokit();

const ghApi = {
  fetchProjects: async (
    num_projects = 30,
  ): Promise<listUserReposResponseData[]> => {
    const response = await octokit.request(
      `GET /users/RexGreenway/repos?sort=pushed&per_page=${num_projects}`,
    );
    return await response.data;
  },

  fetchReadMe: async (repo: string): Promise<getRepoReadMe> => {
    const response = await octokit.request(
      `GET /repos/RexGreenway/${repo}/contents/README.md`,
    );
    return await response.data;
  },
};

export default ghApi;
