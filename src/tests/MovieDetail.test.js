import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from '../components/MovieDetail';
import {movie} from './testData';

const getComponent = props =>
    shallow(<MovieDetail movie={null} {...props} />);

it('renders an empty state if no movie is selected', () => {
    const component = getComponent();
    const emptyState = component.find(".movie-detail-empty");

    expect(emptyState.text()).toEqual("No movie selected");
});

it('renders movie info if a movie is selected', () => {
    const component = getComponent({movie});

    expect(component.find(".movie-detail-title").length).toEqual(1);
    expect(component.find(".movie-detail-description").length).toEqual(1);
    expect(component.find(".movie-detail-director").length).toEqual(1);
});
