function cone (r, h){
    let s  = Math.PI * r * Math.sqrt(r * r + h * h) + r * r * Math.PI
    let v = Math.PI * r * r * h / 3
    console.log(`volume = ${v.toFixed(4)}`)
    console.log(`area = ${s.toFixed(4)}`)
}