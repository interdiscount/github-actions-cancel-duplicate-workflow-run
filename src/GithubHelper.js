"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubHelper = void 0;
const OctoClient_1 = require("./OctoClient");
const utils_1 = require("./utils");
class GitHubHelper {
    constructor() {
        this.getCurrentWorkflowRuns = (branch, workflowFileName) => this.octokit.actions.listWorkflowRuns(Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), { branch, 
            // @ts-ignore
            workflow_id: workflowFileName, 
            // @ts-ignore
            status: "in_progress" }));
        this.cancelWorkflowRunById = (runId) => this.octokit.actions.cancelWorkflowRun(Object.assign(Object.assign({}, utils_1.getRepositoryInformation()), { run_id: runId }));
        this.octokit = new OctoClient_1.Octokit({ auth: utils_1.getGithubToken() });
    }
}
exports.GitHubHelper = GitHubHelper;
//# sourceMappingURL=GithubHelper.js.map