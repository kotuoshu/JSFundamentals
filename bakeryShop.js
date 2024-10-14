function bakeryShop(input){
    let stock = []
    let sold = 0

    for(i = 0; i < input.length; i++){
        let command = input[i]
        command = command.split(' ')
        
        if(command[0] == 'Receive'){
            let quantity = Number(command[1])
            let food = command[2]

            if(quantity > 0){
                if(stock.includes(food)){
                    stock[stock.indexOf(food) + 1] += quantity
                } else {
                    stock.push(food, quantity)
                }
            }

        } else if (command[0] == 'Sell'){
            let quantity = Number(command[1])
            let food = command[2]

            if(!stock.includes(food)){
                console.log(`You do not have any ${food}.`)
            } else if (stock[stock.indexOf(food) + 1] < quantity){
                console.log(`There aren't enough ${food}. You sold the last ${stock[stock.indexOf(food) + 1]} of them.`)
                sold += stock[stock.indexOf(food) + 1]
                stock.splice(stock.indexOf(food) + 1, 1)
                stock.splice(stock.indexOf(food), 1)
            } else {
                console.log(`You sold ${quantity} ${food}.`)
                sold += quantity
                stock[stock.indexOf(food) + 1] -= quantity
                if (stock[stock.indexOf(food) + 1] == 0){
                    stock.splice(stock.indexOf(food) + 1, 1)
                    stock.splice(stock.indexOf(food), 1)
                }
            }

        } else if (command[0] == 'Complete'){
            break;
        }
    }
    for(j = 0; j < stock.length; j += 2){
        console.log(`${stock[j]}: ${stock[j + 1]}`)   
    }
    console.log(`All sold: ${sold} goods`)
}

// bakeryShop(['Receive 105 cookies',
//     'Receive 10 donuts',
//     'Sell 10 donuts',
//     'Sell 1 bread',
//     'Complete'
//     ])
bakeryShop(['Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
    ])