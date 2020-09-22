import * as core from '@actions/core';
import { GitHubHelper } from './GithubHelper';

const branch: string = core.getInput('branch');
const workFlowFileName: string = core.getInput('workflow-file-name');

const githubHelper = new GitHubHelper();

githubHelper
    .getCurrentWorkflowRuns(branch, workFlowFileName)
        .then(res => console.log(res.data))
      .catch(e => core.setFailed(e.message));
