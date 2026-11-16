module.exports = async ({github, context}) => {
    github.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: "🎉 You've created this issue comment using GitHub Script!!!"
    })
    github.projects.createCard({
        column_id: {columnID},
        content_id: context.payload.issue.id,
        content_type: "Issue"
    })
}