import { Endpoints } from '@octokit/types';
declare type runningWorkflows = Endpoints['GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs']['response'];
export declare class GitHubHelper {
    private octokit;
    constructor();
    getCurrentWorkflowRuns: (branch: string, workflowFileName: any) => Promise<runningWorkflows>;
}
export {};
