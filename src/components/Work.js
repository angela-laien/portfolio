import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const freeStyleKitchen = require('../img/FreeStyleKitchen.png');
const gameOfLife = require('../img/GameOfLife.png');
const figma1st = require('../img/figma1st.png');

export default () => (
    <Carousel showThumbs={false} showStatus={true}>
        <div>
            <img src={figma1st} alt='figma1st'/>
            <p className='project'>
                <a href='https://www.figma.com/file/5XQyUfibeWZSfQJpUPC0N3/1st-Project'>
                    UI Wizard
                </a>
                : Affordable UX design services for business. 
                <br/>Utilized: Figma
                <br/>
                <a href='https://www.figma.com/file/5XQyUfibeWZSfQJpUPC0N3/1st-Project?node-id=0%3A1'>
                    Figma File
                </a>
            </p>
        </div>
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