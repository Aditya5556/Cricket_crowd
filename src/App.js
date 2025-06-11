import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SubmitStory from './components/StorySubmit';
import Stories from './components/Stories';
import MonetizationModules from './components/MonetizationModules';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<SubmitStory />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/monetization" element={<MonetizationModules />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
