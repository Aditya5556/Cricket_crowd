import React from 'react'

export default function VotePackPurchase() {
    useEffect(() => {
        const buyButton = document.getElementById('buyVotesBtn');
        const creditSpan = document.getElementById('voteCredits');

        async function updateVoteCredits() {
            const creditRes = await fetch('/api/vote-pack-status?user=demo@user.com');
            const creditData = await creditRes.json();
            creditSpan.innerText = creditData.credits || 0;
        }

        if (buyButton) {
            buyButton.onclick = async function () {
                const response = await fetch('/api/create-vote-pack-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ pack: 5, amount: 300 })
                });

                const result = await response.json();
                if (result.success) {
                    alert("Vote Pack Purchased!");
                    updateVoteCredits();
                } else {
                    alert("Vote pack purchase failed.");
                }
            };
        }

        // Load vote credits on page load
        updateVoteCredits();
    }, []);

    return (
        <div className="card">
            <h2>Vote on Stories</h2>
            <button id="buyVotesBtn">Buy 5 Votes ($3)</button>
            <p>Remaining Vote Credits: <span id="voteCredits">-</span></p>
        </div>
    );
}
