function findTM(n1, n2, n3) {
  return n1 + n2 + n3;
}
const a = {
  marks: { eng: 67, math: 87, sci: 75 },
  name: "Rim",
  roll: 67,
  class: "iv",
  findTotalM: findTM,
};
console.log(a.name);
console.log(a.marks.sci);
const sum = a.findTotalM(a.marks.eng, a.marks.math, a.marks.sci);
console.log(sum);
