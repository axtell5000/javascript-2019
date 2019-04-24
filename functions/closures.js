// closure -A closure is the combination of a function and the lexical environment within which that function was declared.

const myFunc = () => {
  const message = 'This is my message';
  const printMessage = () => {
    console.log(message);
  };

  return printMessage;
};

const myPrintMessage = myFunc();
myPrintMessage();

// Another example
const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  }
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder - using currying
//Currying is a process in functional programming in which we can transform a function with multiple arguments into
// a sequence of nesting functions. It returns a new function that expects the next argument inline.
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

// tipper using currying
const createTipper = (baseTip) => {
  return (amount) => {
    return baseTip * amount;
  };
};

const tip20 = createTipper(.2);
const tip30 = createTipper(.3);
console.log(tip20(1000));
console.log(tip30(1000));
