import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';
import {colors, borders, transitions} from '../utils/constants';

const searchBar = css`
    flex-grow: 1;
    border: ${borders.primary};
    border-radius: ${borders.slight};
    padding: 8px;
    outline: none;
    transition: ${transitions.basic};
    &:hover {
        border-color: ${colors.dark};
    }
    &:focus {
        border-color: ${colors.accent};
    }
`;

const SearchBar = props => {
    const {searchValue, setSearchValue} = props;

    return (
        <input
            className={searchBar}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Type to search..."
        />
    )
}

SearchBar.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
};

export default SearchBar;
