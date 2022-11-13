import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <ul className='nav col-12'>
                <li className="nav-item">
                    <a href='#AboutMe' className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('AboutMe')}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href='#Porfolio' className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='#Contact' className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href='#Resume' className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}