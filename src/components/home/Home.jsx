import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { MovieDetail } from '../Detail/MovieDetail';
import {BackgroundImage} from '../backgroundimage/BackgroundImage';
import { getMovieDetailById } from '../../service/movies.service';

const IMAGE_BASE_PATH = 'https://images.tmdb.org/t/p/original'

export const Home = () => {
    const [movieDetail, setMovieDetail] = useState({});

    const fetchMovieDetailById = async (movieId) => {
        try {
            const data = await getMovieDetailById(movieId);
            data.poster_path = `${IMAGE_BASE_PATH}${data.poster_path}`;
            setMovieDetail(data);
        } catch(error) {
            console.error(`Home::fetchMovieDetailById::Error`,error);
        }
    }
    const content = (<div className='boxed'><Navbar fetchMovieDetailById={fetchMovieDetailById}/><MovieDetail movie={movieDetail}/></div>)
    return (
        <div>
            <BackgroundImage bgImage={movieDetail.backdrop_path ? `${IMAGE_BASE_PATH}${movieDetail.backdrop_path}` : null} content={content}/>
        </div>
    )
}