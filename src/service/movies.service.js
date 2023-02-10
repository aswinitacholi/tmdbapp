import axios from './request.service';

const API_KEY = 'c4eb739e20ffc057886bd2aaca4205ab';

export const searchMovies = async (query) => {
    try {
        const res = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getMovieDetailById = async (movieID) => {
    try {
        const res = await axios.get(`movie/${movieID}?api_key=${API_KEY}&language=en-us`);
        return res.data;
    } catch (error) {
        throw error;
    }
}