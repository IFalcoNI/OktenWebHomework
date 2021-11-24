// - Дано натуральное число n. Выведите все числа от 1 до n.
const toLimit = (n) => {
  for (let i = 0; i < n; i++) {
    // console.log(i + 1);
  }
};
toLimit(5);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const rangeOutput = (a, b) => {
  if (a < b) {
    for (let i = a; i < b; i++) {
      console.log(i);
    }
  } else {
    for (let i = a; i >= b; --i) {
      console.log(i);
    }
  }
};
// rangeOutput(10, 5);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const indexSwap = (array, index) => {
  if (index < array.length - 1) {
    let swaper = array[index];
    array[index] = array[index + 1];
    array[index + 1] = swaper;
  } else {
    console.log("IndexIsToHigh");
  }
  return array;
};
// console.log(indexSwap([9, 8, 0, 4], 0));

// - Сtворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const pushZero = (array) => {
  if (array.length >= 1 && array.length <= 100) {
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === 0) {
        array.push(array[i]);
        array.splice(i, 1);
      }
    }
  } else {
    console.log("Array index not is not range");
  }
  return array;
};
// console.log(pushZero([1, 0, 6, 0, 3]));
// console.log(pushZero([0, 1, 2, 3, 4]));

//Версія без вбудованих фіч
const zeroSwapper = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      for (let j = i; j < array.length; j++) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = 0;
    }
  }
  return array;
};
// console.log(zeroSwapper([0, 1, 2, 3, 4, 5]));
// console.log(zeroSwapper([1, 0, 6, 0, 3]));
// console.log(zeroSwapper([0, 1, 2, 3, 4]));
