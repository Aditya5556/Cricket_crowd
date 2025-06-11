
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Featured = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('/api/featured-stories')
      .then(res => res.json())
      .then(data => setStories(data.slice(0, 5)))
      .catch(err => console.error('Error fetching stories:', err));
  }, []);

  return (
    <div className="carousel-wrapper">
      <h2>🏏 Featured Stories</h2>
      <Swiper spaceBetween={20} slidesPerView={1}>
        {stories.map(story => (
          <SwiperSlide key={story.id}>
            <div className="story-card">
              <h3>{story.title}</h3>
              <p>{story.snippet}</p>
              <span>By {story.author}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
