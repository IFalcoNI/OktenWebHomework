// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
//

const emailChecker = (email) => {
  return (
    email.includes("@") && //
    email.indexOf(".") - email.indexOf("@") > 1 && // 1 символ між крапкою та равликом
    email.indexOf("@") > 0 // 1 символ до равлика
  );
};
let email = "someeMAIL@i.ua";

// document.write(emailChecker(email));

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

// let lenArray = [];
// let titles = [];

const descendingSortByModules = (a, b) => {
  return b.modules.length - a.modules.length;
};

coursesArray.sort(descendingSortByModules);

coursesArray.forEach((element) => {
  // console.log(element.title + " - " + element.modules.length + " modules");
});

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о",
  str = "Астрономия это наука о небесных объектах";
const count = (str, stringsearch) => {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === stringsearch) {
      ++c;
    }
  }
  return c;
};
// document.writeln(count(str, symb)); // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str1 = "Сила тяжести приложена к центру масс тела";
const cutString = (str, n) => {
  str = str.split(" ");
  str = str.splice(0, n);
  // str.length = n; //v2
  str = str.join(" ");
  return str;
};
// document.writeln(cutString(str1, 5)); // 'Сила тяжести приложена к центру'
