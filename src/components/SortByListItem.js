import React from 'react';
import PropTypes from 'prop-types';

const SortByListItem = (props) => {
    const {label, value, onClick} = props;
    
    return (
        <li
            onClick={() => onClick(value)}
            data-value={value}
        >
            {label}
        </li>
    );
}

SortByListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SortByListItem;
