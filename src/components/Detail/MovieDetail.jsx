import React from "react";
import "./MovieDetail.css";

export const MovieDetail = () => {
  return (
    <div className="movie-detail">
      <div className="movie-img">
        <img src='https://source.unsplash.com/random' alt="Movie"/>
      </div>
      <div className="movie-data">
        <div className="movie-data-main">
          <h2 className="movie-name">interstellar</h2>
          <h6 className="movie-tagline">tagline</h6>
          <p className="movie-synopsis">
            If you have ever worked with React, then you know the importance of
            state management. The state is managed within the component and
            decides the component’s behavior. But as the application grows, the
            state is required to be shared among the different components.
          </p>
        </div>
        <div className="movie-data-meta">
          <div className="movie-meta-data">
            <p className="movie-category">Adevnture, Drama, Ficture</p>
            <p className="movie-producers">Legendary Pictures</p>
          </div>

          <div className="movie-meta">
            <h4 className="movie-meta-key">Original Release:</h4>
            <p className="movie-meta-value">2014-11-05</p>
          </div>
        </div>
      </div>
    </div>
  );
};
