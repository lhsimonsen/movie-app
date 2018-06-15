import React from 'react';
import { shallow } from 'enzyme';
import MovieListItem from '../components/MovieListItem';
import {movie} from './testData';

const getComponent = props =>
    shallow(<MovieListItem movie={movie} onClick={() => {}} {...props} />);


it('renders an episode', () => {
    const component = getComponent();
    const episode = component.find(".movie-episode");

    expect(episode.length).toEqual(1);
    expect(episode.children(0).at(0).text()).toEqual("EPISODE ");
    expect(episode.children(0).at(1).text()).toEqual("1");
});

it('renders a title', () => {
    const component = getComponent();
    const title = component.find(".movie-title");

    expect(title.length).toEqual(1);
    expect(title.children(0).text()).toEqual("Foo");
});

it('renders a release date', () => {
    const component = getComponent();
    const crawl = component.find(".movie-release-date");
    
    expect(crawl.length).toEqual(1);
    expect(crawl.children(0).text()).toEqual("2001-01-01");
});
