import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

// TODO: Change to real endpoint
const movies = [
  {
      "title": "Foo",
      "opening_crawl": "foo foo foo",
      "director": "Foo Bar",
      "episode_id": 1,
      "release_date": "2001-01-01",
  },
  {
      "title": "Bar",
      "opening_crawl": "bar bar bar",
      "director": "Bar Baz",
      "episode_id": 2,
      "release_date": "2001-02-02",
  },
  {
      "title": "Baz",
      "opening_crawl": "baz baz baz",
      "director": "Baz Biz",
      "episode_id": 3,
      "release_date": "2003-03-03",
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentMovie: {}
    }

    this.onSelectMovie = this.onSelectMovie.bind(this);
  }

  onSelectMovie(movie) {
    this.setState({currentMovie: movie});
  }

  render() {
    return (
      <div className="App">
        <MovieList
          movies={movies}
          onClick={this.onSelectMovie}
        />
        <MovieDetail movie={this.state.currentMovie} />
      </div>
    );
  }
}

export default App;
