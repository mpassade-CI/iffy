function converter(num,temp_scale1,temp_scale2){
    if ((temp_scale1==='Fahrenheit' 
        || temp_scale1==='fahrenheit' 
        || temp_scale1==='F' 
        ||temp_scale1==='f') && 
        (temp_scale2==='Celsius' 
        || temp_scale2==='celsius' 
        || temp_scale2==='C' 
        ||temp_scale2==='c')){
        return (+num - 32) * (5/9) + ' Celsius'
    } 
    else if ((temp_scale1==='Fahrenheit' 
    || temp_scale1==='fahrenheit' 
    || temp_scale1==='F' 
    ||temp_scale1==='f') && 
    (temp_scale2==='Kelvin' 
    || temp_scale2==='kelvin' 
    || temp_scale2==='K' 
    ||temp_scale2==='k')){
        return (num - 32) * (5/9) + 273.15 + ' Kelvin'
    }
    else if ((temp_scale1==='Celsius' 
    || temp_scale1==='celsius' 
    || temp_scale1==='C' 
    ||temp_scale1==='c') && 
    (temp_scale2==='Kelvin' 
    || temp_scale2==='kelvin' 
    || temp_scale2==='K' 
    ||temp_scale2==='k')){
        return +num * (9/5) + 32 + ' Kelvin'
    } else if (temp_scale==='Kelvin' 
    || temp_scale==='kelvin' 
    || temp_scale==='K' 
    ||temp_scale==='k'){

    }
    else {
        return 'Please enter a temperature and specify whether it is fahrenheit or celsius.'
    }
}

module.exports = converter;

