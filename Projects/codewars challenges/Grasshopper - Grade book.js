function getGrade (s1, s2, s3) {
    const score = (s1 + s2 + s3)/3;
    console.log(score);
      if (90 <= score && score <= 100) {
      return "A";
    } else if (80 <= score && score < 90) {
      return "B";
    } else if (70 <= score && score < 80) {
      return "C";
    } else if (60 <= score && score < 70) {
      return "D";
    } else if (0 <= score && score < 60) {
      return "F";  
    } 
    }
    
    console.log(getGrade(95,90,93));
    console.log(getGrade(70,70,100));
    console.log(getGrade(70,70,70));
    console.log(getGrade(65,70,59));
    console.log(getGrade(44,55,52));