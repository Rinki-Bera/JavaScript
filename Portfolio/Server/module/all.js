function iseven(a) {
  if (a % 2 == 0) {
    console.log(a, "is even");
  } else {
    console.log(a, "is not even");
  }
}

function isodd(n) {
  if (n % 2 != 0) {
    console.log(n, "is odd");
  } else {
    console.log(n, "is not odd");
  }
}

function prime(a) {
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      count++;
    }
    if (count == 2) {
      console.log(a, "is prime");
    }
  }
}
module.exports = { feven: iseven, fodd: isodd, fprime: prime };
