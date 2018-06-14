import React from 'react';
import { shallow } from 'enzyme';
import SortBy from '../components/SortBy';

const getComponent = props =>
    shallow(<SortBy setSortBy={() => {}} {...props} />);

it('has a button with text', () => {
    const component = getComponent({});
    const btn = component.find("button");
    expect(btn.length).toEqual(1);
    expect(btn.text()).toEqual("Sort by");
});

it('toggles SortByList when clicking button', () => {
    const component = getComponent({});
    const btn = component.find("button");

    expect(component.find("SortByList").length).toEqual(0);
    btn.simulate("click");
    expect(component.find("SortByList").length).toEqual(1);
});
