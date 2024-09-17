function biggestOf3(a, b, c){
    let biggest = 0
    if(a>b){
        biggest = a
    } else {
        biggest = b
    }
    if (c >= biggest){
        biggest = c
    }
    console.log(biggest)
}