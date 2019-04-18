const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.1;
  } else {
    throw Error('Argument must be a number');
  }

};

const result = getTip(100);

try {
  const result = getTip(1000);
  console.log(result);
} catch (e) {
  // if error do something, the line outside this block will still run
  console.log('catch block is running');
}

console.log(100 + 40);

// Challenge

const calcGrade = function (studentScore , totalPossibleScore) {

  if (typeof studentScore === 'number' && typeof totalPossibleScore === 'number') {

    const percentage = (studentScore / totalPossibleScore) * 100;

    let gradeSymbol = '';

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
    }

    return `Student got ${studentScore} out of ${totalPossibleScore} which is ${percentage}% and a symbol of ${gradeSymbol};`

  } else {
    throw Error('Argument must ne a number');
  }

};

try {
  console.log(calcGrade(10, 'k'));
} catch (e) {
  console.log(e.message);
}
