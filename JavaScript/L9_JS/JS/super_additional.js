//
let users = [
  {
    name: "vasya",
    age: 31,
    status: false,
    address: {
      city: "Lviv",
      country: "Ukraine",
      street: "Shevchenko",
      houseNumber: 1,
    },
  },
  {
    name: "petya",
    age: 30,
    status: true,
    address: {
      city: "New York",
      country: "USA",
      street: "East str",
      houseNumber: 21,
    },
  },
  {
    name: "kolya",
    age: 29,
    status: true,
    address: {
      city: "Budapest",
      country: "Hungary",
      street: "Kuraku",
      houseNumber: 78,
    },
  },
  {
    name: "olya",
    age: 28,
    status: false,
    address: {
      city: "Prague",
      country: "Czech",
      street: "Paster",
      houseNumber: 56,
    },
  },
  {
    name: "max",
    age: 30,
    status: true,
    address: {
      city: "Istanbul",
      country: "Turkey",
      street: "Mikar",
      houseNumber: 39,
    },
  },
  {
    name: "anya",
    age: 31,
    status: false,
    address: {
      city: "Rio",
      country: "Brasil",
      street: "Ronaldi",
      houseNumber: 5,
    },
  },
  {
    name: "oleg",
    age: 28,
    status: false,
    address: {
      city: "Montreal",
      country: "Canada",
      street: "Acusto",
      houseNumber: 90,
    },
  },
  {
    name: "andrey",
    age: 29,
    status: true,
    address: {
      city: "Quebeck",
      country: "Canada",
      street: "Binaro",
      houseNumber: 33,
    },
  },
  {
    name: "masha",
    age: 30,
    status: true,
    address: {
      city: "Moscow",
      country: "Russia",
      street: "Gogolia",
      houseNumber: 1,
    },
  },
  {
    name: "olya",
    age: 31,
    status: false,
    address: {
      city: "Portland",
      country: "USA",
      street: "Forest str",
      houseNumber: 4,
    },
  },
  {
    name: "max",
    age: 31,
    status: true,
    address: {
      city: "Cairo",
      country: "Egypt",
      street: "Seashore",
      houseNumber: 45,
    },
  },
];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let userAddress = [];
// let i = 0;
// for (const user of users) {
//   userAddress[i] = user.address;
//   i++;
// }
// console.log(userAddress);

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let userAddress = [];
// let i = 0;
// //
// for (const user of users) {
//   let userContainer = document.createElement("div");
//   userContainer.setAttribute("class", "userContainer");
//   let userName = document.createElement("h2");
//   userName.setAttribute("class", "name");
//   userName.innerText = user.name;
//   //
//   let age = document.createElement("div");
//   age.setAttribute("class", "age");
//   age.innerText = user.age;
//   //
//   let userStatus = document.createElement("div");
//   userStatus.setAttribute("class", "status");
//   userStatus.innerText = user.status;
//   //
//   let userAdress = document.createElement("div");
//   userAdress.setAttribute("class", "userAdress");
//   userAdress.innerText = `City: ${user.address.city}, Country: ${user.address.country}, Street: ${user.address.street}, House number: ${user.address.houseNumber}`;
//   //
//   userContainer.append(userName, age, userStatus, userAdress);

//   document.body.appendChild(userContainer);
// }

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let userAddress = [];
// let i = 0;
// //
// for (const user of users) {
//   let userContainer = document.createElement("div");
//   userContainer.setAttribute("class", "userContainer");
//   let userNameContainer = document.createElement("div");
//   userNameContainer.setAttribute("class", "userNameContainer");
//   let userName = document.createElement("h2");
//   userName.setAttribute("class", "name");
//   userName.innerText = user.name;
//   userNameContainer.appendChild(userName);
//   //
//   let ageContainer = document.createElement("div");
//   ageContainer.setAttribute("class", "ageContainer");
//   let age = document.createElement("div");
//   age.setAttribute("class", "age");
//   age.innerText = user.age;
//   ageContainer.appendChild(age);
//   //
//   let userStatusContainer = document.createElement("div");
//   userStatusContainer.setAttribute("class", "userStatusContainer");
//   let userStatus = document.createElement("div");
//   userStatus.setAttribute("class", "status");
//   userStatus.innerText = user.status;
//   userStatusContainer.appendChild(userStatus);
//   //
//   let userAddressContainer = document.createElement("div");
//   userAddressContainer.setAttribute("class", "userAddressContainer");
//   let userAddress = document.createElement("div");
//   userAddress.setAttribute("class", "userAdress");
//   userAddress.innerText = `City: ${user.address.city}, Country: ${user.address.country}, Street: ${user.address.street}, House number: ${user.address.houseNumber}`;
//   userAddressContainer.appendChild(userAddress);
//   //
//   userContainer.append(
//     userNameContainer,
//     ageContainer,
//     userStatusContainer,
//     userAddressContainer
//   );

