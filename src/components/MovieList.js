import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';

const R = require('ramda');

const List = styled.ul`
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

  return <List>{R.map(getItem(onClick), movies)}</List>
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieList;
