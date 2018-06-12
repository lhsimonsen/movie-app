import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';

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
  render() {
    return (
      <div className="App">
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
