// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function myFunction(obj) {

  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key].trim() === '' ? null : obj[key];
    return acc; }, {});
}

console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }));

/*
function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}
*/