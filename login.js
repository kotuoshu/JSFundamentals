function login(passwordAttempts){
    let user = passwordAttempts[0]
    let resu = passwordAttempts[0].split('').reverse().join('')
    for (i = 1; i < passwordAttempts.length; i++){
        if (i == 4 && passwordAttempts[i] != resu){
            console.log(`User ${user} blocked!`)
            return;
        }
        if (resu == passwordAttempts[i]){
            console.log(`User ${user} logged in.`)
        } else {
            console.log('Incorrect password. Try again.')
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])