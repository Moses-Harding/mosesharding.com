# Archive Folder

## Purpose
This folder stores completed roadmaps and deprecated documentation. It serves as a historical record of major features and decisions made during development.

## Contents

### Completed Roadmaps
When a major roadmap is finished:
1. Move from `Roadmaps/` to `Archive/`
2. Rename with `COMPLETED-` prefix
3. Include completion date in filename
4. Add summary of what was accomplished

Example: `Roadmap-Redesign.md` → `COMPLETED-Redesign-Dec-2025.md`

### Deprecated Documentation
When documentation is no longer relevant:
1. Move from parent folder to `Archive/`
2. Rename with `DEPRECATED-` prefix
3. Add reason for deprecation
4. Note any replacement documentation

Example: `Old_API_Docs.md` → `DEPRECATED-Old_API_Docs.md`

## File Naming Convention

### Completed Roadmaps
Format: `COMPLETED-[Name]-[Month]-[Year].md`
Example: `COMPLETED-E-Commerce-Feature-Dec-2025.md`

### Deprecated Files
Format: `DEPRECATED-[Original-Name].md`
Example: `DEPRECATED-Legacy-Payment-System.md`

## When to Archive

### Archive COMPLETED:
- Major feature implementations
- Complete redesigns
- Phase 1/2/3 of multi-phase roadmaps
- Annual strategic plans

### Archive DEPRECATED:
- Replaced documentation
- Outdated processes
- Superseded architectures
- Deprecated APIs/features

## Do NOT Archive:
- Active bugs (move to `Change Log/Completed Bugs.md`)
- Small features (move to `Change Log/Completed Features.md`)
- Minor improvements (move to `Change Log/Completed Improvements.md`)

## Organization

Keep files sorted by date:
- Most recent at top
- Use consistent date format
- Group related items together

## Accessing Archived Items
These documents remain accessible for:
- Reference during similar future projects
- Understanding historical decisions
- Learning from past implementations
- Audit trails

## Template for Completed Roadmap Entry
```markdown
# COMPLETED - [Roadmap Name] - [Month] [Year]

## Original Purpose
[Brief description of what the roadmap set out to achieve]

## What Was Accomplished
- [ ] Feature 1 - Completed [Date]
- [ ] Feature 2 - Completed [Date]
- [ ] Feature 3 - Completed [Date]

## Key Outcomes
- Metrics/improvements achieved
- Lessons learned
- Unexpected challenges overcome

## Related Documentation
- [Link to updated reference docs]
- [Link to completed features in Change Log]
```