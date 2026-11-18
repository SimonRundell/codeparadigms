import { useMemo, useState } from 'react';
import { DndContext, PointerSensor, TouchSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
import { QUIZ_LANGUAGES, ZONES } from '../../data/languages';
import DraggableChip from './DraggableChip';
import DropZone from './DropZone';

const ZONE_IDS = ['tray', 'imperative', 'both', 'declarative'];

function buildInitialPlacements() {
  const placements = {};
  QUIZ_LANGUAGES.forEach((lang) => {
    placements[lang.id] = 'tray';
  });
  return placements;
}

export default function VennQuiz() {
  const [placements, setPlacements] = useState(buildInitialPlacements);
  const [checked, setChecked] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 8 } }),
    useSensor(KeyboardSensor),
  );

  const grouped = useMemo(() => {
    const groups = { tray: [], imperative: [], both: [], declarative: [] };
    QUIZ_LANGUAGES.forEach((lang) => {
      const zone = placements[lang.id] ?? 'tray';
      groups[zone].push(lang);
    });
    return groups;
  }, [placements]);

  const score = useMemo(() => {
    let correct = 0;
    QUIZ_LANGUAGES.forEach((lang) => {
      if (placements[lang.id] === lang.zone) correct += 1;
    });
    return correct;
  }, [placements]);

  function movePlacement(languageId, zoneId) {
    if (!zoneId || !ZONE_IDS.includes(zoneId)) return;
    setPlacements((prev) => ({ ...prev, [languageId]: zoneId }));
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;
    movePlacement(active.id, over.id);
  }

  function handleReset() {
    setPlacements(buildInitialPlacements());
    setChecked(false);
  }

  function statusFor(lang) {
    if (!checked) return null;
    if (placements[lang.id] === 'tray') return 'unplaced';
    return placements[lang.id] === lang.zone ? 'correct' : 'incorrect';
  }

  const allPlaced = grouped.tray.length === 0;

  function renderChip(lang) {
    return (
      <DraggableChip
        key={lang.id}
        language={lang}
        zone={placements[lang.id]}
        status={statusFor(lang)}
        onCycle={movePlacement}
      />
    );
  }

  return (
    <div className="quiz-page">
      <div className="explore-page__intro">
        <h1>Venn diagram challenge</h1>
        <p>
          Drag each language into the diagram — or tap/click a chip to cycle it through the
          zones. Some languages belong in <strong>both</strong> circles at once!
        </p>
      </div>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <DropZone id="tray" className="quiz-tray">
          {grouped.tray.length === 0 ? (
            <span className="quiz-tray__empty">All languages placed — press "Check my answers" below.</span>
          ) : (
            grouped.tray.map(renderChip)
          )}
        </DropZone>

        <div className="venn-wrap">
          <svg className="venn-svg" viewBox="0 0 600 340" aria-hidden="true">
            <circle cx="220" cy="170" r="150" fill="var(--imperative-soft)" stroke="var(--imperative)" strokeWidth="2" style={{ mixBlendMode: 'multiply' }} />
            <circle cx="380" cy="170" r="150" fill="var(--declarative-soft)" stroke="var(--declarative)" strokeWidth="2" style={{ mixBlendMode: 'multiply' }} />
          </svg>

          <div className="venn-zones">
            <DropZone id="imperative" className="venn-zone venn-zone--imperative">
              <span className="venn-zone__label">Imperative</span>
              <div className="venn-zone__chips">{grouped.imperative.map(renderChip)}</div>
            </DropZone>
            <DropZone id="both" className="venn-zone venn-zone--both">
              <span className="venn-zone__label venn-zone__label--both">Both</span>
              <div className="venn-zone__chips">{grouped.both.map(renderChip)}</div>
            </DropZone>
            <DropZone id="declarative" className="venn-zone venn-zone--declarative">
              <span className="venn-zone__label">Declarative</span>
              <div className="venn-zone__chips">{grouped.declarative.map(renderChip)}</div>
            </DropZone>
          </div>
        </div>
      </DndContext>

      <div className="quiz-controls">
        <button className="btn btn--primary" disabled={!allPlaced} onClick={() => setChecked(true)}>
          Check my answers
        </button>
        <button className="btn btn--ghost" onClick={handleReset}>
          Reset
        </button>
        {!allPlaced && <span className="quiz-controls__hint">Place every language before checking.</span>}
      </div>

      {checked && (
        <div className="quiz-results" role="status">
          <h3>
            You got {score} out of {QUIZ_LANGUAGES.length} correct
          </h3>
          <ul className="quiz-results__list">
            {QUIZ_LANGUAGES.filter((lang) => placements[lang.id] !== lang.zone).map((lang) => (
              <li key={lang.id}>
                <strong>{lang.name}</strong> actually belongs in{' '}
                <strong>{ZONES[lang.zone].label}</strong> — {lang.blurb}
              </li>
            ))}
          </ul>
          {score === QUIZ_LANGUAGES.length && <p>Perfect score — nice work! 🎉</p>}
        </div>
      )}
    </div>
  );
}
