
import React, { useState } from 'react';

const Sponsor = ({ matchId }) => {
  const [partnerName, setPartnerName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSponsor = async (e) => {
    e.preventDefault(); 

    const payload = {
      matchId,
      partnerName,
      contactEmail,
    };

    try {
      const res = await fetch('/api/match-sponsor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage('✅ Sponsorship successful!');
        setPartnerName('');
        setContactEmail('');
      } else {
        throw new Error('Failed to sponsor');
      }
    } catch (err) {
      setMessage('❌ Error: Could not sponsor this match.');
    }
  };

  return (
    <div className="sponsor-container">
      <h3>Sponsor This Match</h3>
      <form className="sponsor-form" onSubmit={handleSponsor}>
        <input
          type="text"
          placeholder="Partner Name"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Contact Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          required
        />
        <button type="submit">Sponsor for $1K</button>
      </form>
      {message && <p className="sponsor-message">{message}</p>}
    </div>
  );
};

export default Sponsor;
