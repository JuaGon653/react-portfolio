import React from 'react';
import DailyDelight from '../../images/dailyDelight.png';
import GitHub from '../../images/GitHub-Mark-Light-64px.png';
import RoadPlanner from '../../images/road.jpg'

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
                    <div className="card bg-dark text-white">
                        <img className="card-img project-img" src={RoadPlanner} alt="Card image"></img>
                        <div className="card-img-overlay">
                            <div className="card-top">
                                <a target="_blank" href="https://roadtrip-planner-project.herokuapp.com/"><h5 className="card-title">Trip Planner</h5></a>
                                <a target="_blank" href="https://github.com/patctan/Project-2"><img className="card-github-logo" src={GitHub}></img></a>
                            </div>
                            <p className="card-text">MERN Stack</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}