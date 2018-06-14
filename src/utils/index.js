const R = require('ramda');

export const flattenMovie = m => ({...m.fields, id: m.id});
export const sortByProp = prop => list => R.sortBy(R.prop(prop))(list);
