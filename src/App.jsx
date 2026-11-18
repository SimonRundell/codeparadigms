import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ExplorePage from './components/Explore/ExplorePage';
import ComparePage from './components/ComparePage';
import VennQuiz from './components/Quiz/VennQuiz';
import CMFloatAd from './cmFloatAd';
import './App.css';

export default function App() {
  const [tab, setTab] = useState('home');

  function handleNavigate(next) {
    setTab(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <NavBar active={tab} onChange={handleNavigate} />
      <main className="main">
        {tab === 'home' && <Home onNavigate={handleNavigate} />}
        {tab === 'explore' && <ExplorePage />}
        {tab === 'compare' && <ComparePage />}
        {tab === 'quiz' && <VennQuiz />}
        <CMFloatAd />
      </main>
      <footer className="footer">
        <p>Built for Level 2 Computing · Programming Paradigms</p>
      </footer>
    </>
  );
}
