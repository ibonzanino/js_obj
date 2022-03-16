// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj) {

  return Object.entries(obj).reduce((acc, [key, val]) => {
      return { ...acc, [val]: key };
    }, {})
}

console.log(myFunction({ z:'a' ,y:'b' ,x:'c' ,w:'d' }))