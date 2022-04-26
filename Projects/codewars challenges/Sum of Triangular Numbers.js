function sumTriangularNumbers(n){
    var Total = [n*(n+1)*(n+2)]/6;
      if (Total > 0){
    return Total;
      } else {
        return 0;
      }
    }
    console.log(sumTriangularNumbers(6))