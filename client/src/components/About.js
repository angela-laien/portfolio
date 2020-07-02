import React from 'react';

const yoga = require('../img/exercises.png');
const cooking = require('../img/kitchen.png');
const photography = require('../img/photo.png');
const travel = require('../img/passport.png');
const dance = require('../img/fun.png');
const resume = require('../img/headhunting.png');

function About () {

    return (
        <div>
            <div className='newBackground'> </div>
            <div className='int'>
                <p className='summary'>A software engineering graduate who is seeking to find the opportunity to work in a fun and challenging working environment that will encourage her to improve and learn new and neccessary skills as well as be motivated by the company to do her best for the sake of helping herself and the company advancement in the software engineering industry.</p>
                <div className='cv'>
                    <h2 className='cv-title'>CV</h2>
                    <a
                        href='https://drive.google.com/file/d/1c1B8Rovu9bt1aldkvORV944dsH3eThW2/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='resume' src={resume} alt='resume logo'/>
                    </a>
                </div>
                <h3 className='interest'>Interest</h3>
                <div className='section'>
                    <img className='icons' src={photography} alt='camera logo'/>
                    <img className='icons' src={yoga} alt='yoggi logo'/>
                    <img className='icons' src={travel} alt='passport logo'/>
                    <img className='icons' src={dance} alt='dance logo'/>
                    <img className='icons' src={cooking} alt='kitchen logo'/>
                </div>
            </div>
        </div>
    )
}

export default About;
