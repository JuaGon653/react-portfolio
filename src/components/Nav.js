import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        // <ul className='nav'>
        //     <li>
        //         <a href='#AboutMe' onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
        //             About Me
        //         </a>
        //     </li>
        //     <li>
        //         <a href='#Porfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
        //             Portfolio
        //         </a>
        //     </li>
        //     <li>
        //         <a href='#Contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
        //             Contact
        //         </a>
        //     </li>
        //     <li>
        //         <a href='#Resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        //             Resume
        //         </a>
        //     </li>
        // </ul>
        <div>
            <ul className='nav col-12'>
                <li className="nav-item">
                    <a href='#AboutMe' className='nav-link'>
                        About Me
                    </a>
                </li>
                <li>
                    <a href='#Porfolio' className='nav-link'>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='#Contact' className='nav-link'>
                        Contact
                    </a>
                </li>
                <li>
                    <a href='#Resume' className='nav-link'>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}