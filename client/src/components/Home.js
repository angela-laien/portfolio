import React from 'react';
import Menu from './Menu';

const profilePicture = require('../img/ProfilePic.png');

function Home() {
    
    return (
        <div className='profile'>
            <div className='front'>
                <div className='profile-con'>
                    <img className='profile-pic' src={profilePicture} alt='profile picture'/>
                    <div className='intro'>
                        <h2>Lai En Xie (Angela)</h2>
                        <p>Full stack web developer based in San Francisco</p>

                        <div className='background'> </div>

                        <div
                            className='swap-btn'
                            onClick={() => {
                                document
                                    .querySelector('.profile')
                                    .classList.toggle('flip');
                                document.querySelector('.App').classList.toggle('newBackground')
                            }}
                        >
                            Menu
                        </div>
                    </div>
                </div>
            </div>

            <div className='back'>
                <div className='back-content'>
                    <h1>Menu</h1>
                    <Menu />
                    <div className='return-btn-div'>
                        <div
                            className='return-btn'
                            onClick={() => {
                                document
                                    .querySelector('.profile')
                                    .classList.toggle('flip');
                                document.querySelector('.App').classList.toggle('newBackground');
                            }}
                        >
                            Home
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;