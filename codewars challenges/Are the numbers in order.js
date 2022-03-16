function inAscOrder(array) {
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        return false;
      } 
     }
    return true;
   }
   
   console.log(inAscOrder([1, 2, 4, 7, 19]))
   console.log(inAscOrder([1, 2, 3, 4, 5]))
   console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))
   console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]))