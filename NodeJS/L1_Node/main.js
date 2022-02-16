const path = require("path");
const fs = require("fs");
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
let onlineUsers = [
  { name: "Andrii", age: 22, city: "Lviv" },
  { name: "Elon", age: 99, city: "Zhmerynka" },
];
let inPersonUsers = [
  { name: "Oleg", age: 22, city: "Lviv" },
  { name: "Anya", age: 20, city: "City" },
];

// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
fs.mkdirSync(
  path.join(__dirname, "main", "online"),
  { recursive: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
fs.mkdirSync(
  path.join(__dirname, "main", "inPerson"),
  { recursive: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

onlineUsers.forEach((user) => {
  fs.appendFileSync(
    path.join(__dirname, "main", "online", "onlineUsers.txt"),
    `\nName: ${user.name} \nAge:${user.age} \nCity:${user.city}\n`,
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    }
  );
});
inPersonUsers.forEach((user) => {
  fs.appendFileSync(
    path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"),
    `\nName: ${user.name} \nAge:${user.age} \nCity:${user.city}\n`,
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    }
  );
});

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
setTimeout(() => {
  let swapData;
  fs.readFile(
    path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"),
    (err, data) => {
      if (err) {
        console.log(err);
        throw err;
      }
      fs.readFile(
        path.join(__dirname, "main", "online", "onlineUsers.txt"),
        (err, data) => {
          if (err) {
            console.log(err);
            throw err;
          }
          swapData = data.toString();
        }
      );
      fs.truncate(
        path.join(__dirname, "main", "online", "onlineUsers.txt"),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      fs.appendFile(
        path.join(__dirname, "main", "online", "onlineUsers.txt"),
        data.toString(),
        { flag: "w" },
        (err) => {
          if (err) {
            console.log(err);
            throw err;
          }
        }
      );
      fs.truncate(
        path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  );
  fs.appendFile(
    path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"),
    swapData,
    { flag: "w" },
    (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    }
  );
}, 2000);
