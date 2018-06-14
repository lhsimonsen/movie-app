import React, {Component} from 'react';
import SortByList from './SortByList';
import PropTypes from 'prop-types';

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

    render () {
        const {showSortByList} = this.state;
        return (
            <div>
                <button onClick={() => this.toggleSortOptions()}>Sort by</button>
                {showSortByList && <SortByList><li>hej</li><li>hadet</li></SortByList>}
            </div>
        )
    }
}

SortBy.propTypes = {};

export default SortBy;
