import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'react-emotion';
import {colors, borders, transitions} from '../utils/constants';
import MdSearch from 'react-icons/lib/md/search';

const Wrapper = styled.div`
    position: relative;
    flex-grow: 1;
    margin-right: 15px;
`;

const Input = styled.input`
    width: calc(100% - 16px);
    border: ${borders.primary};
    border-radius: ${borders.slight};
    padding: 8px;
    padding-left: 24px;
    outline: none;
    transition: ${transitions.basic};
    &:hover {
        border-color: ${colors.dark};
    }
    &:focus {
        border-color: ${colors.accent};
    }
`;

const iconStyle = css`
    position: absolute;
    top: 6px;
    left: 4px;
    font-size: 20px;
    color: ${colors.light};
`;

const SearchBar = props => {
    const {searchValue, setSearchValue} = props;

    return (
        <Wrapper>
            <Input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="Type to search..."
            />
            <MdSearch className={iconStyle} />
        </Wrapper>
    )
}

SearchBar.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
};

export default SearchBar;
