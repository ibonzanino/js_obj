// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function myFunction(obj) {

  const { b, ...rest } = obj;
  return rest;
}

console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));

/*  
function myFunction(obj) {

  delete obj['b'];
  return obj;
}
*/