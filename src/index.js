module.exports = function reverse (n) {
  n = n.toString();
  let reverse;
  reverse = n.split('').reverse().join('').replace('-', '');
  return reverse;
}
