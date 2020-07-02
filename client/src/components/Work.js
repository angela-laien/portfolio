import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const freeStyleKitchen = require('../img/FreeStyleKitchen.png');

export default () => (
    <Carousel showThumbs={false} showStatus={true}>
        <div className='project'>
            <p className='kitchen'
                style={{ 
                color: 'white', 
                fontWeight: 'bold' 
                }}
                >
                <a 
                    href='https://www.freestylekitchen.club/' 
                >
                    <img src={freeStyleKitchen} alt='freeStyleKitchen' />
                </a>
                <br />
                <a 
                    style={{ 
                    color: 'white' }}
                    href='https://github.com/angela-laien/CookWithLove-fe' 
                >
                    Freestyle Kitchen Frontend
                </a>
                <br />
                <a 
                    style={{ 
                    color: 'white' }}
                    href='https://github.com/angela-laien/InstaCook' 
                >
                    Freestyle Kitchen Backend
                </a>
                <br />
                A personal cookbook project featuring my weekend recipes. Utilized: Node, React, SQL, AWS Amplify, HTML5, CSS3
            </p>
        </div>
    </Carousel>
)