function bitcoinMining(shifts){
    let bitcoins=0
    let money=0
    let firstBitcoin=false
    let counter=0
    for(i=0; i<shifts.length; i++){
        let gold=0
        gold+=shifts[i]
        if((i+1)%3==0){
            gold*=0.7
        }
        money+=67.51*gold
        if(money>=11949.16&&bitcoins==0){
            firstBitcoin=true
            counter=i+1
        }
        while(money>=11949.16){
            bitcoins++
            money-=11949.16
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if(firstBitcoin){
        console.log(`Day of the first purchased bitcoin: ${counter}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

bitcoinMining([50, 100])