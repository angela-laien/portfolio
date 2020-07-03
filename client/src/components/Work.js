import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const freeStyleKitchen = require('../img/FreeStyleKitchen.png');

export default () => (
    <Carousel showThumbs={false} showStatus={true}>
        <div className='project'>
            <a 
                href='https://www.freestylekitchen.club/' 
            >
                <img className='image' 
                src={freeStyleKitchen} 
                alt='freeStyleKitchen' 
                style={{
                    padding: '0% 10% 0% 0%',
                    textAlign: 'center'
                }}
                />
            </a>
            <p className='kitchen'
                style={{ 
                color: 'white', 
                lineHeight: 2,
                padding: '0% 10% 0% 0%',
                textAlign: 'center'
                }}
                >
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
                A personal cookbook project featuring my weekend recipes. <br />Utilized: Node, React, SQL, AWS Amplify, HTML5, CSS3
            </p>
        </div>
    </Carousel>
)