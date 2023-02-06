let len = 100;
for (let i = 1; i <= len; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  }
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  }
}
