import React from 'react';
import { shallow } from 'enzyme';
import SortByListItem from '../components/SortByListItem';

const getComponent = props =>
    shallow(<SortByListItem {...props} />);

it('has a label', () => {
    const component = getComponent({label: "Episode", value: "episode_id"});
    expect(component.children(0).text()).toEqual("Episode");
});
