import React from 'react';
import styled from 'react-emotion';
import {colors, borders, transitions, breakpoints} from '../utils/constants';
import PropTypes from 'prop-types';

const ListItem = styled.li`
    display: block;
    padding: 10px;
    border-bottom: ${borders.primary};
    cursor: pointer;
    font-size: 11px;
    transition: ${transitions.basic};
    &:hover {
        background: ${colors.primary};
    }
    @media (min-width: ${breakpoints.mobile}px) {
        display: flex;
    }
`;

const Text = styled.span`
    background: transparent;
    display: block;
    text-align: center;
    margin-bottom: 5px;
    @media (min-width: ${breakpoints.mobile}px) {
        display: inline-block;
        margin-bottom: 0;
    }
    .small {
        font-size: 9px;
        line-height: 11px;
        margin-right: 10px;
        color: ${colors.light}
    }
    .date {
        text-align: center;
        color: ${colors.light};
        @media (min-width: ${breakpoints.mobile}px) {
            flex: 1;
            text-align: right;
        }
    }
`;

const Wrapper = styled.span`
    background: transparent;
    @media (min-width: ${breakpoints.mobile}px) {
        flex: 4;
    }
`;

const MovieListItem = (props) => {
    const {movie, onClick} = props;
    
    return (
        <ListItem onClick={() => onClick(movie.id)}>
            <Wrapper>
                <Text className="movie-episode small">EPISODE {movie.episode_id}</Text>
                <Text className="movie-title">{movie.title}</Text>
            </Wrapper>
            <Text className="movie-release-date date">{movie.release_date}</Text>
        </ListItem>
    )
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieListItem;
