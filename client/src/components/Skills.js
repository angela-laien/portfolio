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
                <img className='logo' src={html5} alt='html5 icon'/>
                <img className='logo' src={css3} alt='css3 icon'/>
                <img className='logo' src={python} alt='python icon'/>
                <img className='logo' src={javascript} alt='js icon'/>
            </div>
            <div className='skill-sec'>
                <img className='logo' src={reactjs} alt='react.js icon'/>
                <img className='logo' src={sql} alt='sql icon'/>
                <img className='logo' src={nodejs} alt='node.js icon'/>
                <img className='logo' src={ux} alt='ux icon'/>
            </div>
        </div>
    )
}

export default Skills;