---
description: Determine what we were last working on and recommend next steps
allowed-tools: Read, Bash(git:*), Glob, AskUserQuestion
model: claude-haiku-4-5-20251001
---

# Determine Current Project State and Recommend Next Steps

Analyze the project's recent history and standardized documentation to determine what we should work on next.

Uses the standard documentation structure (follows the documentation organization specified in the global CLAUDE.md):
- `Documentation/Roadmaps/` - Active roadmaps (Roadmap-*.md)
- `Documentation/Bugs/Bugs.md` - Open bugs and blockers
- `Documentation/Change Log/Change Log.md` - Recently completed work
- `Documentation/Archive/` - Completed roadmaps (COMPLETED-*.md)

## Analysis Steps

1. **Recent commits**: `! git log --oneline -15` to see recent work context
2. **Active roadmaps**: Glob for `Documentation/Roadmaps/Roadmap-*.md` (exclude COMPLETED- prefixed files from Archive)
3. **Change Log**: Read `Documentation/Change Log/Change Log.md` to understand what was recently completed
4. **Open bugs**: Read `Documentation/Bugs/Bugs.md` if it exists; note any critical or blocking issues
5. **Synthesize findings**:
   - Create a brief 3-4 sentence summary of what we were last working on
   - Identify current stage (phase X of Y, which roadmap, which task)
   - Note any blockers or critical bugs
6. **Prioritize next steps**:
   - CRITICAL: Active blockers and bugs that prevent progress take highest priority
   - IMPORTANT: Incomplete phases of in-progress roadmaps should continue
   - NEXT: If a roadmap is complete, move to the next one
   - OPTIONAL: Documentation and architecture reviews
7. **Prompt user**: Use AskUserQuestion to ask what they want to work on next, offering 2-4 recommended options based on priority

## Example

**Summary**: Last working on "Roadmap-Performance Optimization" Phase 2. Phase 1 completed, Phase 2 in progress. A critical bug in the caching layer is blocking full performance gains.

**Recommended Next Steps**:
1. Fix caching layer bug (BLOCKING Phase 2)
2. Continue Phase 2 implementation
3. Review Phase 3 requirements
4. Read Lessons Learned for similar bug patterns

Then ask: "Which would you like to work on?"
