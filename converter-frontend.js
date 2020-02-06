const converter = require('./converter-backend.js')

const num = process.argv[2]
const temp_scale = process.argv[3]

const result = converter(num,temp_scale)

console.log(result)