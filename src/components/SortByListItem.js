import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {colors, borders, transitions} from '../utils/constants';

const Item = styled.li`
    cursor: pointer;
    padding: 10px;
    border-bottom: ${borders.primary};
    transition: ${transitions.basic};
    &:hover {
        background-color: ${colors.primary}
    }
`;

const SortByListItem = (props) => {
    const {label, value, onClick} = props;
    
    return (
        <Item onClick={() => onClick(value)}>
            {label}
        </Item>
    );
}

SortByListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SortByListItem;
