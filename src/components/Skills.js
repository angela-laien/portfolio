import React from 'react';

const css3 = require('../img/css.png');
const html5 = require('../img/html5.png');
const javascript = require('../img/javascript.png');
const nodejs = require('../img/nodejs.png');
const python = require('../img/python-file.png');
const reactjs = require('../img/react.png');
const sql = require('../img/sql.png');
const ux = require('../img/ux.png');

function Skills() {

    return(
        <div className='skills'>
            <div className='newBackground'> </div>
            <div className='skill-sec'>
                <div>
                    <img className='logo' src={html5} alt='html5 icon'/>
                    <h6 className='sub'>HTML</h6>
                </div>
                <div>
                    <img className='logo' src={css3} alt='css3 icon'/>
                    <h6 className='sub'>CSS</h6>
                </div>
                <div>
                    <img className='logo' src={python} alt='python icon'/>
                    <h6 className='sub'>Python</h6>
                </div>
                <div>
                    <img className='logo' src={javascript} alt='js icon'/>
                    <h6 className='sub'>JavaScript</h6>
                </div>
            </div>
            <div className='skill-sec'>
                <div>
                    <img className='logo' src={reactjs} alt='react.js icon'/>
                    <h6 className='sub'>React.js</h6>
                </div>
                <div>
                    <img className='logo' src={sql} alt='sql icon'/>
                    <h6 className='sub'>SQL</h6>
                </div>
                <div>
                    <img className='logo' src={nodejs} alt='node.js icon'/>
                    <h6 className='sub'>Node.js</h6>
                </div>
                <div>
                    <img className='logo' src={ux} alt='ux icon'/>
                    <h6 className='sub'>UX/UI</h6>
                </div>
            </div>
        </div>
    )
}

export default Skills;