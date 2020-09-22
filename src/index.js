"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core = tslib_1.__importStar(require("@actions/core"));
const GithubHelper_1 = require("./GithubHelper");
const branch = core.getInput('branch');
const workFlowFileName = core.getInput('workflow-file-name');
const githubHelper = new GithubHelper_1.GitHubHelper();
githubHelper
    .getCurrentWorkflowRuns(branch, workFlowFileName)
    .then(res => console.log(res))
    .catch(e => core.setFailed(e.message));
//# sourceMappingURL=index.js.map