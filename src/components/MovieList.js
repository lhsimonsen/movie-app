import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';
import {map} from '../utils/functional';

const MovieList = (props) => {
  const {movies, onClick} = props;

  return (
    <ul>
      {map(m =>
        <MovieListItem
          key={m.title}
          movie={m}
          onClick={onClick}
        />
      )(movies)}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieList;
