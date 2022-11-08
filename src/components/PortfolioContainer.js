import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = function() {
        switch (currentPage) {
            case 'AboutMe':
                return <AboutMe />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            default:
                return <Resume />;
        };
    };

    return (
        <div>
            <Nav />
        </div>
    )
}