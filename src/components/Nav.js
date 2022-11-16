import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <h1 style={{position: 'absolute', top: '20px', left: '20px',zIndex: '3', color: '#FD841F', fontSize:'45px'}}>Juan Gonzales</h1>
            <ul className='nav col-12'>
                <li className="nav-item">
                    <a href='#AboutMe' className={currentPage === 'AboutMe' ? 'nav-link custom-active' : 'nav-link'} onClick={() => handlePageChange('AboutMe')}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href='#Porfolio' className={currentPage === 'Portfolio' ? 'nav-link custom-active' : 'nav-link'} onClick={() => handlePageChange('Portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='#Contact' className={currentPage === 'Contact' ? 'nav-link custom-active' : 'nav-link'} onClick={() => handlePageChange('Contact')}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href='#Resume' className={currentPage === 'Resume' ? 'nav-link custom-active' : 'nav-link'} onClick={() => handlePageChange('Resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}