//   document.body.appendChild(userContainer);
// }

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let userAddress = [];
// let i = 0;
// //
// for (const user of users) {
//   let userContainer = document.createElement("div");
//   userContainer.setAttribute("class", "userContainer");
//   let userNameContainer = document.createElement("div");
//   userNameContainer.setAttribute("class", "userNameContainer");
//   let userName = document.createElement("h2");
//   userName.setAttribute("class", "name");
//   userName.innerText = user.name;
//   userNameContainer.appendChild(userName);
//   //
//   let ageContainer = document.createElement("div");
//   ageContainer.setAttribute("class", "ageContainer");
//   let age = document.createElement("div");
//   age.setAttribute("class", "age");
//   age.innerText = user.age;
//   ageContainer.appendChild(age);
//   //
//   let userStatusContainer = document.createElement("div");
//   userStatusContainer.setAttribute("class", "userStatusContainer");
//   let userStatus = document.createElement("div");
//   userStatus.setAttribute("class", "status");
//   userStatus.innerText = user.status;
//   userStatusContainer.appendChild(userStatus);
//   //
//   let userAddressContainer = document.createElement("div");
//   userAddressContainer.setAttribute("class", "userAddressContainer");
//   //
//   let userCity = document.createElement("div");
//   userCity.setAttribute("class", "userCity");
//   userCity.innerText = user.address.city;
//   //
//   let userCountry = document.createElement("div");
//   userCountry.setAttribute("class", "userCountry");
//   userCountry.innerText = user.address.country;
//   //
//   let userStreet = document.createElement("div");
//   userStreet.setAttribute("class", "userStreet");
//   userStreet.innerText = user.address.street;
//   //
//   let userHouseNumber = document.createElement("div");
//   userHouseNumber.setAttribute("class", "userHouseNumber");
//   userHouseNumber.innerText = user.address.houseNumber;
//   //
//   userAddressContainer.append(
//     userCity,
//     userCountry,
//     userStreet,
//     userHouseNumber
//   );
//   //
//   userContainer.append(
//     userNameContainer,
//     ageContainer,
//     userStatusContainer,
//     userAddressContainer
//   );

//   document.body.appendChild(userContainer);
// }

//
let rules = [
  {
    title: "Первое правило Бойцовского клуба.",
    body: "Никому не рассказывать о Бойцовском клубе.",
  },
  {
    title: "Второе правило Бойцовского клуба.",
    body: "Никогда никому не рассказывать о Бойцовском клубе.",
  },
  {
    title: "Третье правило Бойцовского клуба.",
    body: "В схватке участвуют только двое.",
  },
  {
    title: "Четвертое правило Бойцовского клуба.",
    body: "Не более одного поединка за один раз.",
  },
  {
    title: "Пятое правило Бойцовского клуба.",
    body: "Бойцы сражаются без обуви и голые по пояс.",
  },
  {
    title: "Шестое правило Бойцовского клуба.",
    body: "Поединок продолжается столько, сколько потребуется.",
  },
  {
    title: "Седьмое правило Бойцовского клуба.",
    body: "Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.",
  },
  {
    title: "Восьмое и последнее правило Бойцовского клуба.",
    body: "Новичок обязан принять бой.",
  },
];

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let rulesList = document.createElement("ul");
// for (const item of rules) {
//   let rules = document.createElement("li");
//   rules.setAttribute("class", "rules");
//   //
//   let h2 = document.createElement("h2");
//   h2.innerText = item.title;
//   //
//   rules.appendChild(h2);
//   rulesList.appendChild(rules);
// }
// document.getElementById("content").appendChild(rulesList);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let number = 0;
let wrap = document.createElement("div");
wrap.setAttribute("class", "wrap");
for (const item of rules) {
  let rules = document.createElement("div");
  rules.setAttribute("class", "rules rule" + number);
  //   rules.classList.add("rule" + number);
  //
  let h2 = document.createElement("h2");
  h2.innerText = item.title;
  //
  let p = document.createElement("p");
  p.innerText = item.body;
  //
  rules.append(h2, p);
  wrap.appendChild(rules);
  ++number;
}
document.body.appendChild(wrap);
