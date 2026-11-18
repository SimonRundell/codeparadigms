const DIFFERENCES = [
  {
    label: 'The big question it answers',
    imperative: 'How do I do this?',
    declarative: 'What do I want?',
  },
  {
    label: 'Focus',
    imperative: 'The sequence of steps (control flow)',
    declarative: 'The desired result',
  },
  {
    label: 'State (data that can change)',
    imperative: 'Often changes variables as it goes ("mutates state")',
    declarative: 'Tries to avoid changing things directly',
  },
  {
    label: 'Real-life analogy',
    imperative: 'A recipe: do this, then this, then this',
    declarative: 'A restaurant order: say what you want, the kitchen decides how',
  },
  {
    label: 'Typical languages',
    imperative: 'C, Pascal, Java, Python (when used procedurally/OOP)',
    declarative: 'SQL, HTML/CSS, Haskell, Prolog',
  },
  {
    label: 'Easiest to read when…',
    imperative: 'You want to see exactly what happens, and in what order',
    declarative: 'You want to understand the goal without the mechanics',
  },
  {
    label: 'Common pitfall',
    imperative: 'Long, repetitive code; easy to introduce bugs in the steps',
    declarative: "Harder to see exactly what's happening 'under the hood'",
  },
];

const SIMILARITIES = [
  'Both are ways humans write instructions that a computer can eventually run — in the end, every program is turned into the same low-level machine code.',
  'Both can be used to solve the same problems — the paradigm changes your approach, not what is possible.',
  'Both use variables, conditions and some idea of repetition (even if declarative languages hide the looping from you).',
  'Most modern languages are not "pure" — they borrow ideas from both camps. Python, JavaScript, Java and C# can all be written imperatively or declaratively depending on the tools you choose.',
  'Both still need a programmer to understand the problem clearly before writing any code!',
];

export default function ComparePage() {
  return (
    <div className="compare-page">
      <div className="explore-page__intro">
        <h1>Compare the two families</h1>
        <p>A quick-reference look at how imperative and declarative programming differ — and where they overlap.</p>
      </div>

      <section className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col" className="compare-table__head compare-table__head--imperative">Imperative</th>
              <th scope="col" className="compare-table__head compare-table__head--declarative">Declarative</th>
            </tr>
          </thead>
          <tbody>
            {DIFFERENCES.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.imperative}</td>
                <td>{row.declarative}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="similarities">
        <h2>What they have in common</h2>
        <ul>
          {SIMILARITIES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
