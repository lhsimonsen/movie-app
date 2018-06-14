import React, {Component} from 'react';
import SortByList from './SortByList';
import PropTypes from 'prop-types';
import SortByListItem from './SortByListItem';

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
            <div>
                <button onClick={() => this.toggleSortOptions()}>Sort by</button>
                {showSortByList && this.renderSortItems(setSortBy)}
            </div>
        )
    }
}

SortBy.propTypes = {
    setSortBy: PropTypes.func.isRequired
};

export default SortBy;
