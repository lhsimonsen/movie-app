import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';
import {map} from '../utils/functional';

const MovieList = ({movies}) =>
  <ul>{map(m => <MovieListItem key={m.title} movie={m}/>)(movies)}</ul>

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
