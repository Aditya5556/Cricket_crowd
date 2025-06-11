import React, { useEffect } from 'react'

export default function ProDashboard() {
    useEffect(() => {
        const loadButton = document.getElementById('loadDashboardBtn');
        const metricsBox = document.getElementById('proMetrics');
    
        if (loadButton) {
          loadButton.onclick = async function () {
            const res = await fetch('/api/pro-metrics');
            const metrics = await res.json();
            metricsBox.innerText = JSON.stringify(metrics, null, 2);
          };
        }
      }, []);
    return (
        <div className="card">
            <h2>CricketPro Dashboard</h2>
            <button id="loadDashboardBtn">Load Metrics</button>
            <pre id="proMetrics"></pre>
        </div>
    );
}
