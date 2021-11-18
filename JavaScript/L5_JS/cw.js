// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const findMin = (a, b, c) => {
  return a <= b && a <= c
    ? a + " a"
    : b < a && b <= c
    ? b + " b"
    : c < a && c < b
    ? c + " c"
    : "";
};
// console.log(findMin(3, 2, 2));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const findMax = (a, b, c) => {
  return a >= b && a >= c
    ? a + " a"
    : b > a && b >= c
    ? b + " b"
    : c > a && c > b
    ? c + " c"
    : "";
};
// console.log(findMax(3, 2, 7));

// - створити функцію яка повертає найбільше число з масиву
const maxFromArray = (array) => {
  let max = array[0];
  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};
// console.log(maxFromArray([1, 6, 2, 9, 3]));

// - створити функцію яка повертає найменьше число з масиву
const minFromArray = (array) => {
  let min = array[0];
  array.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });
  return min;
};
// console.log(minFromArray([8, 2, 2, 9, 3]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumArray = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};
// console.log(sumArray([8, 2, 2, 9, 3]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const avgOfArray = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum / array.length;
};
// console.log(avgOfArray([8, 2, 2, 9, 3]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const minMaxArray = (array) => {
  let min = array[0];
  let max = array[0];
  array.forEach((element) => {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  });
  console.log(max);
  return min;
};
// console.log(minMaxArray([8, 2, 2, 9, 3]));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
const randomArray = (len) => {
  let array = [];
  for (let i = 0; i < len; ++i) {
    array[i] = Math.floor(Math.random() * 100);
    // console.log(array[i]);
  }
  return array;
};
// console.log(randomArray(10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const upsideDownArray = (array) => {
  let revArray = [];
  for (let i = array.length - 1, j = 0; i >= 0; --i, ++j) {
    revArray[j] = array[i];
  }
  console.log(array);
  return revArray;
};
console.log(upsideDownArray([1, 2, 3]));
