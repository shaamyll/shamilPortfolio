// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Page components
import HomePage from './assets/components/Home/Home';
import AboutPage from './assets/components/About/About';
import SkillsPage from './assets/components/Skill/Skill';
import ProjectsPage from './assets/components/Work/Work';

// Layout
import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;