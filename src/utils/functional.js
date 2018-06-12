export const compose = (...fns) => args => fns.reduceRight((arg, fn) => fn(arg), args);

export const map = f => x =>
  Array.prototype.map.call(x, f);

export const join = separator => list =>
  Array.prototype.join.call(list, separator);