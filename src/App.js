import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SortBy from './components/SortBy';
import SearchBar from './components/SearchBar';
import {flattenMovie, sortByProp, filterByValue} from './utils';
import {testData} from './utils/test-data';

const R = require('ramda');

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
      <div className="App">
        <SortBy setSortBy={value => this.setSortBy(value)}/>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={val => this.setSearchValue(val)}
        />
        <MovieList
          movies={movies}
          onClick={id => this.setState({currentMovie: id})}
        />
        <MovieDetail movie={this.getSelectedMovie(currentMovie, movies)} />
      </div>
    );
  }
}

export default App;
