const path = require("path");
const fs = require("fs");
const Logger = require("nodemon/lib/utils/log");
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
const onlineUsers = [
  { name: "Andrii", age: 22, city: "Lviv" },
  { name: "Elon", age: 99, city: "Zhmerynka" },
];
const inPersonUsers = [
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
  fs.writeFile(
    path.join(__dirname, "main", "online", user.name + ".txt"),
    `\nName: ${user.name} \nAge:${user.age} \nCity:${user.city}\n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
inPersonUsers.forEach((user) => {
  fs.writeFile(
    path.join(__dirname, "main", "inPerson", user.name + ".txt"),
    `\nName: ${user.name} \nAge:${user.age} \nCity:${user.city}\n`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

// // Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

const swap = (firstFolder, secondFolder) => {
  fs.readdir(path.join(__dirname, "main", firstFolder), (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    data.forEach((element) => {
      fs.rename(
        path.join(__dirname, "main", firstFolder, element),
        path.join(__dirname, "main", secondFolder, element),
        (err) => {
          if (err) {
            console.log(err);
            throw err;
          }
        }
      );
    });
  });
  fs.readdir(path.join(__dirname, "main", secondFolder), (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    data.forEach((element) => {
      fs.rename(
        path.join(__dirname, "main", secondFolder, element),
        path.join(__dirname, "main", firstFolder, element),
        (err) => {
          if (err) {
            console.log(err);
            throw err;
          }
        }
      );
    });
  });
};

swap("inPerson", "online");
