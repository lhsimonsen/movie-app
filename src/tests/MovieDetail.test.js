import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from '../components/MovieDetail';

const movie = {
    "title": "Foo",
    "opening_crawl": "foo foo foo",
    "director": "Foo Bar",
    "episode_id": 1,
    "release_date": "2001-01-01",
};

it('renders an empty state if no movie is selected', () => {
    const component = shallow(<MovieDetail movie={{}} />);
    const emptyState = component.find(".movie-detail-empty");

    expect(emptyState.text()).toEqual("No movie selected");
});
