"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubHelper = void 0;
const OctoClient_1 = require("./OctoClient");
const utils_1 = require("./utils");
class GitHubHelper {
    constructor() {
        this.getCurrentWorkflowRuns = (branch, workflowFileName) => this.octokit.actions.listWorkflowRuns(Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), { branch, workflow_id: workflowFileName }));
        this.octokit = new OctoClient_1.Octokit({ auth: utils_1.getGithubToken() });
    }
}
exports.GitHubHelper = GitHubHelper;
//# sourceMappingURL=GithubHelper.js.map