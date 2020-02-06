const converter = require('./converter-backend.js')
const firstNumberIndex = process.argv.findIndex((value) => !isNaN(value))
const firstUnit = process.argv.findIndex((unit) => 
    unit === 'Fahrenheit'
    || unit === 'fahrenheit'
    || unit === 'F'
    || unit === 'f'
    || unit === 'Celsius'
    || unit === 'celsius'
    || unit === 'C'
    || unit === 'c'
    || unit === 'Kelvin'
    || unit === 'kelvin'
    || unit === 'K'
    || unit === 'k'
    )   
const newStr = process.argv.slice(firstUnit+1)
const secondUnit = newStr.findIndex((unit) => 
    unit === 'Fahrenheit'
    || unit === 'fahrenheit'
    || unit === 'F'
    || unit === 'f'
    || unit === 'Celsius'
    || unit === 'celsius'
    || unit === 'C'
    || unit === 'c'
    || unit === 'Kelvin'
    || unit === 'kelvin'
    || unit === 'K'
    || unit === 'k'
    )  

const num = process.argv[firstNumberIndex]
const temp_scale1 = process.argv[firstUnit]
const temp_scale2 = newStr[secondUnit]
const result = converter(num,temp_scale1,temp_scale2)
//console.log(newStr)
//console.log(secondUnit)
console.log(result)