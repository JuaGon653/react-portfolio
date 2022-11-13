import React from 'react';
import MyPhoto from '../../images/MS4A2976_Original.jpeg';

export default function AboutMe() {
    return (
        <div className='mid-div'>
            <div className="about-me">
                <div className="top-about">
                    <h1>About Me</h1>
                    <img className="my-photo" src={MyPhoto}></img>
                </div>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Et netus et malesuada fames ac turpis. Scelerisque eu ultrices vitae auctor eu augue. Porta lorem mollis aliquam ut. Nisi porta lorem mollis aliquam ut. Varius sit amet mattis vulputate. Senectus et netus et malesuada fames ac turpis egestas. Ultrices in iaculis nunc sed augue. Cursus risus at ultrices mi tempus. Aenean et tortor at risus viverra adipiscing. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Dictum varius duis at consectetur lorem donec massa. Eget nullam non nisi est sit amet facilisis. Tortor dignissim convallis aenean et tortor at risus viverra.
                </p>
            </div>
        </div>
    )
}