// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArray = [
  new User(5, "Name5", "Surname5", "USR5@gmail.com", 380965555555),
  new User(2, "Name2", "Surname2", "USR2@gmail.com", 380962222222),
  new User(6, "Name6", "Surname6", "USR6@gmail.com", 380966666666),
  new User(8, "Name8", "Surname8", "USR8@gmail.com", 380968888888),
  new User(3, "Name3", "Surname3", "USR3@gmail.com", 380963333333),
  new User(1, "Name1", "Surname1", "USR1@gmail.com", 380961111111),
  new User(10, "Name10", "Surname10", "USR10@gmail.com", 380961010101),
  new User(9, "Name9", "Surname9", "USR9@gmail.com", 380969999999),
  new User(7, "Name7", "Surname7", "USR7@gmail.com", 380967777777),
  new User(4, "Name4", "Surname4", "USR4@gmail.com", 380964444444),
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const myFilter = (user) => {
  if (user.id % 2 == 0) {
    return user;
  }
};
// console.log(usersArray.filter(myFilter));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const ascendingSort = (a, b) => {
  return a.id - b.id;
};
// console.log(usersArray.sort(ascendingSort));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [
  new Client(5, "Name5", "Surname5", "USR5@gmail.com", 380965555555, [
    "milk",
    "cheese",
    "chocolate",
  ]),
  new Client(2, "Name2", "Surname2", "USR2@gmail.com", 380962222222, [
    "water",
    "popcorn",
  ]),
  new Client(6, "Name6", "Surname6", "USR6@gmail.com", 380966666666, [
    "coke",
    "pepsi",
    "mentos",
    "extra bottle",
  ]),
  new Client(8, "Name8", "Surname8", "USR8@gmail.com", 380968888888, [
    "tesla",
    "laptop",
  ]),
  new Client(3, "Name3", "Surname3", "USR3@gmail.com", 38093333333, [
    "milk",
    "cheese",
    "chocolate",
  ]),
  new Client(1, "Name1", "Surname1", "USR1@gmail.com", 380961111111, [
    "ice cream",
  ]),
  new Client(10, "Name10", "Surname10", "USR10@gmail.com", 380961010101, [
    "milk",
    "cheese",
    "chocolate",
    "bread",
    "tomato",
  ]),
  new Client(9, "Name9", "Surname9", "USR9@gmail.com", 380969999999, [
    "chocolate",
  ]),
  new Client(7, "Name7", "Surname7", "USR7@gmail.com", 380967777777, [
    "cheese",
  ]),
  new Client(4, "Name4", "Surname4", "USR4@gmail.com", 380964444444, [
    "pepsi",
    "sprite",
  ]),
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const clientAscendingSort = (a, b) => {
  return a.order.length - b.order.length;
};
console.log(clientArray.sort(clientAscendingSort));
