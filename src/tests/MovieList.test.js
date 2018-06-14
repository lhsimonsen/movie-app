import React from 'react';
import { shallow } from 'enzyme';
import MovieList from '../components/MovieList';
import {movies} from './testData';

const getComponent = props =>
    shallow(<MovieList movies={movies} onClick={() => {}} {...props} />);

it('renders a list of movies', () => {
    const component = getComponent({});
    expect(component.find("MovieListItem").length).toEqual(3);
});

it('runs selectMovie when clicking a movie list item', () => {
    const onSelectMovie = jest.fn();
    const component = getComponent({onClick: onSelectMovie});
    const movieListItem = component.find("MovieListItem").at(0);

    movieListItem.simulate("click");

    expect(onSelectMovie.mock.calls.length).toBe(1);
});
