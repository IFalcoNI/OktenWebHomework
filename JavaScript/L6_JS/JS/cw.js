// - Дано список імен.
let n1 = "Harry..Potter";
let n2 = "Ron---Whisley";
let n3 = "Hermione__Granger";
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const randArray = (len) => {
  let array = [];
  for (let index = 0; index < len; index++) {
    array[index] = Math.floor(Math.random() * 100);
  }
  return array;
};
// console.log(randArray(10));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
const ascendingSort = (a, b) => {
  return a - b;
};
// console.log(randArray(10).sort(ascendingSort));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
const oddFilter = (x) => {
  return x % 2 == 0;
};
// console.log(randArray(10).filter(oddFilter));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
const arrayToString = (x) => {
  return x.toString();
};

// console.log(randArray(10).map(arrayToString));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11, 21, 3];

const ascending = (a, b) => {
  return a - b;
};
const descending = (a, b) => {
  return b - a;
};
const sortNums = (direction) => {
  let sorted;
  direction === "ascending"
    ? (sorted = nums.sort(ascending))
    : direction === "descending"
    ? (sorted = nums.sort(descending))
    : (sorted = "Invalid input");

  return sorted;
};

// console.log(sortNums("ascending")); // [3,11,21]
// console.log(sortNums("descending")); // [21,11,3]
// console.log(sortNums("abra cadabra"));

// - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

const sortByMonthDuration = (a, b) => {
  return b.monthDuration - a.monthDuration;
};
const monthFilter = (x) => {
  return x.monthDuration > 5;
};
// console.log(
//   coursesAndDurationArray.filter(monthFilter).sort(sortByMonthDuration)
// );

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
const cutString = (str, n) => {
  let strArray = [];
  let newStr = "";
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % n == 0 && i != 0) {
      console.log(newStr);
      index++;
    } else {
      newStr += str[i];
      strArray[index] = newStr;
      newStr = "";
    }
  }
  return strArray;
};
document.writeln(cutString("наслаждение", 3)); // [нас,лаж,ден,ие]
