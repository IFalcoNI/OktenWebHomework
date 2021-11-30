// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//-- отримує текст з параграфа з id "content"

// console.log(document.getElementById("content").textContent);

// -- отримує текст з блоку з id "rules"

// console.log(document.getElementById("rules").textContent);

//-- замініть текст параграфа з id 'content' на будь-який інший

// console.log(
//   (document.getElementById("content").textContent =
//     "New custom Text for paragraph `content `")
// );

//-- замініть текст параграфа з id 'rules' на будь-який інший

// console.log(
//   (document.getElementById("rules").textContent = "New  rules: 1: No rules")
// );

//-- змініть кожному елементу колір фону на червоний

// document.getElementById("content").style.backgroundColor = "red";
// document.getElementById("rules").style.backgroundColor = "red";
// let arr = document.getElementsByTagName("li");
// for (let i = 0; i < arr.length; i++) {
//   arr[i].style.backgroundColor = "red";
// }

//-- змініть кожному елементу колір тексту на синій

// document.body.style.color = "blue";

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let array = document.getElementsByClassName("fc_rules");
// for (let i = 0; i < array.length; i++) {`
//   array[i].style.color = "blue"; //red
// }
