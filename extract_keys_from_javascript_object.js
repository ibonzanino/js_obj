// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {

  return Object.keys(a);
}

console.log(myFunction({ j:9 ,i:2 ,x:3 ,z:4 }));