import React from 'react';
import GitHub from '../images/GitHub-Mark-Light-64px.png';
import LinkedIn from '../images/LI-In-Bug.png';

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <a className="foot-link" target="_blank" href="https://github.com/JuaGon653">
                    <img className="footer-img" src={GitHub}></img>
                </a>
                <a className="foot-link" target="_blank" href="https://www.linkedin.com/in/juan-gonzales-413b47240
                ">
                    <img className="footer-img" src={LinkedIn}></img>
                </a>
            </div>
        </div>
    )
}