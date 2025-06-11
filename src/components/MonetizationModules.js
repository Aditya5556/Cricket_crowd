import React, { useState } from 'react';
import '../styles/main.css';

const MonetizationModules = () => {
    const [voteCredits, setVoteCredits] = useState(0);
    const [priorityStatus, setPriorityStatus] = useState('');
    const [proStatus, setProStatus] = useState('');

    const submitStory = () => {
        const priority = document.getElementById('priorityCheckbox').checked;
        if (priority) {
            setPriorityStatus('Priority submission enabled ($5)');
        } else {
            setPriorityStatus('Regular submission');
        }
    };

    const buyVotePack = () => {
        setVoteCredits(prev => prev + 5);
    };

    const subscribePro = () => {
        setProStatus('Subscribed to CricketPro ($10/month)');
    };

    const loadDashboard = () => {
        const metrics = document.getElementById('proMetrics');
        metrics.textContent = JSON.stringify({
            storiesSubmitted: 15,
            totalVotes: 234,
            proFeatures: ['Analytics', 'Priority Support', 'Custom Themes']
        }, null, 2);
    };

    return (
        <div className="container">
            <h1>CricketTales Monetization Modules</h1>

            <div className="card">
                <h2>📝 Submit a Story</h2>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Write your story..."
                        rows="4"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox" id="priorityCheckbox" /> Make Priority ($5)
                    </label>
                </div>
                <button className="btn btn-primary" onClick={submitStory}>Submit Story</button>
                <p id="priorityStatus">{priorityStatus}</p>
            </div>

            <div className="card">
                <h2>⭐ Buy Vote Pack</h2>
                <p>You have <span id="voteCredits">{voteCredits}</span> vote credits.</p>
                <button className="btn btn-primary" onClick={buyVotePack}>Buy 5 Votes ($3)</button>
            </div>

            <div className="card">
                <h2>🏏 CricketPro Subscription</h2>
                <button className="btn btn-primary" onClick={subscribePro}>Subscribe to CricketPro ($10/month)</button>
                <p id="proStatus">{proStatus}</p>
            </div>

            <div className="card">
                <h2>📊 Pro Dashboard</h2>
                <button className="btn btn-primary" onClick={loadDashboard}>Load Metrics</button>
                <pre id="proMetrics" className="form-control"></pre>
            </div>
        </div>
    );
};

export default MonetizationModules; 