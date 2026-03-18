# CLAUDE.md — The Sanctuary Covenant

> "Unless the Lord builds the house, the builders labor in vain." — Psalm 127:1

This file governs how Claude Code and all contributors work within this repository.
Every line of code in The Sanctuary serves a sacred purpose. Build accordingly.

---

## What We Are Building

**The Sanctuary** is a decentralized, global Orthodox and Catholic-inspired prayer and
intercession platform. It exists to gather the Body of Christ around real-time prayer
for the least of these — victims of war, trafficking survivors, widows, orphans, the
sick, and the persecuted church.

This is not a wellness app. This is not a meditation app.
This is a digital sacred space where millions pray together as one Body.

---

## Absolute Standards (Non-Negotiable)

These apply to every contributor, every PR, and every AI-generated suggestion:

- **No dark patterns.** No manipulative UI, fake urgency, or addiction-driving mechanics.
- **No secular rebranding of prayer.** We say "prayer," not "mindfulness" or "meditation."
- **No content contradicting Trinitarian Christian orthodoxy.** The Father, Son, and
  Holy Spirit are not up for reinterpretation.
- **No exploitation of grief or spiritual vulnerability** for monetization.
- **No casual or irreverent depictions** of Christ, Mary, angels, or the saints in any
  imagery, copy, or UI element.
- **No feature ships that harm the widow, the orphan, or the prisoner.** If it doesn't
  serve them, question whether it belongs.

---

## Contribution Tier System

### Tier 1 — Bug Fixes (Any trusted contributor)
Examples: broken button, typo, layout bug, broken link, failed test
- Submit a PR with a clear description
- Claude Code can auto-review
- One maintainer approval required to merge

### Tier 2 — Feature Additions (Trusted contributors + maintainer discussion)
Examples: new UI component, new screen, performance improvement, new prayer category
- Open an Issue first describing the feature and its Kingdom purpose
- Tag a maintainer for alignment before building
- Two maintainer approvals required to merge

### Tier 3 — Theology, Liturgy & Content (Maintainer-only approval)
Examples: prayer wording, Scripture selection, communion flow, sacramental language,
intercession category framing, anything a priest or elder would weigh in on
- Must be reviewed by Eric (Lead Maintainer) personally before merge
- No exceptions. This is the altar — guard it carefully.

---

## Code Standards

- **TypeScript strict mode** — always, no exceptions
- **Accessibility (WCAG AA minimum)** — someone in a war zone or crisis is using this
- **Mobile-first** — this is primarily a phone experience
- **Offline-capable where possible** — low bandwidth matters globally
- **Performance budget:** First meaningful paint under 3 seconds on 3G
- **No third-party trackers or ad SDKs** — ever

---

## Folder Structure & Ownership

```
/src
  /components       → Tier 1-2 contributions welcome
  /screens          → Tier 2, needs maintainer discussion
  /content          → Tier 3, maintainer approval required
  /liturgy          → Tier 3, maintainer approval required
  /theology         → Tier 3, Eric personally reviews
  /db               → Tier 2, needs maintainer discussion
```

---

## Commit & PR Guidelines

- Write commit messages that a non-developer could understand
- Reference the Issue number in every PR: `Fixes #42`
- PRs must include: what changed, why it matters, and how it was tested
- Do not merge your own PR — always get a second set of eyes
- When in doubt, ask: **"Does this serve the widow, the orphan, the prisoner?"**

---

## Claude Code Behavior in This Repo

When Claude Code operates in this repository via GitHub Actions:

- Always follow the Tier system above — never self-merge Tier 3 changes
- Flag any content that touches prayer language, Scripture, or sacramental flow
  for human review before proceeding
- Do not introduce new dependencies without opening an Issue first
- Treat the `/theology` and `/liturgy` folders as read-only unless explicitly
  instructed by a maintainer

---

## Maintainers

| Name    | Role                          | GitHub Handle |
|---------|-------------------------------|---------------|
| Eric    | Lead Maintainer, Vision & Theology | @[your-handle] |
| Curtis  | Co-Maintainer, Engineering    | @[curtis-handle] |
| Brandon | Co-Maintainer, Product        | @[brandon-handle] |

---

## Final Word

This project is open source because the Gospel is open source.
We welcome builders, designers, theologians, and intercessors.
What we do not welcome is carelessness with holy things.

Build as unto the Lord. Ship with reverence.
