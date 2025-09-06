/*
1. Passing Students
Q1: From the student list:
*/
const scores = [
  {name: "Ann", score: 85},
  {name: "Ben", score: 60},
  {name: "Chris", score: 72}
];
const passingStudents = scores.filter(student => student.score >= 70).map(student => student.name + " score:"+ student.score);
console.log(passingStudents);

/*
2. Average Score
Q2: Calculate the average score of the students in the scores array.
*/
const totalScore = scores.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / scores.length;
console.log(averageScore);

/*
3.Check Array or Not
Q3: Use Array.isArray() to check which are arrays: [], "hello", {}, [1,2,3].
*/
console.log(Array.isArray([]));       
console.log(Array.isArray("hello"));  
console.log(Array.isArray({}));       
console.log(Array.isArray([1,2,3]));

/*
4.Merge Arrays with Spread
Q4: Merge [1,2,3] and [4,5] using the spread operator.
Answer:
*/
const arr1 = [1,2,3];
const arr2 = [4,5];
const merged = [...arr1, ...arr2];
console.log(merged);

/*
5.Sort Numbers Ascending
Q5: Sort [100, 2, 25, 1] in ascending order.
Answer:
*/
const nums = [100, 2, 25, 1];
nums.sort((a, b) => a - b);
console.log(nums);

/*
6. Find Object by Property
Q6: From the array of objects:
*/
const products = [
  {id: 1, name: "Pen"},
  {id: 2, name: "Pencil"},
  {id: 3, name: "Eraser"}
];
const product = products.find(p => p.id === 2);
console.log(product);