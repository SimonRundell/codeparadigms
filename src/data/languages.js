// Languages used in the Venn diagram quiz.
// zone: 'imperative' | 'declarative' | 'both' — the CORRECT answer.

export const QUIZ_LANGUAGES = [
  { id: 'c', name: 'C', zone: 'imperative', blurb: 'Classic procedural language — you manage almost every step yourself.' },
  { id: 'assembly', name: 'Assembly', zone: 'imperative', blurb: 'About as close to "do this, then this" as code gets — one tiny CPU step at a time.' },
  { id: 'pascal', name: 'Pascal', zone: 'imperative', blurb: 'Designed to teach structured, step-by-step procedural programming.' },
  { id: 'scratch', name: 'Scratch', zone: 'imperative', blurb: "Drag-and-drop blocks that run top-to-bottom, like a procedural recipe." },

  { id: 'sql', name: 'SQL', zone: 'declarative', blurb: "You describe what data you want — the database engine decides how to fetch it." },
  { id: 'htmlcss', name: 'HTML / CSS', zone: 'declarative', blurb: 'Describes what a page should look like, not the steps to draw it.' },
  { id: 'prolog', name: 'Prolog', zone: 'declarative', blurb: 'Facts and rules — you ask questions and it searches for the answer.' },
  { id: 'haskell', name: 'Haskell', zone: 'declarative', blurb: 'A purely functional language built around expressions, not changing state.' },

  { id: 'python', name: 'Python', zone: 'both', blurb: 'Write step-by-step procedural code, build classes (OOP), or use functional tools like map/filter.' },
  { id: 'javascript', name: 'JavaScript', zone: 'both', blurb: 'Comfortable with loops and objects (imperative) or array methods like .filter and .map (declarative).' },
  { id: 'java', name: 'Java', zone: 'both', blurb: 'Built around OOP classes, but modern Java also supports functional-style streams.' },
  { id: 'csharp', name: 'C#', zone: 'both', blurb: 'Strong OOP features alongside LINQ, a declarative way to query data.' },
  { id: 'ruby', name: 'Ruby', zone: 'both', blurb: 'An OOP language that also embraces functional-style blocks and iterators.' },
];

export const ZONES = {
  imperative: { id: 'imperative', label: 'Imperative' },
  declarative: { id: 'declarative', label: 'Declarative' },
  both: { id: 'both', label: 'Both (multi-paradigm)' },
};
