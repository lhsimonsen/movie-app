import React, {Component} from 'react';
import {css} from 'react-emotion';
import SortByList from './SortByList';
import PropTypes from 'prop-types';
import SortByListItem from './SortByListItem';

const sortBy = css`
    position: relative;
    margin-right: 10px;
`;

class SortBy extends Component {
    constructor() {
      super();
  
      this.state = {
        showSortByList: false
      }
  
      this.toggleSortOptions = this.toggleSortOptions.bind(this);
    }

    toggleSortOptions() {
        const {showSortByList} = this.state;
        this.setState({showSortByList: !showSortByList});
    }

    renderSortItems(setSortBy) {
        return (
            <SortByList onClick={setSortBy}>
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
                <button onClick={() => this.toggleSortOptions()}>Sort by...</button>
                {showSortByList && this.renderSortItems(setSortBy)}
            </div>
        )
    }
}

SortBy.propTypes = {
    setSortBy: PropTypes.func.isRequired
};

export default SortBy;
