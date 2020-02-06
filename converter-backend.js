function converter(num,temp_scale){
    const num = Number(num)

    if (temp_scale==='Fahrenheit' 
        || temp_scale==='fahrenheit' 
        || temp_scale==='F' 
        ||temp_scale==='f'){
        return (num - 32) * (5/9)
    } else if (temp_scale==='Celsius' 
    || temp_scale==='celsius' 
    || temp_scale==='C' 
    ||temp_scale==='c'){
        return num * (9/5) + 32
    } else {
        return 'Please enter a temperature and specify whether it is fahrenheit or celsius.'
    }
}

module.exports = calculate;

