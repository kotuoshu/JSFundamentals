function primeNumberChecker(n){
    let i = 2
    do{
        if (n % i == 0){
                console.log(false)
                return;
        }
        i++
    } while (i < n)
        console.log(true)
}

primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)