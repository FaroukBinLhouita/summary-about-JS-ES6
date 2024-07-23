// first fun SUM ARRAY
function sum(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

// sec fun FIND MAX
function max(arr) {
  return Math.max(...arr);
}

// third fun REVERSE TEXT
function reverse(text) {
  return text.split("").reverse().join("");
}

// forth fun REMOVE DUPLICATES
function removeDuplicates(arr) {
  return arr.filter((el, i) => arr.indexOf(el) === i);
}

// TESTING
console.log(sum([1, 2, 3, 4]));
console.log(max([1, 2, 3, 4]));
console.log(reverse("hello world"));
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 5]));
