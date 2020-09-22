import { Octokit } from './OctoClient';
import { getGithubToken, getRepositoryInformation } from './utils';
import { Endpoints } from '@octokit/types';

type runningWorkflows = Endpoints['GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs']['response'];
type cancelWorkflowRun = Endpoints['POST /repos/:owner/:repo/actions/runs/:run_id/cancel']['response'];

export class GitHubHelper {
  private octokit: InstanceType<typeof Octokit>;

  constructor() {
    this.octokit = new Octokit({ auth: getGithubToken() });
  }

  getCurrentWorkflowRuns = (branch: string, workflowFileName: string): Promise<runningWorkflows> =>
    this.octokit.actions.listWorkflowRuns({
      ...getRepositoryInformation(),
      branch,
      // @ts-ignore
      workflow_id: workflowFileName,
      // @ts-ignore
      status: "in_progress"
    });

  cancelWorkflowRunById = (runId: number): Promise<cancelWorkflowRun> =>
    this.octokit.actions.cancelWorkflowRun({
        ...getRepositoryInformation(),
        run_id: runId
    });
}
