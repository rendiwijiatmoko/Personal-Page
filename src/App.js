import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <TopBar />
      <About />
      <Profile />

      <Skills />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
