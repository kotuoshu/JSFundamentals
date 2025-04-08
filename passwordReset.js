function passwordReset (input){
    let basePassword = input[0]

    for (i = 1; i < input.length; i++){
        let command = input[i].split(" ")
        let com = command[0]

        if (com == "TakeOdd"){
            let oddPassword = ""
            let arrPassword = basePassword.split("")
            for (j = 1; j < arrPassword.length; j += 2){
                oddPassword = oddPassword + arrPassword[j]
            }
            basePassword = oddPassword
            console.log(basePassword)
        } else if (com == "Cut"){
            let index = Number(command[1])
            let length = Number(command[2])
            let endIndex = index + length
            let toCut = basePassword.slice(index, endIndex)
            let cutPassword = basePassword.replace(toCut, "")
            basePassword = cutPassword
            console.log(basePassword)
        } else if (com == "Substitute"){
            let substring = command[1]
            let substitute = command[2]
            if (basePassword.includes(substring)){
                //basePassword = basePassword.replaceAll(substring, substitute)
                while(basePassword.includes(substring)){
                    basePassword = basePassword.replace(substring, substitute)
                }
                console.log(basePassword)
            } else {
                console.log('Nothing to replace!')
            }
        }
    }
    console.log(`Your password is: ${basePassword}`)
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]
    )