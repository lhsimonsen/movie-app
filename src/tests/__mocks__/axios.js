import { data as movies } from './movies.json';

const MOVIES_ENDPOINT = "https://star-wars-api.herokuapp.com/films";

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case MOVIES_ENDPOINT:
        return Promise.resolve({
          data: movies
        });
    }
  })
};