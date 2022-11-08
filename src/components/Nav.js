import React from 'react';
import '../css/nav.css';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className='nav'>
            <li>
                <a href='#AboutMe' onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li>
                <a href='#Porfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
            <li>
                <a href='#Contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li>
                <a href='#Resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
        </ul>
    )
}