import { useState } from 'react';
import { FAMILIES, paradigmsByFamily } from '../../data/paradigms';
import ParadigmCard from './ParadigmCard';
import ParadigmDetail from './ParadigmDetail';
import CodeCompare from './CodeCompare';

export default function ExplorePage() {
  const [familyId, setFamilyId] = useState('imperative');
  const family = FAMILIES[familyId];
  const paradigms = paradigmsByFamily(familyId);
  const [activeParadigmId, setActiveParadigmId] = useState(paradigms[0].id);

  function handleFamilyChange(id) {
    setFamilyId(id);
    const first = paradigmsByFamily(id)[0];
    setActiveParadigmId(first.id);
  }

  const activeParadigm = paradigms.find((p) => p.id === activeParadigmId) ?? paradigms[0];

  return (
    <div className="explore-page">
      <div className="explore-page__intro">
        <h1>Explore the paradigms</h1>
        <p>Pick a family, then a style within it, to see what makes it tick.</p>
      </div>

      <div className="family-switch" role="tablist" aria-label="Choose a paradigm family">
        {Object.values(FAMILIES).map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={f.id === familyId}
            className={`family-switch__btn ${f.id === familyId ? 'family-switch__btn--active' : ''}`}
            style={{ '--accent': f.color, '--accent-soft': f.colorSoft }}
            onClick={() => handleFamilyChange(f.id)}
          >
            <span className="family-switch__name">{f.name}</span>
            <span className="family-switch__tagline">{f.tagline}</span>
          </button>
        ))}
      </div>

      <div className="explore-page__layout">
        <div className="paradigm-card-list">
          {paradigms.map((p) => (
            <ParadigmCard
              key={p.id}
              paradigm={p}
              active={p.id === activeParadigmId}
              onSelect={setActiveParadigmId}
              accent={family.color}
            />
          ))}
        </div>

        <ParadigmDetail paradigm={activeParadigm} accent={family.color} accentSoft={family.colorSoft} />
      </div>

      <CodeCompare />
    </div>
  );
}
