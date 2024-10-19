function coffeeLover(input){

    const swapElements = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    let coffees = input[0].split(' ')

    for (i = 2; i < Number(input[1]) + 2; i++){
        let command = input[i].split(' ')

        if (command[0] == 'Include'){
            coffees.push(command[1])
        } else if (command[0] == 'Remove'){
            if (Number(command[2]) > coffees.length){
                break;
            } else if (command[1] == 'first'){
                for (j = 0; j < Number(command[2]); j++){
                    coffees.shift()
                }
            } else if (command[1] == 'last'){
                for (j = 0; j < Number(command[2]); j++){
                    coffees.pop()
                }
            }
        } else if (command[0] == 'Prefer'){
            if (Number(command[1]) >= 0 && Number(command[1]) < coffees.length && Number(command[2]) >= 0 && Number(command[2]) < coffees.length){
                swapElements(coffees, Number(command[1]), Number(command[2]))
            }
        } else if (command[0] == 'Reverse'){
            coffees.reverse()
        }
    }
    console.log("Coffees:")
    console.log(`${coffees.join(' ')}`)
}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])
console.log('---')    
coffeeLover (["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])
    console.log('---') 
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])
    