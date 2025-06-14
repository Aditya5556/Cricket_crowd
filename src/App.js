import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SubmitStory from './components/StorySubmit';
import Stories from './components/Stories';
import MonetizationModules from './components/MonetizationModules';

function App() {
  useEffect(() => {
    // Load the raffle widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.alatreeventures.com/raffle-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Create the widget container
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'raffle-widget';
    document.body.appendChild(widgetDiv);

    // Initialize the widget after script loads
    script.onload = () => {
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        RaffleWidget.init({
          apiBase: "https://api.alatreeventures.com",
          userId: "<%= userId %>"
        });
      `;
      document.body.appendChild(initScript);
    };

    // Clean up on unmount
    return () => {
      document.getElementById('raffle-widget')?.remove();
      document.body.removeChild(script);
    };
  }, []);

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
