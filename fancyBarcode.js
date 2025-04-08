function fancyBarcode(input){
    let nBarcodes = Number(input[0])
    for (i = 1; i <= nBarcodes; i++){
        let barcode = input[i]
        let regEx = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z]\1/g
        if (regEx.test(barcode)){
            let ifNum = /[0-9]/g
            if (ifNum.test(barcode)){
                let num = barcode.match(ifNum).toString().replace(",", "")
                console.log(`Product group: ${num}`)
            } else {
                console.log(`Product group: 00`)
            }
        } else {
            console.log("Invalid barcode")
        }
    }
}

fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
console.log("--------------")
fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])    