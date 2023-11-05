const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log(array[lastIndex]);
}

getLastValue([4, 10, 9]);
getLastValue(["hi", "hello", "good"]);

function arraySwap(array) {
  const lastIndex = array.length - 1;
  let lastValue = array[lastIndex];
  let firstValue = array[0];
  array[0] = lastValue;
  array[lastIndex] = firstValue;
  console.log(array);
}
arraySwap([4, 10, 9]);
arraySwap(["hi", "hello", "good"]);

// for (i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for (i = 5; i >= 0; i--) {
//   console.log(i);
// }
let i1 = 0;
while (i1 <= 10) {
  console.log(i1);
  i1 += 2;
}

let i2 = 5;
while (i2 >= 0) {
  console.log(i2);
  i2--;
}

let numArray = [1, 2, 3];
let arrayIncreased = [];
for (i = 0; i < numArray.length; i++) {
  arrayIncreased.push(numArray[i] + 1);
}
console.log(arrayIncreased);

let newArray = [];
function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  console.log(newArray);
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }
  console.log(newArray);
}

addNum([1, 2, 3], 3);

function addArrays(array1, array2) {
  let newArray = [];
  for (i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }
  console.log(newArray);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

function countPositive(nums) {
  let counter = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      counter++;
    }
  }
  return counter;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums) {
  let max = nums[0];
  let min = nums[0];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  console.log(`Maxim element ${max}`);
  console.log(`Minim element ${min}`);
}

minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([3]);
minMax([]);

let result = {};
function countWords(words) {
  for (i = 0; i < words.length; i++) {
    const word = words[i];
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}

console.log(countWords(["apple", "grape", "apple", "apple"]));

function searchStringSearch(stringArray) {
  let index = -1;
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "search") {
      index = i;
      break;
    }
  }
  return index;
}

// console.log(searchStringSearch(["hello", "world", "good", "search"]));
// console.log(searchStringSearch(["not", "found"]));

function findIndex(array, word) {
  index = -1;
  for (i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();
  //or const foodsCopy = foods.slice().reverse();
  let newFoods = [];
  let removedEggs = 0;
  for (i = 0; i < reversedFoods.length; i++) {
    if (foods[i] === "egg" && removedEggs < 2) {
      removedEggs++;
      continue;
    } else {
      newFoods.push(reversedFoods[i]);
    }
  }
  console.log(foods);
  return newFoods.reverse();
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

function FizzBuzz() {
  for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

FizzBuzz();

function unique(array) {
  let uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    let index = findIndex(array, array[i]);
    if (i === index) {
      uniqueArr.push(array[index]);
    } else continue;
  }
  return uniqueArr;
}

console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));
