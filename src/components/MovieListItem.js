import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({movie}) =>
    <li>
        <span className="movie-title">{movie.title}</span>
        <span className="movie-release-date">{movie.release_date}</span>
    </li>

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListItem;
