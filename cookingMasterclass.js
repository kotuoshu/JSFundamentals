function cookingMasterclass(input){
    let budget = Number(input[0])
    let students = Number(input[1])
    let priceSingleFlour = Number(input[2])
    let priceSingleEgg = Number(input[3])
    let priceSingleApron = Number(input[4])

    let totalFlour = 0
    for (i = 1; i <= students; i++){
        if (i % 5 != 0){
            totalFlour += priceSingleFlour
        }
    }
    let totalEgg = students * 10 * priceSingleEgg
    let totalApron = Math.ceil(1.2 * students) * priceSingleApron
    
    let sum = totalFlour + totalEgg + totalApron

    if (sum <= budget){
        console.log(`Items purchased for ${sum.toFixed(2)}`)
    } else {
        console.log(`${(sum - budget).toFixed(2)}$ more needed.`)
    }
}

cookingMasterclass(['50',
    '2',
    '1.0',
    '0.10',
    '10.0'])
console.log('---')
cookingMasterclass(['100',
    '25',
    '4.0',
    '1.0',
    '6.0'])
console.log('---')
cookingMasterclass(['946',
    '20',
    '12.05',
    '0.42',
    '27.89'])
            