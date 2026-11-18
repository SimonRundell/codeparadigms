export default function ParadigmDetail({ paradigm, accent, accentSoft }) {
  return (
    <div className="paradigm-detail" style={{ '--accent': accent, '--accent-soft': accentSoft }}>
      <div className="paradigm-detail__header">
        <span className="paradigm-detail__icon" aria-hidden="true">{paradigm.icon}</span>
        <div>
          <h3>{paradigm.name}</h3>
          <p>{paradigm.oneLiner}</p>
        </div>
      </div>

      <p className="paradigm-detail__description">{paradigm.description}</p>

      <div className="paradigm-detail__grid">
        <div>
          <h4>Key features</h4>
          <ul className="feature-list">
            {paradigm.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h4>Languages that use this well</h4>
          <div className="chip-row">
            {paradigm.languages.map((lang) => (
              <span className="chip" key={lang}>{lang}</span>
            ))}
          </div>
        </div>

        <div>
          <h4>{paradigm.example.title}</h4>
          <pre className="code-block">
            <code>{paradigm.example.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
