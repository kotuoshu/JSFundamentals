function odd(n) {
    let a = 1;
    console.log(a);
    let sum = 1;
    for (let i = n; i > 1; i -= 1){
        a += 2;
        console.log(a);
        sum +=a;
    }
    console.log(`Sum: ` + sum)
}

odd(5)