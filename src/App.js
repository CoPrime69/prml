import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectOverview from './components/ProjectOverview';
import ResourcesSection from './components/ResourcesSection';
import ResultsSection from './components/ResultsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectOverview />
      <ResourcesSection />
      <ResultsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;