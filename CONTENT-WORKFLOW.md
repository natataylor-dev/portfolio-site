# Content & Workflow Guide

Reference doc for adding content to the site and working with Claude on it going forward.

---

## 1. Jobs to be done — content still needed

Every file below has placeholder text and a `<div class="placeholder-note">`
flagging it as not-ready. Format A = case study template (situation,
constraint, approach, evidence, outcome). Format B = copy sample template
(short context, the work, result if available). Both formats live in the
case study template doc from earlier in this project.

| # | File | Format | Status |
|---|------|--------|--------|
| 1 | `src/case-studies/action-net-zero.md` | A | **Drafted** — one placeholder left (journey map graphic) |
| 2 | `src/case-studies/wild-things-gifts.md` | A | Not started |
| 3 | `src/case-studies/calendar-club.md` | A | Not started |
| 4 | `src/case-studies/emile-et-rose.md` | A | Not started |
| 5 | `src/copy-samples/bluepoint.md` | B | Not started |
| 6 | `src/copy-samples/wild-things-gifts.md` | B | Not started |
| 7 | `src/copy-samples/emile-et-rose.md` | B | Not started |
| 8 | `src/copy-samples/calendar-club.md` | B | Not started |
| 9 | `src/index.md` | — | Homepage positioning statement (1–2 sentences) |
| 10 | `src/about.md` | — | Career narrative, "How I Work" note, skills list |

Adding a 9th/10th piece later: new markdown file in the relevant folder,
tagged `case-study` or `copy-sample` in the front matter — it appears on
the index pages and homepage automatically. No template changes needed.

---

## 2. Git workflow reminder

```
git checkout main
git pull origin main              # fetch + update local main
git checkout -b short-branch-name # e.g. wild-things-case-study
# ...edit files...
git add .
git commit -m "Add Wild Things case study"
git push -u origin short-branch-name
```

Then on GitHub: open a Pull Request from that branch into `main`, review
the diff, merge it. Deleting the branch after merge is optional but tidy.

**Note on "preview URL":** right now the GitHub Actions workflow only
builds and deploys on push to `main` — so there's no live preview URL
for a branch/PR before merging. Merging *is* effectively publishing.
If you want a real preview link per PR (so content can be checked live
before it goes to the main URL), that's addable — a GitHub Action like
`rossjrw/pr-preview-action` deploys each PR to its own path
(e.g. `/pr-preview/pr-5/`) and comments the link on the PR. Say the
word and I'll wire it in.

---

## 3. Working with Claude on content changes

**This project folder is now connected** to this Cowork chat
(`/Users/natalietaylor/portfolio-site`). That replaces the zip workflow
from earlier — going forward:

- Ask directly, e.g. "draft the Wild Things case study in
  `src/case-studies/wild-things-gifts.md` using Format A" — Claude reads
  and edits the actual file in place, no zip round-trip.
- For review/tweaks, point at the specific file and section rather than
  the whole project — much faster to review a diff on one file than
  re-download everything.
- Claude can read, write and edit files directly here, but does **not**
  run `git`/push/PR commands on your behalf in this chat — that step
  stays with whoever's driving the terminal (you, Natalie, or Claude
  Code below). This is a deliberate boundary, not a technical gap.

### Alternative: Claude Code (local terminal)

If you'd rather have one tool do the edit *and* the git workflow in a
single pass, Claude Code (running locally, with your git credentials
already set up) can do both. Reusable prompt template:

```
Open /Users/natalietaylor/portfolio-site.

Edit src/case-studies/wild-things-gifts.md — replace the placeholder
content with a Format A case study (situation, constraint, approach,
supporting evidence, outcome) using this material: [paste notes/facts].

Then: create a new branch off main named wild-things-case-study,
commit the change, push it, and open a PR into main.
```

Swap the file path and material for whichever piece you're working on.
Claude Code will also flag if it can't complete the git steps (e.g. `gh`
CLI not authenticated) rather than silently skipping them.

### Recommended split

- **Drafting/editing content** → either this Cowork chat (folder
  already connected) or Claude Code — whichever's open.
- **Branch → PR → merge** → Claude Code (it can do the full loop) or
  manually via GitHub Desktop/terminal.
- **Structural changes** (new page types, layout changes, the PR
  preview addition above) → flag here first, since those touch
  `.eleventy.js` and templates rather than just content files.
