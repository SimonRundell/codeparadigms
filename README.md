# Code Paradigms Explorer

An interactive, front-end-only web app that introduces **programming paradigms**
— imperative (procedural, object-oriented) and declarative (functional, logic,
declarative queries/markup) — through plain-English explanations, side-by-side
code comparisons, a similarities/differences reference table, and a
drag-and-drop Venn diagram quiz.

Built with **React + Vite + JavaScript** (no backend, no build-time data —
everything runs in the browser). Designed for **Level 2 NCFE Computing**
students, but usable by anyone starting out with programming concepts.

Live structure: `Home → Explore → Compare → Quiz`, navigated via the top bar.

---

## For students: what you'll learn

By the end of working through this site, you should be able to:

1. **Define** imperative and declarative programming in your own words.
2. **Recognise** procedural, object-oriented, functional and logic
   programming from a short code snippet or description.
3. **Explain**, using an analogy, why the same task (e.g. "get the even
   numbers from a list") looks different written imperatively vs
   declaratively.
4. **Identify** which paradigm(s) a given language is associated with,
   including languages that support more than one (e.g. Python, JavaScript).
5. **Compare** the two families — what they have in common, and what
   genuinely differs — without just memorising a list.

## For tutors: using this in a lesson

### Suggested running order (approx. 50–60 minute session)

| Time | Activity | Where |
|---|---|---|
| 5 min | Hook: ask the class to write down, in English, "how to make a cup of tea" — then "what a cup of tea is" (want vs. steps). Link to imperative/declarative. | Whiteboard, then **Home** |
| 15 min | Explore both families, both sub-paradigms in each. Have students flip the "same task, two ways" examples themselves and predict the output before revealing it. | **Explore** |
| 10 min | Walk the **Compare** table as a class; pause on "common pitfall" and "when is each easiest to read" — good discussion prompts. | **Compare** |
| 15–20 min | Venn diagram quiz, individually or in pairs. Mid-quiz, pause the class on any language with a 0% first-attempt success rate and discuss why (e.g. Python being "both" trips up students who assume one language = one paradigm). | **Quiz** |
| 5 min | Plenary: cold-call "name one language that's imperative only", "name one that's both", "why is that overlap useful to know?" | — |

### Teaching notes / common misconceptions this app targets

- **"A language IS a paradigm"** — many students assume each language has
  exactly one box. The Venn diagram's overlap region exists specifically to
  break this assumption (Python, JavaScript, Java, C#, Ruby are all placed
  in "both").
- **Declarative ≠ "no code"** — students sometimes think declarative means
  "easier"/"less powerful". The SQL and HTML/CSS examples show declarative
  code still does real work; it just hides the *how*.
- **OOP vs procedural confusion** — both are imperative, which can confuse
  students who've heard OOP described as "a different thing entirely" from
  procedural code. The Explore page keeps both under the Imperative family
  on purpose.
- Use the **"Same task, two ways"** panel on the Explore page as a live
  coding prompt: cover one column and ask students to guess what the other
  approach would look like before revealing it.

### Adapting the content

All subject content lives in plain data files, so you can edit or extend the
site without touching any component logic:

- `src/data/paradigms.js` — the paradigm descriptions, features, example code
  and language lists shown on the Explore page.
- `src/data/codeCompare.js` — the "same task, two ways" comparison examples.
- `src/data/languages.js` — the languages used in the Venn diagram quiz and
  their correct zone (`imperative`, `declarative`, or `both`). Add, remove or
  re-categorise languages here to tune difficulty for your group.

No other file needs to change to update the taught content.

---

## Running the project

Requires [Node.js](https://nodejs.org/) (18+ recommended) and npm.

```bash
npm install     # first time only
npm run dev     # start the local dev server (prints a localhost URL)
npm run build   # produce a static production build in dist/
npm run preview # preview the production build locally
```

The production build in `dist/` is fully static — it can be hosted on any
static web host (school VLE, GitHub Pages, Netlify, a shared drive served
over HTTP, etc.) with no server-side requirements.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/) — UI and dev/build tooling
- [@dnd-kit/core](https://dndkit.com/) — accessible drag-and-drop for the Venn diagram quiz (supports mouse, touch, and keyboard/click-to-cycle as a non-drag alternative)
- Plain CSS (`src/App.css`, `src/index.css`) — no CSS framework
- No backend, no database, no external APIs — everything is static content bundled into the app

## Project structure

```
src/
  data/                   # all editable teaching content
    paradigms.js
    codeCompare.js
    languages.js
  components/
    Home.jsx
    ComparePage.jsx
    NavBar.jsx
    Explore/              # Explore page and its sub-components
    Quiz/                 # Venn diagram drag-and-drop quiz
  App.jsx, App.css        # app shell, routing between tabs, styling
```

## License

Content and code are released under **Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**.
See [LICENSE.md](./LICENSE.md) for the full text. In short: you're welcome to
use, adapt and share this for teaching, as long as it's non-commercial,
you credit the original, and you share any adaptations under the same
license.
