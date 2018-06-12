import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';

const R = require('ramda');

const getItem = onClick => m =>
  <MovieListItem
    key={m.title}
    movie={m}
    onClick={onClick}
  />

const MovieList = (props) => {
  const {movies, onClick} = props;

  return <ul>{R.map(getItem(onClick), movies)}</ul>
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieList;
