function processWords(input) {
    let words = input[0].split(' ')

    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(' ')
        let action = command[0]

        if (action === 'Delete') {
            let index = Number(command[1])
            if (index >= 0 && index < words.length) {
                words.splice(index, 1)
            }
        } else if (action === 'Swap') {
            let word1 = command[1]
            let word2 = command[2]
            let index1 = words.indexOf(word1)
            let index2 = words.indexOf(word2)
            if (index1 !== -1 && index2 !== -1) {
                [words[index1], words[index2]] = [words[index2], words[index1]];
            }
        } else if (action === 'Put') {
            let word = command[1]
            let index = Number(command[2])
            if (index >= 0 && index <= words.length) {
                words.splice(index, 0, word)
            }
        } else if (action === 'Sort') {
            words.sort((a, b) => b.localeCompare(a))
        } else if (action === 'Replace') {
            let word1 = command[1]
            let word2 = command[2]
            let index = words.indexOf(word2)
            if (index !== -1) {
                words[index] = word1
            }
        } else if (action === 'Stop') {
            break;
        }
    }

    console.log(words.join(' '))
}