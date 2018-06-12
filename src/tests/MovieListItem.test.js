import React from 'react';
import { shallow } from 'enzyme';
import MovieListItem from '../components/MovieListItem';

const movie = {
    "title": "Foo",
    "opening_crawl": "foo foo foo",
    "director": "Foo Bar",
    "episode_id": 1,
    "release_date": "2001-01-01",
};

const getComponent = props =>
    shallow(<MovieListItem movie={movie} onClick={() => {}} {...props} />);

it('renders a title', () => {
    const component = getComponent();
    const title = component.find(".movie-title");

    expect(title.length).toEqual(1);
    expect(title.text()).toEqual("Foo")
});

it('renders a release date', () => {
    const component = getComponent();
    const crawl = component.find(".movie-release-date");
    
    expect(crawl.length).toEqual(1);
    expect(crawl.text()).toEqual("2001-01-01")
});
