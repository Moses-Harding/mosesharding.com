---
description: Update documentation based on recent work and commit changes
---

# Document Recent Work

Analyze the current conversation and working session to update all relevant documentation, then commit and push.

## Context Gathering

First, understand what was accomplished in this session:
1. Review the conversation history to identify:
   - Bugs that were fixed
   - Features that were implemented or progressed
   - New bugs or issues that were discovered
   - Roadmap phases that were completed or progressed
   - Any architectural changes

2. Check git status to see what files were modified

## Documentation Updates

Based on the session analysis, perform these documentation tasks:

### 1. Bug Documentation
- **Fixed bugs**: Move entries from `Documentation/Bugs/Bugs.md` to `Documentation/Change Log/Completed Bugs.md`
- **Lessons learned**: Add insights to `Documentation/Bugs/Lessons Learned.md` if the bug fix revealed useful patterns
- **New bugs discovered**: Add entries to `Documentation/Bugs/Bugs.md` for any bugs identified but not yet fixed

### 2. Roadmap Updates
- Mark completed phases/tasks in active roadmaps (`Documentation/Roadmaps/Roadmap-*.md`)
- Move completed roadmaps to `Documentation/Archive/` with `COMPLETED-` prefix
- For small features (FEAT-#): Move completed ones from `Roadmap-Small-Features.md` to `Documentation/Change Log/Completed Features.md`

### 3. Changelog Update
- Add a brief, single-line entry to `Documentation/Change Log/Change Log.md` summarizing what was done
- Format: `- [DATE]: Brief description of change`
- Keep it concise - details belong in Completed Bugs.md or Completed Features.md

### 4. Architecture Documentation (if applicable)
- Update `Documentation/Architecture/` files if structural changes were made
- Update `Documentation/Reference/` if user-facing behavior changed

## Commit and Push

After documentation is updated, use the `git-manager` agent to:
1. Stage all documentation changes along with code changes
2. Create a descriptive commit message summarizing the work
3. Push to remote

## Important Notes

- Only update documentation for work actually done in this session
- Don't create duplicate entries - check existing documentation first
- Keep changelog entries brief (one line) - full details go in specialized files
- If no relevant documentation updates are needed, state this clearly
- Always use git-manager for the final commit/push step
