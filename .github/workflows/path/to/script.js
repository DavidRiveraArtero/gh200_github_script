github.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: "🎉 You've created this issue comment using GitHub Script!!!"
})