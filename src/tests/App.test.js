import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('App snapshot test', async () => {
  const wrapper = shallow(<App />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});

it('renders a movie list', () => {
  const component = shallow(<App />);
  expect(component.find("MovieList").length).toEqual(1);
});

it('renders a movie detail', () => {
  const component = shallow(<App />);
  expect(component.find("MovieDetail").length).toEqual(1);
});

it('renders a sort by button', () => {
  const component = shallow(<App />);
  expect(component.find("SortBy").length).toEqual(1);
});

it('renders a search bar', () => {
  const component = shallow(<App />);
  expect(component.find("SearchBar").length).toEqual(1);
});
