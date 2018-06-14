import React from 'react';
import { shallow } from 'enzyme';
import SortByList from '../components/SortByList';
import SortByListItem from '../components/SortByListItem';

const getComponent = props =>
    shallow(
        <SortByList {...props}>
            <SortByListItem label="Foo" value="foo"/>
            <SortByListItem label="Bar" value="bar"/>
        </SortByList>
    );

it('has two sort by list items', () => {
    const component = getComponent({});
    expect(component.find("SortByListItem").length).toEqual(2);
});

it('runs setSort when clicking list item', () => {
    const setSort = jest.fn();
    const component = getComponent({onClick: setSort});

    const listItem = component.find("SortByListItem").at(0);
    listItem.simulate("click");

    expect(setSort.mock.calls.length).toBe(1);
});
