function bakerySystem(commands){
    let distributors = {}
    let clients = {}
    let totalIncome = 0.0

    for (let command of commands){
        let parts = command.split(" ")
        let action = parts[0]

        if (action == "Deliver"){
            let distributor = parts[1]
            let moneySpent = parseFloat(parts[2])

            if (distributors[distributor]){
                distributors[distributor] += moneySpent
            } else {
                distributors[distributor] = moneySpent
            }
        } else if (action == "Return"){
            let distributor = parts[1]
            let moneyReturned = parseFloat(parts[2])

            if (distributors[distributor] && distributors[distributor] >= moneyReturned){
                distributors[distributor] -= moneyReturned
                if (distributors[distributor] == 0){
                    delete distributors[distributor]
                }
            }
        } else if (action == "Sell"){
            let client = parts[1]
            let moneyEarned = parseFloat(parts[2])

            if (clients[client]){
                clients[client] += moneyEarned
            } else {
                clients[client] = moneyEarned
            }
            totalIncome += moneyEarned
        }
    }

    for (let client in clients){
        console.log(`${client}: ${clients[client].toFixed(2)}`)
    }
    console.log("-----------")
    for (let distributor in distributors){
        console.log(`${distributor}: ${distributors[distributor].toFixed(2)}`)
    }
    console.log("-----------")
    console.log(`Total Income: ${totalIncome.toFixed(2)}`)
}

let commands = [
    "Deliver Micro 10000.00",
    "Sell Nick 500.00",
    "Sell Antony 260.50",
    "Deliver Micro 2000.50",
    "End"
];
bakerySystem(commands);