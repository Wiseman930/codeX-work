function catchSignChange(array){
    var count = 0;
    for (i=0; i<array.length; i++){
      if ((array[i]<0 && array[i+1]>=0)){
      count++;}
       else if ((array[i]>=0 && array[i+1]<0)) {
        count++;  
      }
    }  return count;
    }
  console.log(catchSignChange([1, 3, 4, 5]))