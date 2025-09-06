//all question came from chatgpt

/*
1. Reverse the Array
Q1: Given const fruits = ["apple", "banana", "cherry"];, reverse the array and print it.
*/

const fruits = ["apple", "banana", "cherry"];
console.log(fruits.reverse());

/*
2. Filter Words Starting with "b"
Q2: From the array ["ball", "cat", "bat", "dog"], filter out the words starting with "b".
*/

const words = ["ball", "cat", "bat", "dog"];
const bWords = words.filter(word => word.startsWith('b'));
console.log(bWords);

/*
3. Sum of Numbers in an Array
Q3: Calculate the sum of all numbers in the array [1, 2, 3, 4, 5].
*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

/*
4. Find the Longest Word
Q4: In the array ["tree", "house", "elephant", "car"], find the longest word.
*/

const items = ["tree", "house", "elephant", "car"];
const longestWord = items.reduce((longest, current) => 
  current.length > longest.length ? current : longest, "");
console.log(longestWord);

/*
5. Map to Full Name
Q3: From the array of objects
*/

const employees = [
  {firstname: "Aom", lastname: "Sorn"},
  {firstname: "Boon", lastname: "Mee"}
];
const fullName = employees.map(e => (e.firstname + " " + e.lastname).toUpperCase());
console.log(fullName);

/*
6. Calculate Total Price
Q4: Given a cart:
*/
const cart = [
  {price: 20, amount: 2},
  {price: 50, amount: 1},
  {price: 10, amount: 5}
];
const totalPrice = cart.reduce((total, item) => total + item.price * item.amount, 0);
console.log(totalPrice);