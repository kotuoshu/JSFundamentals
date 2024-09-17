function sum(num){
    let numInStr = String(num)
    let summ = 0
    for (i = 0; i < numInStr.length; i++){
        let toAdd = Number(numInStr[i])
        summ += toAdd
    }
    console.log(summ)
}

sum(245678)