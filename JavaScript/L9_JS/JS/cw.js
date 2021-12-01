// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// document.getElementById("main_header").classList.add("sep-2021");

//     b) робить шириниу елементу ul 400px

// let ul = document.getElementsByTagName("ul");
// for (const item of ul) {
//   item.style.width = "400px";
// }

//     c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkLists = document.getElementsByClassName("linklist");
// for (const item of linkLists) {
//   item.style.width = "50%";
// }
//     d) отримує текст який зберігається в елементі з класом listElement2

// console.log(document.getElementsByClassName("listElement2")[0].textContent);

// let text = document.getElementsByClassName("listElement2");
// for (const iterator of text) {
//   console.log(iterator.textContent);
// }

//     e) отримує всі елементи li та змінює ім колір фону на сірий

// let lists = document.getElementsByTagName("li");
// for (const item of lists) {
//   item.style.background = "silver";
// }

//     f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName("li");
// for (const item of a) {
//   item.classList.add("anchor");
// }

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a2 = document.getElementsByTagName("li");
// for (const item of a2) {
//   if (item.textContent === "link3") {
//     item.style.fontSize = "40px";
//   }
// }

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let a3 = document.getElementsByTagName("li");
// for (const item of a3) {
//   item.classList.add(`element_${item.textContent}`);
// }

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let color = prompt("Color", "Blue");
// let subHead = document.getElementsByClassName("sub-header");
// for (const iterator of subHead) {
//   iterator.style.backgroundColor = color;
// }

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHead2 = document.getElementsByClassName("sub-header");
// for (const iterator of subHead2) {
//   if (iterator.textContent === "content 2 segment") {
//     iterator.style.backgroundColor = prompt("Color-2", "Red");
//   }
// }

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt(
//   "Input text",
//   "Custom text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum!"
// );
// let content = document.getElementsByClassName("content_1");
// for (const iterator of content) {
//   iterator.textContent = text;
// }

//     l) отримати елементи p та змінити їм padding на 20px

// let p = document.getElementsByTagName("p");
// for (const iterator of p) {
//   iterator.style.padding = "20px";
// }

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2 = document.getElementsByClassName("text2");
// for (const iterator of text2) {
//   iterator.textContent = "sep-2021";
// }
