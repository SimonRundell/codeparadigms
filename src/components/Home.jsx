import { FAMILIES } from '../data/paradigms';

export default function Home({ onNavigate }) {
  return (
    <div className="home">
      <section className="hero">
        <p className="hero__eyebrow">Level 2 Computing · Programming Paradigms</p>
        <h1 className="hero__title">
          Two ways to tell a computer<br />what to do.
        </h1>
        <p className="hero__subtitle">
          Every programming language leans towards one of two big mindsets —{' '}
          <strong>imperative</strong> (how to do it) and <strong>declarative</strong> (what you
          want). Explore both, compare them side by side, then test yourself with a drag-and-drop
          quiz.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => onNavigate('explore')}>
            Start exploring
          </button>
          <button className="btn btn--ghost" onClick={() => onNavigate('quiz')}>
            Jump to the quiz
          </button>
        </div>
      </section>

      <section className="hero-split" aria-label="Quick preview of both paradigms">
        {Object.values(FAMILIES).map((family) => (
          <div
            className="hero-card"
            key={family.id}
            style={{ '--accent': family.color, '--accent-soft': family.colorSoft }}
          >
            <h2 className="hero-card__title">{family.name}</h2>
            <p className="hero-card__tagline">{family.tagline}</p>
            <p className="hero-card__analogy">{family.analogy}</p>
          </div>
        ))}
      </section>

      <section className="home-steps">
        <h3>How to use this site</h3>
        <ol>
          <li>
            <strong>Explore</strong> — meet each paradigm, see a real example, and flip between
            them to compare the same task solved two ways.
          </li>
          <li>
            <strong>Compare</strong> — a quick-reference table of similarities and differences.
          </li>
          <li>
            <strong>Quiz</strong> — drag real programming languages into a Venn diagram. Some
            belong in both circles at once!
          </li>
        </ol>
      </section>
    </div>
  );
}
