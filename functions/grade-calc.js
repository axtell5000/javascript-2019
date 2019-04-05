const calcGrade = function (studentScore = 0, totalPossibleScore = 0) {
  const percentage = (studentScore/totalPossibleScore) * 100;
  let gradeSymbol;

  if (percentage >= 0 && percentage < 60) {
    gradeSymbol = 'F';
  } else if (percentage >= 60 && percentage <= 69) {
    gradeSymbol = 'D';
  } else if (percentage >= 70 && percentage <= 79) {
    gradeSymbol = 'C';
  } else if (percentage >= 80 && percentage <= 89) {
    gradeSymbol = 'B';
  } else if (percentage >= 90 && percentage <= 100) {
    gradeSymbol = 'A';
  } else {
    return `Invalid mark`
  }

  return `Student got ${studentScore} out of ${totalPossibleScore} which is ${percentage}% and a symbol of ${gradeSymbol};`
};

console.log(calcGrade(-1, 20));
console.log(calcGrade(20, 20));
console.log(calcGrade(100, 20));
