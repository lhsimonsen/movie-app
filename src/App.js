import React, { Component } from 'react';
import styled from 'react-emotion'
import {flattenMovie, sortByProp, filterByValue} from './utils';
import {testData} from './utils/test-data'; // TODO: use real endpoint
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SortBy from './components/SortBy';
import SearchBar from './components/SearchBar';

const R = require('ramda');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Outer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  .dark {
    background: #f7f8fa;
    border: 1px solid #e5ebef;
    padding: 15px 10px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex: 1;

  .left {
    border-right: 1px solid #e5ebef;
  }

  .right {
    padding: 30px;
  }
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentMovie: null,
      sortBy: null,
      searchValue: ""
    }

    this.getSortedMovies = this.getSortedMovies.bind(this);
    this.getFilteredMovies = this.getFilteredMovies.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
  }

  getNormalizedData(data) {
    return R.map(flattenMovie, data);
  }

  getSelectedMovie(id, movies) {
    return R.find(R.propEq('id', id), movies);
  }

  getSortedMovies(movies) {
    const {sortBy} = this.state;
    return R.isNil(sortBy) ? movies : sortByProp(sortBy)(movies);
  }

  getFilteredMovies(movies) {
    const {searchValue} = this.state;
    return filterByValue(searchValue)(movies);
  }

  setSortBy(value) {
    this.setState({sortBy: value});
  }

  setSearchValue(value) {
    this.setState({searchValue: value});
  }

  render() {
    const {currentMovie, searchValue} = this.state;
    const movies = R.compose(this.getFilteredMovies, this.getSortedMovies, this.getNormalizedData)(testData);

    return (
      <Wrapper>
        <Outer className="dark">
          <Inner>
            <SortBy setSortBy={value => this.setSortBy(value)}/>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={val => this.setSearchValue(val)}
            />
          </Inner>
        </Outer>
        <Outer>
          <Inner className="left">
            <MovieList
              movies={movies}
              onClick={id => this.setState({currentMovie: id})}
            />
          </Inner>
          <Inner className="right">
            <MovieDetail movie={this.getSelectedMovie(currentMovie, movies)} />
          </Inner>
        </Outer>
      </Wrapper>
    );
  }
}

export default App;
