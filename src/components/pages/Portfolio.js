import React from 'react';
import DailyDelight from '../../images/1373f3c5c6a846f969e959f0b50fbeab.png';
import fillerProjectImage from '../../images/project-planning-header@2x.png';
import GitHub from '../../images/GitHub-Mark-Light-64px.png';

export default function Portfolio() {
    return (
        <div className="mid-div">
            <h1 className="text-white">Portfolio</h1>
            <ul className="projects-list">
                {/* <!-- first li is wanted style of project --> */}
                <li className="project-item">
                    <div className="card bg-dark text-white">
                        <img className="card-img project-img" src={DailyDelight} alt="Card image"></img>
                        <div className="card-img-overlay">
                            <div className="card-top">
                                <a target="_blank" href="https://natedogg97.github.io/DailyDelight/"><h5 className="card-title">Daily Delight</h5></a>
                                <a target="_blank" href="https://github.com/NateDogg97/DailyDelight"><img className="card-github-logo" src={GitHub}></img></a>
                            </div>
                            <p className="card-text">MERN Stack</p>
                        </div>
                    </div>
                </li>
                <li className="project-item">
                    <img className="project-img" src={fillerProjectImage}></img>
                </li>
                <li className="project-item">
                    <div className="card bg-dark text-white">
                        <img className="card-img project-img" src={fillerProjectImage} alt="Card image"></img>
                        <div className="card-img-overlay">
                            <div className="card-top">
                                <h5 className="card-title">Daily Delight</h5>
                                <img className="card-github-logo" src={GitHub}></img>
                            </div>
                            <p className="card-text">MERN Stack</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}