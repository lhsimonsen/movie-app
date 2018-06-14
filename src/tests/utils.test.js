import {flattenMovie, sortByProp} from '../utils';
import {movies, moviesNested} from './testData';

it('flattens a movie object using moviesNested', () => {
    const expected = {
        title: "Foo",
        opening_crawl: "foo foo foo",
        director: "Foo Bar",
        episode_id: 22,
        release_date: "2001-01-01",
        id: 1
    }
    expect(flattenMovie(moviesNested[0])).toEqual(expected);
});

it('sorts a movie by prop using sortByProp', () => {
    const expected = [
        {
            title: "Bar",
            opening_crawl: "bar bar bar",
            director: "Bar Baz",
            episode_id: 13,
            release_date: "2001-02-02",
            id: 2
        },
        {
            title: "Baz",
            opening_crawl: "baz baz baz",
            director: "Baz Biz",
            episode_id: 37,
            release_date: "2003-03-03",
            id: 3
        },
        {
            title: "Foo",
            opening_crawl: "foo foo foo",
            director: "Foo Bar",
            episode_id: 22,
            release_date: "2001-01-01",
            id: 1
        }
    ];
    expect(sortByProp("title")(movies)).toEqual(expected);
});
