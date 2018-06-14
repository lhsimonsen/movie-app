import React from 'react';
import { shallow } from 'enzyme';
import SortByList from '../components/SortByList';

const getComponent = props =>
    shallow(<SortByList {...props} />);

it('has two sort by list items', () => {
    const component = getComponent({});
    expect(component.find("SortByListItem").length).toEqual(2);
});
