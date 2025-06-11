import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/main.css';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="app">
            <header className="header">
                <nav className="nav container">
                    <Link to="/" className="logo">CricketTales</Link>
                    <ul className="nav-links">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/submit" className={location.pathname === '/submit' ? 'active' : ''}>Submit Story</Link></li>
                        <li><Link to="/stories" className={location.pathname === '/stories' ? 'active' : ''}>Stories</Link></li>
                        <li><Link to="/monetization" className={location.pathname === '/monetization' ? 'active' : ''}>Monetization</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 CricketTales.com - Powered by Community Stories</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout; 