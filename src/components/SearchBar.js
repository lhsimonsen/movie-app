import React, {Component} from 'react';
import {trimVal} from '../utils';
// import PropTypes from 'prop-types';

const R = require('ramda');

class SearchBar extends Component {
    constructor() {
      super();

      this.state = {
          inputValue: ""
      }

      this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(value) {
        this.setState({inputValue: value});
    }

    render () {
        const {inputValue} = this.state;
        return (
            <input
                value={inputValue}
                onChange={e => R.compose(this.updateInputValue, trimVal)(e.target.value)}
            />
        )
    }
}

/* SortBy.propTypes = {
    setSortBy: PropTypes.func.isRequired
}; */

export default SearchBar;
