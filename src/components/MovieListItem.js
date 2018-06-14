import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = (props) => {
    const {movie, onClick} = props;

    return (
        <li onClick={() => onClick(movie.id)}>
            <span className="movie-title">{movie.title}</span>
            <span className="movie-release-date">{movie.release_date}</span>
        </li>
    )
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieListItem;
