export const join = separator => list =>
  Array.prototype.join.call(list, separator);