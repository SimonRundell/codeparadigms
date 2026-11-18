export default function ParadigmCard({ paradigm, active, onSelect, accent }) {
  return (
    <button
      className={`paradigm-card ${active ? 'paradigm-card--active' : ''}`}
      style={{ '--accent': accent }}
      onClick={() => onSelect(paradigm.id)}
      aria-pressed={active}
    >
      <span className="paradigm-card__icon" aria-hidden="true">{paradigm.icon}</span>
      <span className="paradigm-card__name">{paradigm.name}</span>
      <span className="paradigm-card__oneliner">{paradigm.oneLiner}</span>
    </button>
  );
}
