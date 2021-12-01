// Все робити за допомоги js.
// - створити блок,

// let div = document.createElement("div");

// - додати йому класи wrap, collapse, alpha, beta

// div.setAttribute("class", "wrap collapse alpha beta");
// div.innerText = `I'am div with class "${div.classList}"`;

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// - додати цей блок в body.

// document.body.appendChild(div);

// - клонувати його повністю, та додати клон в body.
// let cloned = div.cloneNode(true);
// cloned.innerText = `I'am cloned div with class "${cloned.classList}"`;
// document.body.appendChild(cloned);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let headerArray = ["Main", "Products", "About us", "Contacts"];

// let menu = document.getElementsByClassName("menu")[0];
// for (const iterator of headerArray) {
//   let li = document.createElement("li");
//   li.innerText = iterator;
//   menu.appendChild(li);
// }

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// - Є масив

// let coursesAndDurationArray = [
//   { title: "JavaScript Complex", monthDuration: 5 },
//   { title: "Java Complex", monthDuration: 6 },
//   { title: "Python Complex", monthDuration: 6 },
//   { title: "QA Complex", monthDuration: 4 },
//   { title: "FullStack", monthDuration: 7 },
//   { title: "Frontend", monthDuration: 4 },
// ];

// let menu = document.getElementsByClassName("menu")[0];

// for (const iterator of coursesAndDurationArray) {
//   let li = document.createElement("li");
//   li.innerText =
//     "Title " + iterator.title + " with duration " + iterator.monthDuration;
//   menu.appendChild(li);
// }

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// let menu = document.getElementsByClassName("menu")[0];

// for (const iterator of coursesAndDurationArray) {
//   let li = document.createElement("li");
//   //
//   let div = document.createElement("div");
//   div.setAttribute("class", "item");
//   //
//   let h1 = document.createElement("h1");
//   h1.setAttribute("class", "heading");
//   h1.innerText = iterator.title;
//   //
//   let p = document.createElement("p");
//   p.setAttribute("class", "description");
//   p.innerText = iterator.monthDuration;
//   //
//   div.append(h1, p);
//   li.appendChild(div);
//   menu.appendChild(li);
// }
