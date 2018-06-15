import React from 'react';
import {css} from 'react-emotion';
import SortByListItem from './SortByListItem';

const sortByList = css`
  position: absolute;
  top: 20px;
  left: 0;

  padding: 10px;
  background: #fafafa;
  border: 1px solid #aaa;
`;

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
    <ul className={sortByList}>{renderChildren(props)}</ul>
  );
};

export default SortByList;
