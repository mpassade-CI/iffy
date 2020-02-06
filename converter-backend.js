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
        return (+num - 32) * (5/9) + 273.15 + ' Kelvin'
    }
    else if ((temp_scale1==='Celsius' 
    || temp_scale1==='celsius' 
    || temp_scale1==='C' 
    ||temp_scale1==='c') && 
    (temp_scale2==='Fahrenheit' 
    || temp_scale2==='fahrenheit' 
    || temp_scale2==='F' 
    ||temp_scale2==='f')){
        return +num * (9/5) + 32 + ' Fahrenheit'
    } 
    else if ((temp_scale1==='Celsius' 
    || temp_scale1==='celsius' 
    || temp_scale1==='C' 
    ||temp_scale1==='c') && 
    (temp_scale2==='Kelvin' 
    || temp_scale2==='kelvin' 
    || temp_scale2==='K' 
    ||temp_scale2==='k')){
        return +num + 273.15 + ' Kelvin'
    } 
    else if ((temp_scale1==='Kelvin' 
    || temp_scale1==='kelvin' 
    || temp_scale1==='K' 
    ||temp_scale1==='k') && 
    (temp_scale2==='Fahrenheit' 
    || temp_scale2==='fahrenheit' 
    || temp_scale2==='F' 
    ||temp_scale2==='f')){
        return (+num - 273.15) * (9/5) + 32 + ' Fahrenheit'
    }
    else if ((temp_scale1==='Kelvin' 
    || temp_scale1==='kelvin' 
    || temp_scale1==='K' 
    ||temp_scale1==='k') && 
    (temp_scale2==='Celsius' 
    || temp_scale2==='celsius' 
    || temp_scale2==='C' 
    ||temp_scale2==='c')){
        return +num - 273.15 + ' Celsius'
    }
    else {
        return 'Please enter a temperature, its temperature scale, and the new scale you want it converted to.'
    }
}

module.exports = converter;

