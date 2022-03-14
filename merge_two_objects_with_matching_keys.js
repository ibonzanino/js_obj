// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}

console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
