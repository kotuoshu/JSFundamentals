function theFinalQuest(input){
    let words = input[0].split(' ')

    for (i = 1; i < input.length; i++){
        let command = input[i].split(' ')
        if (command[0] == 'Stop'){
            break;
        } else if (command[0] == 'Delete'){
            let index = Number(command[1])
            if (index >= 0 && index < words.length){
                words.splice(index + 1, 1)
            }
        } else if (command[0] == 'Swap'){
            let word1 = command[1]
            let word2 = command[2]
            if (words.includes(word1) && words.includes(word2)){
                let temp = words[words.indexOf(word1)]
                words[words.indexOf(word1)] = words[words.indexOf(word2)]
                words[words.indexOf(word2)] = temp
            }
        } else if (command[0] == 'Put'){
            let word = command[1]
            let index = Number(command[2])
            if (index > 0 && index <= words.length){
                if (index == words.length){
                    words.push(word)
                } else {
                    words.splice(index - 1, 0, word)
                }
            }
        } else if (command[0] == 'Sort'){

        } else if (command[0] == 'Replace'){
            let word1 = command[1]
            let word2 = command[2]
            if (words.includes(word2)){
                words.splice(words.indexOf(word2), 1, word1)
            }
        }
    }
    console.log(words.join(' '))
}

theFinalQuest (["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"])
console.log('---')
theFinalQuest (["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"])
console.log('---')
theFinalQuest (["Please, follow the instructions!",
    "Put You 0",
    "Delete 3",
    "Replace me you",
    "Replace follow know",
    "Stop"])
    