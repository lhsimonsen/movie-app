import React from 'react';
import {css} from 'react-emotion';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';

const R = require('ramda');

const movieList = css`
  width: 100%;
`;

const getItem = onClick => m => {
  return (
    <MovieListItem
      key={m.title}
      movie={m}
      onClick={onClick}
    />
  );
}

const MovieList = (props) => {
  const {movies, onClick} = props;

  return <ul className={movieList}>{R.map(getItem(onClick), movies)}</ul>
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieList;
