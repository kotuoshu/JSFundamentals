function destinationMapper(placesString){
    let placesStr = placesString.toString()

    let byEqual = placesStr.split('=')
    let bySlash = placesStr.split('/')

    let validPlaces = []

    for (i = 0; i < (Math.max(byEqual.length, bySlash.length)); i++){
        let isElementEqual = byEqual[i]
        let isElementSlash = bySlash[i]
        if(isElementEqual != undefined && isElementEqual.length >= 3 && isElementEqual.charCodeAt(0) > 64 && isElementEqual.charCodeAt(0) < 91 && /^[a-zA-Z]+$/.test(isElementEqual)){
            validPlaces.push(`${isElementEqual}`)
        }
        if (isElementSlash != undefined && isElementSlash.length >= 3 && isElementSlash.charCodeAt(0) > 64 && isElementSlash.charCodeAt(0) < 91 && /^[a-zA-Z]+$/.test(isElementSlash)){
            validPlaces.push(`${isElementSlash}`)
        }
    }
    
    console.log(`Destinations: ${validPlaces.join(', ')}`)
    console.log(`Travel Points: ${validPlaces.join('').length}`)

}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')