function phoneShop(input){
    let phones = input[0].split(', ')
    for (i = 1; i < input.length; i++){
        let command = input[i].split(' - ')
        if (command[0] == 'End'){
            break;
        } else if (command[0] == 'Add'){
            if (phones.includes(command[1])){
                break;
            } else {
                phones.push(command[1])
            }
        } else if (command[0] == 'Remove'){
            if (phones.includes(command[1])){
                phones.splice(phones.indexOf(`${command[1]}`), 1)
            }
        } else if (command[0] == 'Bonus phone'){
            let bonusPhones = command[1].split(':')
            if (phones.includes(bonusPhones[0])){
                phones.splice(phones.indexOf(`${bonusPhones[0]}`) + 1, 0, bonusPhones[1])
            }
        } else if (command[0] == 'Last'){
            if (phones.includes(command[1])){
                let phoneToBeLasted = phones.splice(phones.indexOf(`${command[1]}`), 1)
                phones.push(phoneToBeLasted.toString())
            }
        }
    }
    console.log(phones.join(', '))
}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"])
console.log('---')
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])
console.log('---')
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])    