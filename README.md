# Cancel duplicate Workflow run
Cancel duplicate Workflow runs, this will make your github actions more efficient.

## Inputs

### `github-token`

**Required** The Token to interact with the Github API.

### `workflow-file-name`

**Required** Name of the Workflow you would like to cancel.

### `branch`

**Required** Branch the workflow runs on.

## Example usage

```
uses: interdiscount/github-actions-cancel-duplicate-workflow-run@1.0.0
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  workflow-file-name: "workflow.yml"
  branch: ${GITHUB_REF##*/}
```
