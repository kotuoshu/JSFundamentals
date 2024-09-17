function worsWithdigs(wor){
    let dig = 0
    switch(wor){
        case 'one':
            dig = 1
            break;
        case 'two':
            dig = 2
            break;
        case 'three':
            dig = 3
            break;
        case 'four':
            dig = 4
            break;
        case 'five':
            dig = 5
            break;
        case 'six':
            dig = 6
            break;
        case 'seven':
            dig = 7
            break;
        case 'eight':
            dig = 8
            break;
        case 'nine':
            dig = 9
            break;
        case 'zero':
            dig = 0
            break;
    }
    console.log(dig)
}

worsWithdigs(3)