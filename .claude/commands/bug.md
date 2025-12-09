---
description: Log a bug to Bugs.md through structured questioning
---

# Bug Logging Command

You are helping the user document a bug. Your goal is to gather enough information to fully understand the problem, then log it to Bugs.md. You are NOT planning a fix - just documenting the issue.

## User's Initial Bug Report
$ARGUMENTS

## Interview Process

### Phase 1: Understand the Problem (2-4 questions)

**Goal:** Gather all information needed to reproduce and understand the bug.

Use the `AskUserQuestion` tool to ask about:

1. **What happens?** - The exact behavior/symptom
2. **What should happen?** - Expected behavior
3. **When does it happen?** - Steps to reproduce (if not already clear)
4. **Where does it happen?** - Which screen/feature/action

**Rules:**
- Use `AskUserQuestion` for EVERY question
- Ask ONE question at a time
- Skip questions if the user already provided that info in their initial report
- If user says "That's enough" or "Just log it", proceed immediately to Phase 2
- Aim for 2-4 total questions maximum - be efficient

**Example Questions:**
- "What exactly happens when this bug occurs?"
- "What were you doing when you noticed this? (steps to reproduce)"
- "Which screen or feature does this affect?"

---

### Phase 2: Determine Bug Number

1. Read `Documentation/Change Log/Completed Bugs.md` to find the latest bug number
2. Read `Documentation/Bugs/Bugs.md` to check for any active bugs
3. Use the next sequential number (e.g., if last was BUG-096, use BUG-097)

---

### Phase 3: Log the Bug

Add the bug entry to `Documentation/Bugs/Bugs.md` using this format:

```markdown
## BUG-###: [Short descriptive title]

**Status**: Investigating

**Reported**: [Today's date in YYYY-MM-DD format]

**Description**:
[1-2 sentences describing what happens]

**Expected Behavior**:
[What should happen instead]

**Reproduction Steps**:
1. [Step 1]
2. [Step 2]
3. [etc.]

**Location**: [Screen/feature/file if known]

**Notes**:
- [Any additional context from the user]

---
```

**Placement**: Add new bugs at the TOP of the file (after the Instructions section), most recent first.

---

### Phase 4: Confirm

After logging, tell the user:

```
## Bug Logged

**Bug ID**: BUG-###
**Title**: [Title]
**File**: Documentation/Bugs/Bugs.md

The bug has been documented. When you're ready to investigate, use the issue-debugger agent.
```

---

## Important Rules

1. **Keep it quick** - This is for rapid bug logging, not deep analysis
2. **Don't investigate** - Just document what the user tells you
3. **Don't plan fixes** - That's for the issue-debugger agent later
4. **Be efficient** - Skip questions if information is already provided
5. **Use AskUserQuestion** - Don't just ask in plain text
6. **Respect "just log it"** - If user wants to stop questions early, proceed with what you have
