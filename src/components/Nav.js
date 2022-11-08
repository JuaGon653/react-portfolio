import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <ul>
            <li>
                <a href='#' onClick={handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li>
                <a href='#' onClick={handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
            <li>
                <a href='#' onClick={handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li>
                <a href='#' onClick={handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
        </ul>
    )
}