import React, {Component} from 'react';
import styled, {css} from 'react-emotion';
import SortByList from './SortByList';
import PropTypes from 'prop-types';
import SortByListItem from './SortByListItem';
import {colors, borders, transitions} from '../utils/constants';

const sortBy = css`
    position: relative;
    margin-right: 10px;
`;

const Button = styled.button`
    height: 31px;
    width: 70px;
    border: ${borders.primary};
    border-radius: ${borders.slight};
    cursor: pointer;
    color: ${colors.dark};
    outline: none;
    transition: ${transitions.basic};
    &:hover {
        background: ${colors.primary};
        border-color: ${colors.dark};
    }
    &:focus {
        border-color: ${colors.accent};
    }
`;

class SortBy extends Component {
    constructor() {
      super();
  
      this.state = {
        showSortByList: false
      }
  
      this.toggleSortOptions = this.toggleSortOptions.bind(this);
      this.hideSortByList = this.hideSortByList.bind(this);
    }

    toggleSortOptions() {
        const {showSortByList} = this.state;
        this.setState({showSortByList: !showSortByList});
    }

    hideSortByList() {
        this.setState({showSortByList: false})
    }

    renderSortItems(setSortBy) {
        return (
            <SortByList
                onClick={setSortBy}
                onCloseSort={() => this.hideSortByList()}
            >
                <SortByListItem label="Episode" value="episode_id" />
                <SortByListItem label="Year" value="release_date" />
            </SortByList>
        );
    }

    render () {
        const {showSortByList} = this.state;
        const {setSortBy} = this.props;

        return (
            <div className={sortBy}>
                <Button
                    className="sort-by-button"
                    onClick={() => this.toggleSortOptions()}
                >
                    Sort by...
                </Button>
                {showSortByList && this.renderSortItems(setSortBy)}
            </div>
        )
    }
}

SortBy.propTypes = {
    setSortBy: PropTypes.func.isRequired
};

export default SortBy;
