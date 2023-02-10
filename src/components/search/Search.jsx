import React from "react";
import "./Search.css";
import { searchMovies } from "../../service/movies.service";

export const Search = ({ fetchMovieDetailById }) => {
  const [keyword, setKeyWord] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value.trim().length >= 3) {
      findMovies(value.trim());
    }
    setKeyWord(value);
  };

  const findMovies = async (value) => {
    try {
      const data = await searchMovies(value.trim());
      setMovies(data.results);
    } catch (error) {
      console.errorr(`searchMovie::Error`, error);
    }
  };

  const selectAMovie = (movieId) => {
    fetchMovieDetailById(movieId)
    setKeyWord('');
    setMovies([]);
  }

  return (
    <div className="search-field">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Movie Title..."
        value={keyword}
        onChange={handleOnChange}
      />
      {movies.length ? (
        <ul className="search-suggestion">
          {movies.map((movie) => (
            <li key={movie.id} onClick={() => selectAMovie(movie.id)}>{movie.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
