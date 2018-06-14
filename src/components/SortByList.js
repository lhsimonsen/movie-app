import React from 'react';
import SortByListItem from './SortByListItem';

const renderChildren = props => {
  return React.Children.map(props.children, child => {
    if (child.type === SortByListItem)
      return React.cloneElement(child, {
        onClick: props.onClick
      })
    else
      return child
  })
}

const SortByList = (props) => {
  return (
    <ul>{renderChildren(props)}</ul>
  );
};

export default SortByList;
