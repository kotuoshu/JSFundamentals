function triangleOfNumbers(n){
    for(i=1; i<=n; i++){
        let row=''
        for(j=1; j<=i; j++){
            row+=`${i} `
        }
        console.log(row)
    }
}

triangleOfNumbers(3)