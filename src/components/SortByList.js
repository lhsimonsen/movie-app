import React from 'react';
import styled, {css} from 'react-emotion';
import PropTypes from 'prop-types';
import SortByListItem from './SortByListItem';
import MdClose from 'react-icons/lib/md/close';
import {colors, borders, transitions} from '../utils/constants';

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 35px;
  left: 0;
  width: 300px;
  background: #fafafa;
  border: ${borders.primary};
  border-radius: ${borders.slight};
  font-size: 11px;
`;

const Dismiss = styled.div`
  padding: 5px;
  border-bottom: ${borders.primary};
  padding: 10px;
`;

const Header = styled.span`
  display: inline-block;
  font-weight: 600;
`;

const Icon = css`
  float: right;
  cursor: pointer;
  transition: ${transitions.basic};
  &:hover {
    color: ${colors.accent}
  }
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
  const {onCloseSort} = props;

  return (
    <Wrapper>
      <Dismiss>
          <Header>Sort by</Header>
          <MdClose
            className={Icon}
            onClick={() => onCloseSort()}
          />
      </Dismiss>
      <ul>{renderChildren(props)}</ul>
    </Wrapper>
  );
};

SortByList.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCloseSort: PropTypes.func.isRequired,
};

export default SortByList;
