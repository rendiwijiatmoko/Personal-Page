import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <TopBar />
      <About />
      <Education />
      <Skills />
      <Portofolio />
    </div>
  );
}

export default App;
