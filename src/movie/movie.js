import React from 'react';
import './movie.css';

export const Movie = props => (
  <div className="movie">
    <img
        src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        alt={`Movie poster for ${props.movie.title}`} />
    <span className="pt-text-muted">{props.movie.title}</span>
  </div>
);

export default Movie;
