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
    .then(res => {
    if (res.data.total_count > 1) {
        const workflowRuns = res.data.workflow_runs;
        workflowRuns.sort((a, b) => a.run_number - b.run_number).pop();
        workflowRuns.forEach(workflowRun => {
            githubHelper.cancelWorkflowRunById(workflowRun.id)
                .then(() => console.log(`Cancel Workflow run with ID ${workflowRun.id}.`));
        });
    }
})
    .catch(e => core.setFailed(e.message));
//# sourceMappingURL=index.js.map