// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a, b) {

  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

console.log(myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));

/*
function myFunction(a, b) {

  return Object.fromEntries(a.map((_, i) => [a[i], b[i]]));
}
*/