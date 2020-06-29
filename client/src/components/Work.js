import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const freeStyleKitchen = require('../img/FreeStyleKitchen.png');

export default () => (
    <Carousel showThumbs={false} showStatus={true}>
        <div className='project'>
            <img src={freeStyleKitchen} alt='freeStyleKitchen' />
            <p className='kitchen'
                style={{ 
                color: 'white', 
                fontWeight: 'bold' 
                }}
                >
                <a 
                    style={{ 
                    color: 'white', 
                    fontWeight: 'bold' }}
                    href='https://www.freestylekitchen.club/' >
                    Freestyle Kitchen
                </a>
                : A personal cookbook project featuring my weekend recipes. Utilized: Node, React, SQL, AWS Amplify, HTML5, CSS3
            </p>
        </div>
    </Carousel>
)