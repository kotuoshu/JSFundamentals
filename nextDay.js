function nextDay(year, month, day){
    if (year >0 && year <100){
        year += 1900
    }
    
    if (year % 4 == 0 && month == 2 && day == 28){
        day ++
    } else if (year % 4 != 0 && month == 2 && day == 28){
        month ++
        day = 1
    } else switch (month+', '+day){
        case '1, 31':
        case '2, 29':
        case '3, 31':
        case '4, 30':
        case '5, 31':
        case '6, 30':
        case '7, 31':
        case '8, 31':
        case '9, 30':
        case '10, 31':
        case '11, 30':
        month ++
        day = 1
        break;
        case '12, 31':
        year ++
        month = 1
        day = 1
        break;
        default:
        day ++
    }
    console.log(`${year}-${month}-${day}`)
    
}

nextDay(2001, 12, 31) //2002-1-1
nextDay(2001, 1, 31) //2001-2-1
nextDay(2016, 2, 28) //2016-2-29
nextDay(2015, 2, 28) //2015-3-1
nextDay(2016, 2, 29) //2016-3-1