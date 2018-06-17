import React from 'react';
import styled from 'react-emotion';
import {colors} from '../utils/constants'
import PropTypes from 'prop-types';

const R = require('ramda');

const Title = styled.li`
    font-size: 18px;
    margin-bottom: 15px;
`;

const Text = styled.li`
    font-size: 11px;
    line-height: 1.5;
    color: ${colors.text};

    .description {
        margin-bottom: 15px;
    }
`;

const Empty = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 11px;
    color: ${colors.light}
`;

const renderMovie = movie =>
    <ul>
        <Title className="movie-detail-title">{movie.title}</Title>
        <Text className="movie-detail-description description">{movie.opening_crawl}</Text>
        <Text className="movie-detail-director">Directed by: {movie.director}</Text>
    </ul>

const renderEmptyState = () =>
    <Empty className="movie-detail-empty">No movie selected</Empty>

const MovieDetail = ({movie}) => 
    R.isNil(movie)
        ? renderEmptyState()
        : renderMovie(movie)

MovieDetail.propTypes = {
  movie: PropTypes.object
};

export default MovieDetail;
