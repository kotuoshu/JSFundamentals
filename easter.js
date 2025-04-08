function easter(input){
    let str = input[0]
    for (i = 1; i < input.length; i++){
        let cmd = input[i].split(" ")
        let command = cmd[0]

        if (command == "Easter"){
            break;
        } else if (command == "Replace"){
            let currentChar = cmd[1]
            let newChar = cmd[2]
            while (str.includes(currentChar)){
                str = str.replace(currentChar, newChar)
            }
            console.log(str)
        } else if (command == "Remove"){
            let substring = cmd[1]
            str = str.replace(substring, "")
            console.log(str)
        } else if (command == "Includes"){
            let string = cmd[1]
            if (str.includes(string)){
                console.log("True")
            } else (
                console.log("False")
            )
        } else if (command == "Change"){
            let casing = cmd[1]
            if (casing == "Lower"){
                str = str.toLowerCase()
            } else if (casing == "Upper"){
                str = str.toUpperCase()
            }
            console.log(str)
        } else if (command == "Reverse"){
            let startIndex = cmd[1]
            let endIndex = Number(cmd[2]) + 1
            let reversed = str.slice(startIndex, endIndex).split("").reverse().join("")
            console.log(reversed)
        }
    }
}

// easter(['EasteriEggsscomming',
//     'Replace i I',
//     'Remove Eggs',
//     'Includes Easter',
//     'Remove commIng',
//     'Change Lower',
//     'Reverse 0 17',
//     'Easter'])
// console.log("---")
easter(['Easterbscomming',
    'Replace b I',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Easter'])    