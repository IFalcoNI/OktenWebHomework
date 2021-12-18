// - Создать произвольный елемент с id = text.
//  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let textDiv = document.getElementById("text");
textDiv.innerText = "Hello";
const deleteText = () => {
  //   textDiv.innerText = "";
  //   textDiv.hidden = true;
  textDiv.style.display = "none";
};
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const selfDestroy = () => {
  document.getElementById("btn").hidden = true;
};
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let message = document.getElementById("message");
const checkAge = () => {
  let age = document.getElementById("inputAge").value;
  if (+age < 18) {
    message.innerText = "Ваш вік не відповідає вимогам сайту";
  } else {
    message.innerText = "Вітаємо";
  }
};
// - Создайте меню, которое раскрывается/сворачивается при клике
const toggleMenu = () => {
  document.querySelector(".menuList").classList.toggle("hide");
};
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
  {
    username: "user1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum!",
  },
  {
    username: "user2",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum!",
  },
  {
    username: "user3",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum!",
  },
  {
    username: "user4",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum!",
  },
  {
    username: "user5",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum!",
  },
];

let commentsContainer = document.createElement("div");
for (const item of comments) {
  let commentBox = document.createElement("div");
  //
  let h2 = document.createElement("h2");
  h2.innerText = item.username;
  //
  let p = document.createElement("p");
  p.innerHTML = item.comment;
  //
  let btn = document.createElement("button");
  btn.innerHTML = "Toggle comment";
  //
  btn.onclick = () => {
    p.classList.toggle("hide");
  };
  commentBox.append(h2, p, btn);
  //
  commentsContainer.appendChild(commentBox);
}
document.getElementById("comments").appendChild(commentsContainer);
