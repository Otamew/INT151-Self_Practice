function calculateTotalPages(items, itemPerPage) {
    if (!Number.isInteger(items) || !Number.isInteger(itemPerPage)) {
        throw new Error("items and itemPerPage must be integers");
    }
    if (items <= 0 || itemPerPage <= 0) {
        throw new Error("Values must be positive");
    }
    return Math.ceil(items / itemPerPage);
}

try {
    console.log("Pages:", calculateTotalPages(25, 4)); 
    console.log("Pages:", calculateTotalPages("25", 4)); 
} catch (error) {
    console.error("Caught error:", error.message);
}


let nums = [1, 2, 3];
let extended = [...nums, 4, 5, ...[6, 7]];
console.log("extended:", extended);

const [p, ...rest] = [1, 2, 3, 4, 5];
console.log("p:", p);       // 1
console.log("rest:", rest); // [2,3,4,5]


//Learn and know about throw error and how to throw error
//Method .ceil
//Learned spread
//Learned rest