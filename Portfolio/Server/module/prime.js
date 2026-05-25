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
module.exports = prime;
