import React, { useEffect } from 'react'

export default function PriorityPurchase() {
  useEffect(() => {
    // Equivalent of window.onload
    const checkbox = document.getElementById('priorityCheckbox');
    const button = document.getElementById('submitButton');
    const status = document.getElementById('priorityStatus');

    if (button) {
      button.onclick = async function () {
        const isPriority = checkbox.checked;
        if (!isPriority) return alert("Story submitted (non-priority)");

        const response = await fetch('/api/create-priority-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ storyId: 'demo-story', amount: 500 }),
        });

        const result = await response.json();
        if (result.success) {
          status.innerText = "✅ Priority Active";
        } else {
          alert("Priority submission failed.");
        }
      };
    }
  }, []);

  return (
    <div className="card">
      <h2>Submit a Story</h2>
      <label>
        <input type="checkbox" id="priorityCheckbox" /> Make Priority ($5)
      </label>
      <br />
      <button id="submitStory()">Submit</button>
      <div id="priorityStatus"></div>
    </div>
  );
}
