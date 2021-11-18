// - створити функцію яка обчислює та повертає площу прямокутника
const sP = (a, b) => {
  return a * b;
};
// console.log(sP(5, 10));

// - створити функцію яка обчислює та повертає площу кола
const sCircle = (r) => {
  return Math.PI * Math.pow(r, 2);
};
// console.log(sCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру
const sCylinder = (r, h) => {
  return 2 * Math.PI * r * (r + h);
};
// console.log(sCylinder(5, 10)); //toFixed

// - створити функцію яка приймає масив та виводить кожен його елемент
const arrayOut = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};
// arrayOut([1, 4, 5, 6]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const pOutput = (text) => {
  document.write(`<p>${text}</p>`);
};
// pOutput("Hello");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const generateList = (text) => {
  document.write(`<ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                     </ul>`);
};
// generateList("LIST");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const generateCustomList = (n, text) => {
  document.write(`<ul>`);
  for (let i = 0; i < n; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
};
// generateCustomList(5, "CustomList");

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const listFromArray = (array) => {
  document.write(`<ul>`);
  for (let i = 0; i < array.length; i++) {
    document.write(`<li>${array[i]}</li>`);
  }
  document.write(`</ul>`);
};
// listFromArray([1, true, "String", 6]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const generateUserCard = (array) => {
  document.write(`<div class="cards">`);
  array.forEach((element) => {
    document.write(`<div class="card">
                       <h2>${element.name}</h2>
                       <p>${element.id}</p>
                       <p>${element.age}</p>
                      </div>`);
  });
  document.write(`</div>`);
};
// generateUserCard([
//   { id: 1, name: "Mario", age: 50 },
//   { id: 2, name: "Luigi", age: 51 },
//   { id: 3, name: "Turtle", age: 99 },
// ]);
