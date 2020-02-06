const converter = require('./converter-backend.js')

const firstNumberIndex = process.argv.findIndex((value) => !isNaN(value))

const num = process.argv[firstNumberIndex]
const temp_scale = process.argv[firstNumberIndex+1]

const result = converter(num,temp_scale)

console.log(result)