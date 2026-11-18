import { useState } from 'react';
import { CODE_COMPARISONS } from '../../data/codeCompare';
import { FAMILIES } from '../../data/paradigms';

export default function CodeCompare() {
  const [activeId, setActiveId] = useState(CODE_COMPARISONS[0].id);
  const active = CODE_COMPARISONS.find((c) => c.id === activeId);

  return (
    <section className="code-compare">
      <h3>Same task, two ways</h3>
      <p>The paradigm doesn't just change the words — it changes how you think about the problem.</p>

      <div className="code-compare__tasks" role="tablist" aria-label="Choose a task">
        {CODE_COMPARISONS.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === activeId}
            className={`task-pill ${c.id === activeId ? 'task-pill--active' : ''}`}
            onClick={() => setActiveId(c.id)}
          >
            {c.task}
          </button>
        ))}
      </div>

      <div className="code-compare__columns">
        <div className="code-compare__col" style={{ '--accent': FAMILIES.imperative.color }}>
          <span className="code-compare__label">{active.imperative.label}</span>
          <pre className="code-block">
            <code>{active.imperative.code}</code>
          </pre>
          <p className="code-compare__note">{active.imperative.note}</p>
        </div>
        <div className="code-compare__col" style={{ '--accent': FAMILIES.declarative.color }}>
          <span className="code-compare__label">{active.declarative.label}</span>
          <pre className="code-block">
            <code>{active.declarative.code}</code>
          </pre>
          <p className="code-compare__note">{active.declarative.note}</p>
        </div>
      </div>
    </section>
  );
}
