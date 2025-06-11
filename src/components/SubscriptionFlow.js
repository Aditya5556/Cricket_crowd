import React from 'react'

export default function SubscriptionFlow() {
    useEffect(() => {
        const subscribeButton = document.getElementById('subscribeButton');
        const statusText = document.getElementById('proStatus');

        if (subscribeButton) {
            subscribeButton.onclick = async function () {
                const response = await fetch('/api/pro-trial', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: 'demo@user.com' })
                });

                const result = await response.json();
                if (result.success) {
                    statusText.innerText = `Trial Active until ${result.trialEnds}`;
                } else {
                    alert("Trial activation failed or already used.");
                }
            };
        }
    }, []);

    return (
        <div className="card">
            <h2>Subscribe to CricketPro</h2>
            <button id="subscribeButton">Start Free Trial</button>
            <p id="proStatus"></p>
        </div>
    );
}
