import React from 'react';

const facebook = require('../img/facebook.png');
const instagram = require('../img/instagram-sketched.png');
const linkedin = require('../img/linkedin.png');
const github = require('../img/github-image.png');
const tiktok = require('../img/tiktok.png');
const twitter = require('../img/twitter.png');

function Contact() {
    
    return (
        <div className='contact'>
            <h4>Email: laienxie@gmail.com</h4>
            <h4>Phone: 415-533-3902</h4>
            <div className='png'>
                <div className='newBackground'> </div>
                <div className='sec'>
                    <a
                        href='https://github.com/angela-laien'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icon' src={github} alt='github logo'/>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/laien-angela-xie-800188/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icon' src={linkedin} alt='linkedin logo'/>
                    </a>
                    <a
                        href='https://twitter.com/LaienXie'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icon' src={twitter} alt='twitter logo'/>
                    </a>
                </div>
                <div className='sec'>
                    <a
                        href='https://www.facebook.com/angela.xie2'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icon' src={facebook} alt='facebook logo'/>
                    </a>
                    <a
                        href='https://www.instagram.com/angela_laien/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icon' src={instagram} alt='instagram logo'/>
                    </a>
                    <a
                        href='https://www.tiktok.com/@angela_laien?lang=en'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icon' src={tiktok} alt='tiktok logo'/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Contact;