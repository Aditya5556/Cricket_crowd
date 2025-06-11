import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import MonetizationModules from './MonetizationModules';
import Featured from './Featured';
import Sponsor from './Sponsor';

const LandingPage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [stories, setStories] = useState([]);

    useEffect(() => {
        loadAllStories();
    }, []);

    const showSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    const loadAllStories = () => {
        const demoStories = [
            {
                id: 'story-1',
                author: 'Rahul Kumar',
                date: '2024-05-15',
                title: 'The Greatest Six I Ever Witnessed',
                excerpt: 'It was the final over, 12 runs needed, and Dhoni was on strike. The stadium was electric, 50,000 people on their feet...',
                votes: 247,
                boosted: true
            },
            {
                id: 'story-2',
                author: 'Priya Sharma',
                date: '2024-05-12',
                title: 'My First Cricket Match',
                excerpt: 'I was seven years old when my father took me to my first cricket match. The roar of the crowd, the crack of the bat...',
                votes: 189,
                boosted: false
            }
        ];
        setStories(demoStories);
    };

    const loadMoreStories = () => {
        const additionalStories = [
            {
                id: 'story-3',
                author: 'Amit Patel',
                date: '2024-05-10',
                title: 'The Catch That Changed Everything',
                excerpt: 'It was a routine match until that incredible boundary catch in the 18th over...',
                votes: 156,
                boosted: false
            },
            {
                id: 'story-4',
                author: 'Sneha Reddy',
                date: '2024-05-08',
                title: 'Meeting My Cricket Hero',
                excerpt: 'I never thought I would meet Virat Kohli, but destiny had other plans...',
                votes: 203,
                boosted: false
            },
            {
                id: 'story-5',
                author: 'Rajesh Singh',
                date: '2024-05-05',
                title: 'The Underdog Victory',
                excerpt: 'Our local team was 50 runs behind with 3 overs left. What happened next was magical...',
                votes: 127,
                boosted: false
            }
        ];
        setStories(additionalStories);
    };

    const voteForStory = (storyId) => {
        setStories(prevStories =>
            prevStories.map(story =>
                story.id === storyId
                    ? { ...story, votes: story.votes + 1 }
                    : story
            )
        );
    };

    const boostStory = (storyId) => {
        setStories(prevStories =>
            prevStories.map(story =>
                story.id === storyId
                    ? { ...story, boosted: true }
                    : story
            )
        );
    };

    const handleStorySubmit = (e) => {
        e.preventDefault();
        // Handle story submission logic here
        alert('Story submitted successfully!');
        e.target.reset();
    };

    // Load different stories based on active section
    useEffect(() => {
        if (activeSection === 'stories') {
            loadMoreStories();
        } else if (activeSection === 'home') {
            loadAllStories();
        }
    }, [activeSection]);

    return (
        <div className="app">
            <header className="header">
                <nav className="nav container">
                    <Link to="/" className="logo">CricketTales</Link>
                    <ul className="nav-links">
                        <li><Link to="/" className={activeSection === 'home' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/submit" className={activeSection === 'submit' ? 'active' : ''}>Submit Story</Link></li>
                        <li><Link to="/stories" className={activeSection === 'stories' ? 'active' : ''}>Stories</Link></li>
                        <li><Link to="/monetization" className={activeSection === 'monetization' ? 'active' : ''}>Monetization</Link></li>
                    </ul>
                </nav>
            </header>

            {activeSection === 'home' && (
                <section className="section active">
                    <div className="hero">
                        <div className="container">
                            <h1>Share Your Cricket Tales</h1>
                            <p>A community-driven platform where fans share match stories, player legends, and personal cricket memories</p>
                            <Link to="/submit" className="btn btn-primary">Share Your Story</Link>
                        </div>
                    </div>

                    <div className="container">
                        <Featured />
                        <div className="story-grid">
                            {stories.map(story => (
                                <div key={story.id} className="card story-card wicket-border">
                                    <div className="story-meta">
                                        <span>By {story.author}</span>
                                        <span>{story.date}</span>
                                    </div>
                                    <h3 className="story-title">{story.title}</h3>
                                    <p className="story-excerpt">{story.excerpt}</p>
                                    <div className="vote-widget">
                                        <div className="vote-count">
                                            <span>⭐</span>
                                            <span>{story.votes} votes</span>
                                        </div>
                                        <button className="btn-vote" onClick={() => voteForStory(story.id)}>Vote for This Tale</button>
                                    </div>
                                    <div className="boost-section">
                                        {story.boosted && <span className="boosted-badge">🚀 Boosted</span>}
                                        <button className="boost-btn" onClick={() => boostStory(story.id)}>Boost This Tale - $2</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sponsor-section">
                            <Sponsor matchId="current-match" />
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'submit' && (
                <section className="section active">
                    <div className="form-section">
                        <div className="container">
                            <div className="form-container">
                                <div className="card">
                                    <h2>Share Your Cricket Tale</h2>
                                    <form onSubmit={handleStorySubmit}>
                                        <div className="form-group">
                                            <label htmlFor="author-name">Your Name</label>
                                            <input type="text" id="author-name" className="form-control" required placeholder="Enter your name" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="author-email">Email Address</label>
                                            <input type="email" id="author-email" className="form-control" required placeholder="your.email@example.com" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="match-date">Match Date</label>
                                            <input type="date" id="match-date" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="story-text">Your Cricket Story</label>
                                            <textarea id="story-text" className="form-control" required placeholder="Share your unforgettable cricket moment, match experience, or player encounter..."></textarea>
                                        </div>

                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                            Submit Your Story
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'stories' && (
                <section className="section active">
                    <div className="container">
                        <h2>All Cricket Tales</h2>
                        <div className="story-grid">
                            {stories.map(story => (
                                <div key={story.id} className="card story-card wicket-border">
                                    <div className="story-meta">
                                        <span>By {story.author}</span>
                                        <span>{story.date}</span>
                                    </div>
                                    <h3 className="story-title">{story.title}</h3>
                                    <p className="story-excerpt">{story.excerpt}</p>
                                    <div className="vote-widget">
                                        <div className="vote-count">
                                            <span>⭐</span>
                                            <span>{story.votes} votes</span>
                                        </div>
                                        <button className="btn-vote" onClick={() => voteForStory(story.id)}>Vote for This Tale</button>
                                    </div>
                                    <div className="boost-section">
                                        {story.boosted && <span className="boosted-badge">🚀 Boosted</span>}
                                        <button className="boost-btn" onClick={() => boostStory(story.id)}>Boost This Tale - $2</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'monetization' && (
                <MonetizationModules />
            )}

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 CricketTales.com - Powered by Community Stories</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage; 