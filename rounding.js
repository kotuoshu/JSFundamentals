function rounding(a, b){
    if(b>15){
        b = 15
    }
    console.log(parseFloat((a).toFixed(b)))
}

rounding(2.345, 2)