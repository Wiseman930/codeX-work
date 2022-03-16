function past(h, m, s){

    let d = (s * 1000 + m * 60000 + h * 3600000)

 return d;
}
console.log(past(0,1,1));