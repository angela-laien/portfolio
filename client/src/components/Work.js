import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const freeStyleKitchen = require('../img/FreeStyleKitchen.png');
const gameOfLife = require('../img/GameOfLife.png');

export default () => (
    <Carousel showThumbs={false} showStatus={true}>
        <div>
            <img src={freeStyleKitchen} alt='freeStyleKitchen'/>
            <p className='project'>
                <a href='https://www.freestylekitchen.club/'>
                    Freestyle Kitchen
                </a>
                : A cookbook project featuring creative recipes. 
                <br/>Utilized: Node, React, SQL, AWS Amplify, HTML5, CSS3
                <br/>
                <a href='https://github.com/angela-laien/CookWithLove-fe'>
                    Front End Repo
                </a>
                <br/>
                <a href='https://github.com/angela-laien/InstaCook'>
                    Back End Repo
                </a>
            </p>
        </div>
        <div>
            <img src={gameOfLife} alt='gameofLife'/>
            <p className='project'>
                <a href='https://game-of-life-sable.vercel.app/'>
                    Game of life
                </a>
                : A vintage cellular automation zero player game from the 70s. 
                <br/>Utilized: React, HTML5, CSS3
                <br/>
                <a href='https://github.com/angela-laien/Game_of_Life'>
                    GitHub Repo
                </a>
            </p>
        </div>
    </Carousel>
)