import React from 'react';
import PropTypes from 'prop-types';

const R = require('ramda');

const renderMovie = movie =>
    <ul>
        <li className="movie-detail-title">{movie.title}</li>
        <li className="movie-detail-description">{movie.opening_crawl}</li>
        <li className="movie-detail-director">{movie.director}</li>
    </ul>

const renderEmptyState = () =>
    <span className="movie-detail-empty">No movie selected</span>

const MovieDetail = ({movie}) => 
    R.isNil(movie)
        ? renderEmptyState()
        : renderMovie(movie)

MovieDetail.propTypes = {
  movie: PropTypes.object
};

export default MovieDetail;
