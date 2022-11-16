import React from 'react';

export default function Resume() {
    return (
        <div className="mid-div text-white">
            <h1>Resume</h1>
            <h3>View my <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1bB0ajJg6edsoTCJK9YJJT0DzFJLV7TyQpdACHwqo2NM/edit?usp=sharing" className="resume-link">resume</a></h3>
            <div className="pl-5 pt-2">
                <h2 className="font-weight-bold">Front-End Skills</h2>
                <ul className="pl-5 pt-2 font-italic">
                    <li>
                        <h3>HTML</h3>
                    </li>
                    <li>
                        <h3>CSS</h3>
                    </li>
                    <li>
                        <h3>JavaScript</h3>
                    </li>
                    <li>
                        <h3>React.js</h3>
                    </li>
                    <li>
                        <h3>jQuery</h3>
                    </li>
                    <li>
                        <h3>Bootstrap</h3>
                    </li>
                </ul>
            </div>
            <div className="pl-5 pt-2">
                <h2 className="font-weight-bold">Back-End Skills</h2>
                <ul className="pl-5 pt-2 font-italic">
                    <li>
                        <h3>Node.js</h3>
                    </li>
                    <li>
                        <h3>Express.js</h3>
                    </li>
                    <li>
                        <h3>RESTful APIs</h3>
                    </li>
                    <li>
                        <h3>MySQL & Sequelize</h3>
                    </li>
                    <li>
                        <h3>MongoDB & Mongoose</h3>
                    </li>
                    <li>
                        <h3>GraphQL</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}