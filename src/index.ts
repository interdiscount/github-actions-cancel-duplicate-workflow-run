import * as core from '@actions/core';
import { GitHubHelper } from './GithubHelper';

const branch: string = core.getInput('branch');
const workFlowFileName: string = core.getInput('workflow-file-name');

const githubHelper = new GitHubHelper();

githubHelper
    .getCurrentWorkflowRuns(branch, workFlowFileName)
        .then(res => {
            if(res.data.total_count > 1) {
                const workflowRuns = res.data.workflow_runs;
                workflowRuns.sort((a,b) => a.run_number - b.run_number).pop();
                workflowRuns.forEach(workflowRun => {
                    githubHelper.cancelWorkflowRunById(workflowRun.id)
                        .then(() => console.log(`Cancel Workflow run with ID ${workflowRun.id}.`))
                });
            }
        })
        .catch(e => core.setFailed(e.message));
