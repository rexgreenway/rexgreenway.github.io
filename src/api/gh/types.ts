import { Endpoints } from "@octokit/types";

export type listUserReposResponseData =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export type getRepoReadMe =
  Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"];
