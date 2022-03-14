// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {

  return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

console.log(myFunction({ j:9 ,i:2 ,x:3 ,z:4 }));