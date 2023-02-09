import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { MovieDetail } from '../Detail/MovieDetail';
import {BackgroundImage} from '../backgroundimage/BackgroundImage';

export const Home = () => {
    const content = (<div className='boxed'><Navbar/><MovieDetail/></div>)
    return (
        <div>
            <BackgroundImage bgImage={'https://source.unsplash.com/random'} content={content}/>
        </div>
    )
}