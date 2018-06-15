import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';

const R = require('ramda');

const searchBar = css`
    flex-grow: 1;
`;

const SearchBar = props => {
    const {searchValue, setSearchValue} = props;

    return (
        <input
            className={searchBar}
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
