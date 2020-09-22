import { Endpoints } from '@octokit/types';
declare type runningWorkflows = Endpoints['GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs']['response'];
declare type cancelWorkflowRun = Endpoints['POST /repos/:owner/:repo/actions/runs/:run_id/cancel']['response'];
export declare class GitHubHelper {
    private octokit;
    constructor();
    getCurrentWorkflowRuns: (branch: string, workflowFileName: string) => Promise<runningWorkflows>;
    cancelWorkflowRunById: (runId: number) => Promise<cancelWorkflowRun>;
}
export {};
