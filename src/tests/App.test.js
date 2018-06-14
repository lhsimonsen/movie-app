import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
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
