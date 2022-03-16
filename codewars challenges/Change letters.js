function swap (str) {
    let x = str.split("")
    let result = []
    for(i=0;i<x.length;i++){
      if(x[i]=="a" || 
      x[i]=='e' ||
      x[i]=='i' ||
      x[i]=='o' ||
      x[i]=='u'){
        result.push(x[i].toUpperCase())
      }
      else{
        result.push(x[i])
      }
    }
    return result.join("")
  }
  console.log(swap("Tests suite"))