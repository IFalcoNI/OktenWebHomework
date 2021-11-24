// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// console.log("hello world".length);
// console.log("lorem ipsum".length);
// console.log("javascript is cool".length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// console.log("hello world".toUpperCase());
// console.log("lorem ipsum".toUpperCase());
// console.log("javascript is cool".toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log("HELLO WORLD".toLowerCase());
// console.log("LOREM IPSUM".toLowerCase());
// console.log("JAVASCRIPT IS COOL".toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = " dirty string   ";
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let myStr = "Каждый охотник желает знать";

const stringToarray = (str) => {
  let newStr = "";
  let strArray = [];
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
      strArray[index] = newStr;
    } else {
      newStr = "";
      ++index;
    }
  }
  return strArray;
};

let arr = stringToarray(myStr);
// console.log(arr);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let strDelete = "Каждый охотник желает знать";

const delete_characters = (str, length) => {
  str = str.trim();
  let limStr = "";
  for (let i = 0; i < length; i++) {
    limStr += str[i];
  }
  return limStr;
};
// document.writeln(delete_characters(strDelete, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let strDash = "html javascript php";

const insert_dash = (str) => {
  str = str.trim().toUpperCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str = str.split("");
      str[i] = "-";
      str = str.join("");
    }
  }

  return str;
};
// document.writeln(insert_dash(strDash)); // 'HTML-JAVASCRIPT-PHP'

// v2
let strDashV2 = "html javascript php";

const insert_dashV2 = (str) => {
  str = str.trim().replaceAll(" ", "-").toUpperCase();
  return str;
};
// document.writeln(insert_dashV2(strDashV2)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

const stringFirstToUppercase = (str) => {
  str = str.trim();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};

let string = "html javascript php";

// document.writeln(stringFirstToUppercase(string)); // 'Html Javascript Php'

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const stringToUppercase = (str) => {
  str = str.trim().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  str = str.join(" ");
  return str;
};
let string1 = "html javascript php";

// document.writeln(stringToUppercase(string1)); // 'Html Javascript Php'
