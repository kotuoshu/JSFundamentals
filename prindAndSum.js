function fromMToN(m, n){
    let numbers = ''
    let sum=0
    for (i=m; i<=n; i++){
        numbers+=`${i} `
        sum+=i
    }
    console.log(numbers)
    console.log(`Sum: ${sum}`)
}

fromMToN(5, 10)