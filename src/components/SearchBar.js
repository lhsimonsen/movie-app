import React from 'react';
import {trimVal} from '../utils';
// import PropTypes from 'prop-types';

const R = require('ramda');

const SearchBar = props => {
    const {searchValue, setSearchValue} = props;

    return (
        <input
            value={searchValue}
            onChange={e => R.compose(setSearchValue, trimVal)(e.target.value)}
        />
    )
}

/* SortBy.propTypes = {
    setSortBy: PropTypes.func.isRequired
}; */

export default SearchBar;
