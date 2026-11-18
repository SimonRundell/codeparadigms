const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'explore', label: 'Explore' },
  { id: 'compare', label: 'Compare' },
  { id: 'quiz', label: 'Quiz' },
];

export default function NavBar({ active, onChange }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true"><img className="logo" src="./favicon.png" /></span>
          <span>Code Paradigms Explorer</span>
        </div>
        <nav className="navbar__tabs" aria-label="Main sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`navbar__tab ${active === tab.id ? 'navbar__tab--active' : ''}`}
              onClick={() => onChange(tab.id)}
              aria-current={active === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
