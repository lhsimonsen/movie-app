import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/SearchBar';

const getComponent = props =>
    shallow(<SearchBar searchValue="" onChange={() => {}} {...props} />);

it('runs setSearchValue when typing in input field', () => {
    const setSearchValue = jest.fn();
    const component = getComponent({setSearchValue});
    
    component.children(0).at(0).simulate('change', { target: { value: 'f' } })
    expect(setSearchValue.mock.calls.length).toBe(1);
});
