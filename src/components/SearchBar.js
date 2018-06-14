import React from 'react';
import {trimVal} from '../utils';
import PropTypes from 'prop-types';

const R = require('ramda');

const SearchBar = props => {
    const {searchValue, setSearchValue} = props;

    return (
        <input
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
        />
    )
}

SearchBar.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
};

export default SearchBar;
