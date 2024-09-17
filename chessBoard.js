function chessBoard(n){

    console.log('<div class="chessboard">')
    let colourCounter = 0
    if (n % 2 == 0){
        colourCounter = 1
    }
    
    let colour = ''

    for (i = 0; i < n; i++){
        console.log('  <div>')
        for (j = 0; j < n; j++){

            if (colourCounter % 2 == 0) {
                colour = 'black'
            } else {
                colour = 'white'
            }

        console.log(`    <span class="${colour}"></span>`)
        colourCounter++
        }
        console.log('  </div>')
    }
    console.log('</div>')
}

chessBoard(2)