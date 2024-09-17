function reverseString (str){

    let rts = ''

    for (i = 0; i < str.length; i ++){
        rts += str[str.length -1 - i]
    }

    console.log(rts)

}

reverseString('Hello')