function tripplesOfLetters(n){

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let trio = ''

    for (i = 0; i < n; i++){
        let letter = alphabet[i]
        trio += letter
        for (o = 0; o < n; o++){
            let letter = alphabet[o]
            trio += letter
            for (p = 0; p < n; p++){
                let letter = alphabet[p]
                trio += letter
                console.log(trio)
                trio = trio.slice(0, -1)
            }
            trio = trio.slice(0, -1)
        
        }
        trio = trio.slice(0, -1)
    
    }

}

tripplesOfLetters(2)