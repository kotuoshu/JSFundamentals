function materials(base, increment){
    
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let lapisCounter = 0

    for (i = base; i > 2; i -=2){
        
        stone = stone + (i - 2) * (i - 2)
        lapisCounter ++
        
        if (lapisCounter % 5){
            marble = marble + i * i - (i - 2) * (i - 2)
        } else {
            lapis = lapis + i * i - (i - 2) * (i - 2)
        }
    }

    stone = Math.ceil(stone * increment)
    marble = Math.ceil(marble * increment)
    lapis = Math.ceil(lapis * increment)

    if (i == 1){
        gold = Math.ceil(1 * increment)
    } else {
        gold = Math.ceil(4 * increment)
    }

    height = Math.floor((lapisCounter + 1) * increment)

    console.log(`Stone required: ${stone}`)
    console.log(`Marble required: ${marble}`)
    console.log(`Lapis Lazuli required: ${lapis}`)
    console.log(`Gold required: ${gold}`)
    console.log(`Final pyramid height: ${height}`)
}

// materials(11, 1)
// materials(11, 0.75)
// materials(12, 1)
materials(23, 0.5)