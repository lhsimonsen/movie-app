const R = require('ramda');

const toLower = x => x.toLowerCase();
export const flattenMovie = m => ({...m.fields, id: m.id});
export const sortByProp = prop => list => R.sortBy(R.prop(prop))(list);
export const filterByValue = value => list => R.filter(x => toLower(x.title).includes(toLower(value)), list);
