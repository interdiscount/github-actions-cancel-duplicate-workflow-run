import { Octokit } from './OctoClient';
import { getGithubToken, getRepositoryInformation } from './utils';
import { Endpoints } from '@octokit/types';

type runningWorkflows = Endpoints['GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs']['response'];

export class GitHubHelper {
  private octokit: InstanceType<typeof Octokit>;

  constructor() {
    this.octokit = new Octokit({ auth: getGithubToken() });
  }

  getCurrentWorkflowRuns = (branch: string, workflowFileName: any): Promise<runningWorkflows> =>
      this.octokit.actions.listWorkflowRuns({
        ...getRepositoryInformation(),
        branch,
        workflow_id: workflowFileName
      })

}
