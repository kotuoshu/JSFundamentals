function registration(input){
    let username = input[0]

    for(let i = 1; i < input.length - 1; i++){
        let command = input[i].split(' ')
        if(command[0] == 'Registration'){
            break;
        }
        
        if(command[0] == 'Letters'){
            if(command[1] == 'Lower'){
                username = username.toLowerCase()
                console.log(username)
            } else if (command[1] == 'Upper'){
                username = username.toUpperCase()
                console.log(username)
            }
        }

        if(command[0] == 'Reverse'){
            let startIndex = Number(command[1])
            let endIndex = Number(command[2])
            if(startIndex >= 0 && endIndex >= 0 && endIndex <= username.length-1 && startIndex <= username.length-1){
                let reversed = ''
                let preReversed = username.split('')
                if(endIndex >= startIndex){
                    for(let j = endIndex; j >= command[1]; j--){
                        reversed += preReversed[j]
                    }
                } else {
                    for(let j = startIndex; j >= endIndex; j--){
                        reversed += preReversed[j]
                    }
                }
                console.log(reversed)
            }
        }

        if(command[0] == 'Substring'){
            if (username.includes(command[1])){
                for(let k = 0; k < username.length; k++){
                    username = username.replace(command[1], '')
                }
                console.log(username)
            } else {
                console.log(`The username ${username} doesn't contain ${command[1]}.`)
            }
        }

        if(command[0] == 'Replace'){
            for(let k = 0; k < username.length; k++){
                username = username.replace(command[1], '-')
            }
            console.log(username)
        }

        if(command[0] == 'IsValid'){
            if(username.includes(command[1])){
                console.log('Valid username.')
            } else {
                console.log(`${command[1]} must be contained in your username.`)
            }
        }
    }
}

registration(['John',
    'Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration']
    )
console.log('------------------')
registration(['ThisIsSoftUni',
    'Reverse 3 1',
    'Replace S',
    'Substring hi',
    'Registration']
    )