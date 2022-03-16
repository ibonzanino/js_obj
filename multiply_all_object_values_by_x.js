// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b) {

  return Object.fromEntries(Object.entries(a).map(([name, value]) => [name, value * b]));
}

console.log(myFunction({ j:9, i:2, x:3, z:4 }, 10));

/*function myFunction(a, b) {

  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {})
}*/