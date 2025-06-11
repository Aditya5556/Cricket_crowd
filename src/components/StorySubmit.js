import React, { useState } from 'react';
import '../styles/main.css';

const StorySubmit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    story: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/submit-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Story submitted successfully!'
        });
        setFormData({
          name: '',
          email: '',
          date: '',
          story: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit story');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to submit story. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-story-page">
      <div className="container">
        <div className="form-container">
          <div className="card">
            <h2>Share Your Cricket Tale</h2>
            {submitStatus && (
              <div className={`alert alert-${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Match Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="story">Your Cricket Story</label>
                <textarea
                  id="story"
                  name="story"
                  className="form-control"
                  required
                  value={formData.story}
                  onChange={handleChange}
                  placeholder="Share your unforgettable cricket moment, match experience, or player encounter..."
                  rows="6"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Your Story'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySubmit;