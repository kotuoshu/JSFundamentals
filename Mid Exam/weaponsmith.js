function weaponsmith(input){
    let weaponNames = input[0].split('|')
    
    for (i = 1; i < input.length; i++){
        let command = input[i].split(' ')

        if (command[0] == 'Done'){
            break;
        } else if (command[0] == 'Add'){
            let index = Number(command[2])
            if (index >= 0 && index < weaponNames.length){
                weaponNames.splice(index, 0, `${command[1]}`)
            }
        } else if (command[0] == 'Remove'){
            let index = Number(command[1])
            if (index >= 0 && index < weaponNames.length){
                weaponNames.splice(index, 1)
            }
        } else if (command[0] == 'Check'){
            let evenOrOdd = []
            if (command[1] == 'Even'){
                for (j = 0; j < weaponNames.length; j += 2){
                    evenOrOdd.push(weaponNames[j])
                }
            } else {
                for (j = 1; j < weaponNames.length; j += 2){
                    evenOrOdd.push(weaponNames[j])
                }
            }
            console.log(evenOrOdd.join(' '))
        }
    }
    console.log(`You crafted ${weaponNames.join('')}!`)
}

weaponsmith(["pa|Do|ha|mm|er",
    "Remove 0",
    "Add om 1",
    "Check Even",
    "Done"])    
console.log('---')
weaponsmith(["As|hb|ri|ng|er",
    "Remove 10",
    "Add lo 5",
    "Check Odd",
    "Done"])    
console.log('---')
weaponsmith(["Ta|es|to|la|ch",
    "Add pa 8",
    "Add ha 2",
    "Remove 3",
    "Done"])    