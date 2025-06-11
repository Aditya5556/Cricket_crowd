import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        loadStories();
    }, []);

    const loadStories = () => {
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
            },
            {
                id: 'story-3',
                author: 'Amit Patel',
                date: '2024-05-10',
                title: 'The Catch That Changed Everything',
                excerpt: 'It was a routine match until that incredible boundary catch in the 18th over...',
                votes: 156,
                boosted: false
            }
        ];
        setStories(demoStories);
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

    return (
        <div className="stories-page">
            <div className="container">
                <h1>All Cricket Tales</h1>
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
                                <button
                                    className="btn-vote"
                                    onClick={() => voteForStory(story.id)}
                                >
                                    Vote for This Tale
                                </button>
                            </div>
                            {story.boosted && (
                                <div className="boost-section">
                                    <span className="boosted-badge">🚀 Boosted</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stories; 