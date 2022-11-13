import React from 'react';
import DailyDelight from '../../images/1373f3c5c6a846f969e959f0b50fbeab.png';
import fillerProjectImage from '../../images/project-planning-header@2x.png';
import GitHub from '../../images/GitHub-Mark-Light-64px.png';

export default function Portfolio() {
    return (
        <div class="mid-div">
            <h1 class="text-white">Portfolio</h1>
            <ul class="projects-list">
                {/* <!-- first li is wanted style of project --> */}
                <li class="project-item">
                    <div class="card bg-dark text-white">
                        <img class="card-img project-img" src={DailyDelight} alt="Card image"></img>
                        <div class="card-img-overlay">
                            <div class="card-top">
                                <a target="_blank" href="https://natedogg97.github.io/DailyDelight/"><h5 class="card-title">Daily Delight</h5></a>
                                <a target="_blank" href="https://github.com/NateDogg97/DailyDelight"><img class="card-github-logo" src={GitHub}></img></a>
                            </div>
                            <p class="card-text">MERN Stack</p>
                        </div>
                    </div>
                </li>
                <li class="project-item">
                    <img class="project-img" src={fillerProjectImage}></img>
                </li>
                <li class="project-item">
                    <div class="card bg-dark text-white">
                        <img class="card-img project-img" src={fillerProjectImage} alt="Card image"></img>
                        <div class="card-img-overlay">
                            <div class="card-top">
                                <h5 class="card-title">Daily Delight</h5>
                                <img class="card-github-logo" src={GitHub}></img>
                            </div>
                            <p class="card-text">MERN Stack</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}