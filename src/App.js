import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SubmitStory from './components/StorySubmit';
import Stories from './components/Stories';
import MonetizationModules from './components/MonetizationModules';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<SubmitStory />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/monetization" element={<MonetizationModules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
