import React, { Component } from 'react';
import styled from 'react-emotion';
import axios from 'axios';
import {flattenMovie, sortByProp, filterByValue} from './utils';
import {colors, borders, breakpoints, endpoint} from './utils/constants';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SortBy from './components/SortBy';
import SearchBar from './components/SearchBar';

const R = require('ramda');

const Wrapper = styled.div`
  font-family: sans-serif;
  color: ${colors.dark};
  display: flex;
  flex-direction: column;
`;

const Outer = styled.div`
  display: block;

  @media (min-width: ${breakpoints.tablet}px) {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  .dark {
    background: ${colors.primary};
    border: ${borders.primary};
    padding: 15px 10px;
  }
`;

const Inner = styled.div`
  position: relative;
  flex: 1;

  .base {
    display: flex;
  }
  .left {
    border-right: ${borders.primary};
    display: block;

    @media (min-width: ${breakpoints.tablet}px) {
      display: flex;
    }
  }
  .right {
    padding: 30px;
    display: block;

    @media (min-width: ${breakpoints.tablet}px) {
      display: flex;
    }
  }
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentMovie: null,
      sortBy: null,
      searchValue: "",
      movieData: []
    }

    this.getSortedMovies = this.getSortedMovies.bind(this);
    this.getFilteredMovies = this.getFilteredMovies.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
  }

  componentDidMount() {
    axios.get(endpoint)
      .then(res => this.setState({movieData: res.data}))
      .catch(err => console.log(err.message));
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
    const movies = R.compose(this.getNormalizedData)(this.state.movieData);
    const filteredMovies = R.compose(this.getFilteredMovies, this.getSortedMovies)(movies);

    return (
      <Wrapper>
        <Outer className="dark">
          <Inner className="base">
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
              movies={filteredMovies}
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
