function googleSearches(input){
    formatedInput = input.map(Number)
    let singleSearchIncome = formatedInput[0]
    let users = formatedInput[1]
    let money = 0

    for (i = 2; i < formatedInput.length; i++){
        let searches = formatedInput[i]
        if (searches == 1){
            searches = 0;
        }
        if (searches > 5){
            searches *= 2
        }
        if ((i - 1) % 3 == 0){
            searches *= 3
        }
        money += searches * singleSearchIncome
    }

    console.log(`Total money earned: ${money.toFixed(2)}`)

}

googleSearches(["5.5",
    "3",
    "1",
    "10",
    "5"])
console.log('---') 
googleSearches(["0.5",
    "6",
    "3",
    "5",
    "16",
    "0",
    "6",
    "1"])
console.log('---')
googleSearches(["3.0",
    "7",
    "0",
    "1",
    "2",
    "3",
    "4",
    "6",
    "15"])    