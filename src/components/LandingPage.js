import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/main.css';
import MonetizationModules from './MonetizationModules';
import Featured from './Featured';
import Sponsor from './Sponsor';

const LandingPage = () => {
    const [stories, setStories] = useState([]);
    const location = useLocation();

    useEffect(() => {
        loadAllStories();
    }, []);

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
        if (location.pathname === '/stories') {
            loadMoreStories();
        } else if (location.pathname === '/') {
            loadAllStories();
        }
    }, [location.pathname]);

    return (
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
    );
};

export default LandingPage; 