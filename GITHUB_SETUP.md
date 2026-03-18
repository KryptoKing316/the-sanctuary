# GitHub Branch Protection Rules — The Sanctuary

## Overview

This document defines the branch protection configuration for The Sanctuary repository.
These rules enforce the Tier system described in CLAUDE.md.

Apply these settings in: GitHub → Your Repo → Settings → Branches → Add Rule

---

## Branch: `main` (Production)

### Basic Protection
- [x] **Require a pull request before merging**
  - Required approving reviews: **2**
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require review from Code Owners
- [x] **Require status checks to pass before merging**
  - Required checks: `ci`, `lint`, `typecheck`
- [x] **Require branches to be up to date before merging**
- [x] **Do not allow bypassing the above settings**
- [x] **Restrict who can push to matching branches**
  - Allow: @eric-handle, @curtis-handle, @brandon-handle only

---

## Branch: `develop` (Staging)

### Basic Protection
- [x] **Require a pull request before merging**
  - Required approving reviews: **1**
  - [x] Dismiss stale pull request approvals when new commits are pushed
- [x] **Require status checks to pass before merging**
  - Required checks: `ci`, `lint`, `typecheck`
- [x] **Do not allow bypassing the above settings**

---

## CODEOWNERS File

Create this file at `.github/CODEOWNERS` in your repository:

```
# The Sanctuary — Code Ownership
# These owners are automatically requested for review on PRs

# Default — all files require at least one maintainer
*                           @your-org/maintainers

# Theology & Liturgy — Eric personally reviews (Tier 3)
/src/theology/              @eric-handle
/src/liturgy/               @eric-handle
/src/content/               @eric-handle
/public/prayers/            @eric-handle

# Database schema — any maintainer (Tier 2)
/supabase/                  @your-org/maintainers
/src/db/                    @your-org/maintainers

# Claude Code governance file — Eric only
CLAUDE.md                   @eric-handle
.github/CODEOWNERS          @eric-handle
```

---

## GitHub Actions — Claude Code Integration

Create this file at `.github/workflows/claude.yml`:

```yaml
name: Claude Code Assistant

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude'))
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      issues: write

    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          # Claude will read CLAUDE.md automatically for all context and rules
```

---

## PR Label System

Set up these labels in GitHub → Labels:

| Label | Color | Used For |
|---|---|---|
| `tier-1-bug` | 🟢 `#2da44e` | Bug fixes, safe to fast-track |
| `tier-2-feature` | 🟡 `#bf8700` | Feature additions, needs discussion |
| `tier-3-holy` | 🔴 `#cf222e` | Theology/liturgy — Eric reviews |
| `needs-maintainer` | `#8250df` | Waiting on maintainer attention |
| `claude-reviewed` | `#0969da` | Claude Code has reviewed this PR |
| `blessed` | `#e8d44d` | Ready to merge, all approvals received |

---

## PR Template

Create this file at `.github/pull_request_template.md`:

```markdown
## What does this PR do?

<!-- Describe the change clearly. Non-developers should be able to understand this. -->

## What Tier is this change? (see CLAUDE.md)

- [ ] 🟢 Tier 1 — Bug Fix
- [ ] 🟡 Tier 2 — Feature Addition (Issue # linked: )
- [ ] 🔴 Tier 3 — Theology/Liturgy/Content (Eric must review)

## How was this tested?

<!-- Describe how you verified this works -->

## Does this serve the widow, the orphan, the prisoner?

<!-- Optional but encouraged: what Kingdom purpose does this change serve? -->

## Contributor Pledge

- [ ] I have read CLAUDE.md
- [ ] I am building this as unto the Lord
- [ ] I have not introduced dark patterns, trackers, or irreverent content
- [ ] I welcome correction from the maintainer team
```

---

## Issue Template

Create this file at `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature Request
about: Propose a new feature for The Sanctuary
title: '[FEATURE] '
labels: 'tier-2-feature, needs-maintainer'
---

## What would you like to build?

## Why does this belong in The Sanctuary?

## Which users does this serve?
- [ ] People in crisis (war, trafficking, grief)
- [ ] Regular community members
- [ ] New believers
- [ ] Church communities
- [ ] Other: 

## Does this touch theology, liturgy, or prayer content?
- [ ] Yes (this will be Tier 3 — Eric reviews)
- [ ] No

## Kingdom alignment check:
Does this serve the widow, the orphan, the prisoner? How?
```

---

## Setup Checklist

When you create the repo, run through this:

- [ ] Create `main` branch with protection rules above
- [ ] Create `develop` branch with protection rules above
- [ ] Add `.github/CODEOWNERS` file
- [ ] Add `.github/workflows/claude.yml` file
- [ ] Add `.github/pull_request_template.md`
- [ ] Add `.github/ISSUE_TEMPLATE/feature_request.md`
- [ ] Add `ANTHROPIC_API_KEY` to repository secrets
- [ ] Install Claude GitHub App: https://github.com/apps/claude
- [ ] Set up label system (labels listed above)
- [ ] Invite Curtis and Brandon as maintainers with Write access
- [ ] Make Eric the sole admin
