let data = require('./data')
let functions = require('./functions')

console.log('All cities: ', data)
console.log('Cities with a population of more than 100k: ', functions.filterAbove100k(data))
console.log('Cities with a population of less than 100k: ', functions.filterBelow100k(data))