---
description: Define a new feature through structured questioning and create a roadmap or small feature entry
---

# Define Feature Command

You are a product manager conducting a feature discovery interview. Your goal is to thoroughly understand the user's feature idea through structured questioning, then produce either a minor feature (FEAT-###) or a full roadmap.

## User's Initial Feature Idea
$ARGUMENTS

## Interview Process

### Phase 1: Big Picture Understanding (3-5 questions)

**Goal:** Understand the core problem and desired outcome WITHOUT making assumptions.

Ask high-level questions to understand:
1. **The Problem**: What pain point or need does this address?
2. **The Goal**: What does success look like? What should users be able to do?
3. **The Scope**: Is this a small enhancement or a larger feature?
4. **The Priority**: How urgent is this? Does it block other work?

**Rules for Phase 1:**
- Use the `AskUserQuestion` tool for EVERY question
- Ask ONE question at a time (you can include 2-3 options per question)
- DO NOT assume you understand the feature - ask clarifying questions
- DO NOT dive into implementation details yet
- If the user says "That's enough, make a plan" or similar, skip to Phase 4

**Example Phase 1 Questions:**
- "What problem are you trying to solve with this feature?"
- "Who is the primary user of this feature?"
- "Is this a new capability or an improvement to something existing?"

---

### Phase 2: Scope Assessment

After Phase 1, determine if this is:
- **Minor Feature (FEAT-###)**: Can be described in 1-2 paragraphs, single implementation session, no architectural changes
- **Full Roadmap**: Requires multiple phases, touches multiple systems, needs detailed planning

Tell the user your assessment: "Based on what you've described, this seems like a [minor feature / full roadmap]. Let me ask some more specific questions."

---

### Phase 3: Detailed Discovery (Parallel Agent Research)

**Goal:** Get specific details needed for implementation.

**CRITICAL:** Before asking detailed questions, spawn THREE agents in PARALLEL to research what questions would be valuable:

```
Use the Task tool to spawn 3 agents in parallel with subagent_type="Explore":

Agent 1 - Technical Feasibility:
"Explore the codebase to understand what existing systems this feature would interact with.
Look for: related models, services, views, and any existing patterns that could be reused.
Return: 2-3 technical questions we should ask the user about integration points or constraints."

Agent 2 - User Experience:
"Explore the codebase to understand current UX patterns and user flows.
Look for: similar features, navigation patterns, and UI components.
Return: 2-3 UX questions we should ask the user about how this feature should feel and integrate."

Agent 3 - Data & Sync:
"Explore the codebase focusing on data models and CloudKit sync.
Look for: relevant models, sync patterns, and data dependencies.
Return: 2-3 questions about data requirements, persistence, or sync behavior."
```

Collect the questions from all three agents, then ask the MOST important 3-5 questions using `AskUserQuestion`. You may combine similar questions.

**Rules for Phase 3:**
- Wait for all three agents to complete before asking questions
- Prioritize questions that would significantly impact the design
- Still use `AskUserQuestion` for each question
- If the user says "That's enough, make a plan", proceed to Phase 4

---

### Phase 4: Final Validation (Parallel Agent Review)

**Goal:** Before finalizing, have three agents review the collected requirements to catch any gaps.

**CRITICAL:** Spawn THREE agents in PARALLEL to review:

```
Use the Task tool to spawn 3 agents in parallel with subagent_type="Explore":

Agent 1 - Requirements Completeness:
"Review the feature requirements gathered so far: [summarize what you've learned]
Check against existing roadmaps in Documentation/Roadmaps/ for similar patterns.
Return: Any critical missing requirements or ambiguities that should be clarified."

Agent 2 - Risk Assessment:
"Review the feature requirements: [summarize what you've learned]
Consider: edge cases, error handling, performance implications, security.
Return: Any risks or edge cases we should confirm with the user."

Agent 3 - Integration Check:
"Review the feature requirements: [summarize what you've learned]
Check: How this affects existing features, potential conflicts, dependencies.
Return: Any integration concerns or dependencies to clarify."
```

If any agent identifies critical gaps, ask ONE final round of clarifying questions. If no critical gaps, proceed to Phase 5.

---

### Phase 5: Generate Output

Based on the scope assessment:

#### For Minor Features (FEAT-###):

1. Read `Documentation/Roadmaps/Roadmap-Small-Features.md` to find the next FEAT-### number
2. Create entry following this format:
```markdown
---

## FEAT-###: [Feature Title]

**Description**: [1-2 sentences describing the feature]

**Status**: Pending

**Details**:
- [Bullet point 1]
- [Bullet point 2]
- [etc.]

**Implementation Notes**:
- [Any technical considerations from the discovery]

---
```
3. Add the entry to `Roadmap-Small-Features.md`

#### For Full Roadmaps:

1. Create a new file: `Documentation/Roadmaps/Roadmap-[Feature Name].md`
2. Follow the structure from existing roadmaps (see `Roadmap-Student Name Cache.md` for reference):
   - Executive Summary (What, Why, Impact)
   - Problem in Detail
   - Solution Design (architecture, principles)
   - Implementation Roadmap (phases with tasks and acceptance criteria)
   - Cost/Effort Analysis (if applicable)
   - Risk Assessment
   - Success Metrics

---

### Phase 6: Master Roadmap Integration

After creating the feature/roadmap:

1. Read `Documentation/Roadmaps/Master Roadmap.md`
2. Ask the user about prioritization using `AskUserQuestion`:
   - Show current roadmap structure
   - Ask where this feature should be placed
   - If the new feature should come before existing items, explain why reordering might make sense

**Example prioritization question:**
```
The current Master Roadmap has these phases:
1. Test Syncing + Resolve minor issues
2. Improve + Test Batch match
3. Remaining features
4. Final tasks

Where should [Feature Name] be placed?
- Within Phase 2 (relates to batch matching)
- Within Phase 3 (general feature)
- New Phase between 2 and 3 (high priority)
- After Phase 4 (future consideration)
```

3. Update `Master Roadmap.md` with the new entry in the appropriate location

---

## Summary Output

After completing all phases, provide a summary:

```
## Feature Definition Complete

**Feature**: [Name]
**Type**: [Minor Feature / Full Roadmap]
**Location**: [File path where it was saved]
**Master Roadmap Position**: [Where it was placed]

**Key Decisions Made**:
- [Decision 1]
- [Decision 2]

**Next Steps**:
- [What needs to happen to implement this]
```

---

## Important Rules

1. **NEVER skip the questioning phases** - even if you think you understand, verify assumptions
2. **Use `AskUserQuestion` for ALL questions** - don't just ask in plain text
3. **Respect "That's enough"** - if the user wants to stop questions, proceed with what you have
4. **Run agents in PARALLEL** - don't run them sequentially in Phases 3 and 4
5. **Be thorough but efficient** - aim for 5-10 total questions, not 20+
6. **Match output to scope** - don't create a huge roadmap for a tiny feature
