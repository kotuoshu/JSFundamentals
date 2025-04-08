function employees(input){
    let n = input[0]
    for (i = 1; i <= n; i++){
        let employee = input[i]
        let validity = /^(?<employeeName>[A-Z][a-z]{2,} [A-Z][a-z]{2,})#+(?<jobPosition>[A-Z][a-zA-Z]*(?:&[A-Z][a-zA-Z]*){0,2})\d{2}(?<companyName>[A-Z][a-zA-Z\d]* (?:JSC|Ltd.))$/
        if (validity.test(employee)){
            let {employeeName, jobPosition, companyName} = employee.match(validity).groups
            jobPosition = jobPosition.replace(/&/g, ' ');
            console.log(`${employeeName} is ${jobPosition} at ${companyName}`)
        }
    } 
}

employees(["4",
    "Tanya Petrova##Dental&Assistants25Health Ltd.",
    "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
    "George Fill####Orderlies99Health JSC",
    "Lily petrova#Speech&Pathology&Assistants60Health Ltd."])
    